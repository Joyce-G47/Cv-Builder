const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// @route   POST /api/register
// @desc    Register a new user
// @access  Public
router.post('/register', authController.registerUser);

// @route   POST /api/login
// @desc    Login a user
// @access  Public
router.post('/login', authController.loginUser);


// @route   GET /api/confirm/:token
// @desc    Confirm user email
// @access  Public
router.get('/confirm/:token', authController.confirmEmail);


module.exports = router;
