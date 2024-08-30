// controllers/emailController.js
const jwt = require('jsonwebtoken');
const transporter = require('../config/nodemailer');

exports.sendConfirmationEmail = async (user, token) => {
  const confirmationUrl = `http://192.168.12.49:5000/api/confirm/${token}`;
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: 'Email Confirmation',

    html: `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2 style="color: #333;">Welcome to Our Platform!</h2>
      <p style="font-size: 16px;">Hi ${user.name},</p>
      <p style="font-size: 16px;">
        Thank you for registering! Please confirm your email by clicking the button below:
      </p>
      <a href="${confirmationUrl}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
        Confirm Email
      </a>
      <p style="font-size: 14px; color: #555; margin-top: 20px;">
        If the button above doesn't work, copy and paste the following link into your browser:
      </p>
      <p style="font-size: 14px; color: #555;">
        <a href="${confirmationUrl}">${confirmationUrl}</a>
      </p>
      <p style="font-size: 14px; color: #555;">Best regards,<br/>The Team</p>
    </div>
  `,
};
   


  await transporter.sendMail(mailOptions);
};
