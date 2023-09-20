const { hash } = require("bcrypt");
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
      return {
        statusCode: 201,
        body: JSON.stringify({ message: "Signup successful" })
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
