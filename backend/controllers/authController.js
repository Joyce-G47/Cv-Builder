const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/keys');
const { sendConfirmationEmail,sendResetPasswordEmail} = require('./emailController');
const path = require('path');
const crypto = require('crypto');
const validator = require('validator');


exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create and save user with a pending status
    user = new User({ name, email, password, isVerified: false });
    await user.save();

    // Generate confirmation token
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send confirmation email
    await sendConfirmationEmail(user, token);

    res.status(200).json({ msg: 'Verification email sent. Please verify your email to complete registration.' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

exports.confirmEmail = async (req, res) => {
  const { token } = req.params;

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user by email
    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid token or user does not exist' });
    }

    // Update the user's confirmation status
    user.isConfirmed = true;
    await user.save();

     // Render the confirmation HTML page
     res.sendFile(path.join(__dirname, '../views/confirmation.html'));
  } catch (error) {
    res.status(400).json({ message: 'Invalid or expired token' });
  }
};


exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    // Validate email
    if (!email) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    // Find the user
    const user = await User.findOne({ email });
    if (!user) {
      // Respond with a generic message
      return res.status(200).json({ message: 'If an account with this email exists, a reset link has been sent.' });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    // Save token and expiration date
    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    // Send reset password email
    await sendResetPasswordEmail(user, resetToken);

    res.status(200).json({ message: 'If an account with this email exists, a reset link has been sent.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.resetPassword = async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    // Validate new password
    if (!newPassword || newPassword.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }

    // Hash the token to match with stored token
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    // Find the user by hashed token and check if the token has expired
    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() }, // Check if token has expired
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password and clear the reset token fields
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({ message: 'Password has been reset successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


// Login a user
exports.loginUser = async (req, res) => {
  // Extract email and password from request body
  const { email, password } = req.body;

  try {
    // Find the user by email in the database
    const user = await User.findOne({ email });
    if (!user) {
      // If user not found, send a 400 status with a relevant message
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      // If passwords do not match, send a 400 status with a relevant message
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    //Before login check if user confirmed
    if (user.isConfirmed !== true) {
      return res.status(400).json({ msg: 'Please confirm your email to proceed' });
    }

    // Create a payload with the user's ID
    const payload = { user: { id: user.id } };

    // Generate a JWT token with the payload and secret key
    const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });

    // Respond with success message and token
    res.json({ msg: 'Login successful', token });
  } catch (err) {
    // Handle server errors

    res.status(500).send('Server error');
  }
};
