// controllers/emailController.js
const jwt = require('jsonwebtoken');
const transporter = require('../config/nodemailer');

exports.sendConfirmationEmail = async (user, token) => {
  const confirmationUrl = `http://${process.env.HOST}:5000/api/confirm/${token}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: 'Email Confirmation',

    html: `
  <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
      <h2 style="color: #333333; text-align: center; margin-bottom: 20px;">Welcome to CV Build !</h2>
      <p style="font-size: 16px; color: #555555;">Hi ${user.name},</p>
      <p style="font-size: 16px; color: #555555;">
        Thank you for registering! Please confirm your email by clicking the button below:
      </p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${confirmationUrl}" style="background-color: #4CAF50; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-size: 16px;">
          Confirm Email
        </a>
      </div>
      <p style="font-size: 14px; color: #777777; margin-top: 20px;">
        If the button above doesn't work, copy and paste the following link into your browser:
      </p>
      <p style="font-size: 14px; color: #777777; word-wrap: break-word;">
        <a href="${confirmationUrl}" style="color: #4CAF50;">${confirmationUrl}</a>
      </p>
      <p style="font-size: 14px; color: #777777;">Best regards,<br/>The Team</p>
    </div>
    <p style="font-size: 12px; color: #999999; text-align: center; margin-top: 20px;">
      © 2024 Our Platform. All rights reserved.
    </p>
  </div>
`
};
   


  await transporter.sendMail(mailOptions);
};
