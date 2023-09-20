const { hash } = require("bcrypt");
const nodemailer = require("nodemailer");

const connection = require("./db-test.js");
const smtpTransport = nodemailer.createTransport({
  // Configure this with your SMTP server details
  service: "Gmail",
  auth: {
    user: process.env.BF_EMAIL,
    pass: process.env.BF_EMAIL_PASSWORD
  }
});

const queryDatabase = async (connection, sql, params) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, params, (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.handler = async (event, context) => {
  try {
    const { email, password, otp } = JSON.parse(event.body);
    console.log("email", email, "password", password, "otp", otp);

    if (otp) {
      // Handle password reset with OTP
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

      // Check if the provided OTP matches the stored OTP
      if (user[0].otp !== otp) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: "Invalid OTP" })
        };
      }

      // Hash the new password and update it in the database
      const hashedPassword = await hash(password, 10); // You can adjust the saltRounds
      await queryDatabase(
        connection,
        "UPDATE user SET password = ? WHERE id = ?",
        [hashedPassword, user[0].id]
      );

      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Password reset successfully" })
      };
    } else {
      // Handle forgot password request (Sending OTP)
      const user = await queryDatabase(
        connection,
        "SELECT * FROM user WHERE email = ?",
        email
      );

      console.log(user);
      if (user.length === 0) {
        return {
          statusCode: 404,
          body: JSON.stringify({ error: "User not found" })
        };
      }

      // Generate a random OTP (6-digit code)
      const generatedOtp = Math.floor(100000 + Math.random() * 900000);

      // Store the OTP in the database for this user
      await queryDatabase(
        connection,
        "UPDATE user SET otp = ? WHERE id = ?",
        [generatedOtp, user[0].id]
      );

      // Send the OTP via email
      console.log("before mail structure \n");
      const mailOptions = {
        to: email,
        subject: "Password Reset OTP",
        text: `Your OTP for password reset is: ${generatedOtp}`
      };

      console.log("before mail sending \n");
      await smtpTransport.sendMail(mailOptions);
      console.log("after mail sending \n");

      return {
        statusCode: 200,
        body: JSON.stringify({ message: "OTP sent successfully" })
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
