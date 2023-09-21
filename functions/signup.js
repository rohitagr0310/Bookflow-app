const { hash } = require("bcrypt");
const nodemailer = require("nodemailer");
const connection = require("./db-test.js");

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
    const userType = "U";
    const phoneNumber = "";
    const emailVerified = "n";
    const phoneNumberVerified = "n";
    const { name, rollnumber, email, password, confirmPassword } = JSON.parse(event.body);

    if (password !== confirmPassword) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Passwords do not match" })
      };
    }

    // Check if the email already exists in the database
    const results = await queryDatabase(connection, "SELECT * FROM user WHERE email = ?", [email]);

    if (results.length > 0) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Email already exists" })
      };
    }

    // Hash the password
    const hashedPassword = await hash(password, 10);

    // Save the user to the database
    const insertResult = await queryDatabase(connection,
      "INSERT INTO user (name, rollnumber, email, phone_number, password, user_type, email_verified, phone_number_verified) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [name, rollnumber, email, phoneNumber, hashedPassword, userType, emailVerified, phoneNumberVerified]
    );

    console.log("insert", insertResult);

    if (insertResult.affectedRows === 1) {
      const verificationToken = generateVerificationToken();

      // Update the user record in the database to include the verification token
      await queryDatabase(connection,
        "UPDATE user SET verification_token = ? WHERE email = ?",
        [verificationToken, email]
      );

      // Send a verification email to the user
      await sendVerificationEmail(email, verificationToken);

      return {
        statusCode: 201,
        body: JSON.stringify({ message: "Signup successful. Verification email sent." })
      };
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Failed to create user" })
      };
    }
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "An error occurred" })
    };
  }
};

const generateVerificationToken = () => {
  // Generate a verification token (you can use a UUID library or any method you prefer)
  // For simplicity, we'll generate a random 6-digit number here
  return Math.floor(100000 + Math.random() * 900000);
};

const sendVerificationEmail = async (email, verificationToken) => {
  // Create a nodemailer transporter using your email service credentials
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.BF_EMAIL,
      pass: process.env.BF_EMAIL_PASSWORD
    }
  });

  // Email content
  const mailOptions = {
    from: process.env.BF_EMAIL, // Sender email address
    to: email, // Recipient email address
    subject: "Email Verification", // Email subject
    text: `http://localhost:8888/.netlify/functions/email-verify?token=${verificationToken}` // Email body with verification link
  };

  // Send the email
  await transporter.sendMail(mailOptions);
};
