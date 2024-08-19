// config/emailTransporter.js
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables from .env

const transporter = nodemailer.createTransport({
  service: 'gmail',  // or another email service like 'smtp', 'SendGrid', etc.
  auth: {
    user: process.env.GMAIL_USER,  // Your email address
    pass: process.env.GMAIL_PASS   // Your email password or app-specific password
  }
});

module.exports = transporter;
