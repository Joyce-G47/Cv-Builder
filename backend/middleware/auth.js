// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/keys');

function authMiddleware(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Extract token if it starts with 'Bearer '
    const tokenWithoutBearer = token.startsWith('Bearer ') ? token.slice(7, token.length) : token;
    const decoded = jwt.verify(tokenWithoutBearer, jwtSecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
}


module.exports = authMiddleware;
