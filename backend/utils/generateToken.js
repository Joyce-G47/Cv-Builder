const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/keys');

const generateToken = (user) => {
  const payload = { user: { id: user.id } };
  return jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
};

module.exports = generateToken;
