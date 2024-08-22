// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { forgotPassword, resetPassword } = require('../controllers/authController');


// Route to handle forgot password
router.post('/forgot-password', forgotPassword);

// Route to handle reset password with token
router.post('/reset-password/:token', resetPassword);

module.exports = router;
