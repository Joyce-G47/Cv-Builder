const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/keys');

// Register a new user
exports.registerUser = async (req, res) => {
  // Extract name, email, and password from request body
  const { name, email, password } = req.body;

  try {
    // Check if user already exists in the database
    let user = await User.findOne({ email });
    if (user) {
      // If user exists, send a 400 status with a relevant message
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create a new user object
    user = new User({ name, email, password });

    // Save the new user to the database
    await user.save();

    // Create a payload with the user's ID
    const payload = { user: { id: user.id } };

    // Generate a JWT token with the payload and secret key
    const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });

    // Respond with success message and token
    res.status(201).json({ msg: 'User registered successfully', token });
  } catch (err) {
    // Handle server errors
    res.status(500).send('Server error');
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
