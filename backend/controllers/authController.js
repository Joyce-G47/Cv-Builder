const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/keys');
const { sendConfirmationEmail} = require('./emailController');
const path = require('path');


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
