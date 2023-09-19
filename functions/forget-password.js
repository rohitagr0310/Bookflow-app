const { hash } = require("bcrypt");
const { sign, verify } = require("jsonwebtoken");
const nodemailer = require("nodemailer"); // You need to install nodemailer

const connection = require("./db.js");
// const secretKey = "bookflowadministrationimp";
const resetPasswordSecret = "resetpasswordsecret"; // A secret key for generating reset password
const smtpTransport = nodemailer.createTransport({
  // Configure this with your SMTP server details
  service: "Gmail",
  auth: {
    user: "your_email@gmail.com",
    pass: "your_password"
  }
});

const queryDatabase = async (connection, sql, params) => {
  // Your existing database query function
};

exports.handler = async (event, context) => {
  try {
    const { email, password, token } = JSON.parse(event.body);

    if (token) {
      // Handle password reset request
      const decodedToken = verify(token, resetPasswordSecret);

      if (!decodedToken || !decodedToken.userId) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: "Invalid or expired token" })
        };
      }

      // Hash the new password and update it in the database
      const hashedPassword = await hash(password, 10); // You can adjust the saltRounds
      await queryDatabase(
        connection,
        "UPDATE user SET password = ? WHERE id = ?",
        [hashedPassword, decodedToken.userId]
      );

      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Password reset successfully" })
      };
    } else {
      // Handle forgot password request
      const user = await queryDatabase(
        connection,
        "SELECT * FROM user WHERE email = ?",
        email
      );

      if (user.length === 0) {
        return {
          statusCode: 404,
          body: JSON.stringify({ error: "User not found" })
        };
      }

      // Generate a unique token for password reset (valid for a limited time)
      const resetToken = sign({ userId: user[0].id }, resetPasswordSecret, {
        expiresIn: "1h" // Adjust the expiration time as needed
      });

      // Send the reset password link to the user's email
      const resetLink = `https://localhost:8888/forget-password?token=${resetToken}`;
      const mailOptions = {
        to: email,
        subject: "Reset Your Password",
        text: `Click the following link to reset your password: ${resetLink}`
      };

      await smtpTransport.sendMail(mailOptions);

      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Password reset email sent" })
      };
    }
  } catch (error) {
    console.error("Error in password reset function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred" })
    };
  }
};
