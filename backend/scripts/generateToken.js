require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../backend/models/User'); // Adjust the path to your User model

const { jwtSecret } = require('../backend/config/keys'); // Adjust the path to your keys file

const generateTokenForUser = async () => {
  try {
    // Find the user
    const user = await User.findOne({ email: 'john.doe@example.com' });
    if (!user) {
      console.log('User not found');
      return;
    }

    // Generate a token
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });

    console.log('JWT Token:', token);
  } catch (err) {
    console.error('Error generating token:', err.message);
  }
};

generateTokenForUser();
