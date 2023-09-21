const { compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const connection = require("./db-test.js");
const secretKey = "bookflowadminstrationimp";

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
    const { email, password } = JSON.parse(event.body);

    const res = await queryDatabase(connection, "SELECT * FROM user WHERE email = ?", email);

    if (res.length === 0) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Invalid credentials" })
      };
    }
    const user = res[0];
    const isPasswordValid = compare(password, user.password);

    if (!isPasswordValid) {
      console.log("user password incorrect");
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Invalid credentials" })
      };
    }

    console.log("Login function completed successfully");

    const token = sign({ userId: user.id, userType: user.user_type }, secretKey);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Login successful", username: user.name, token, userType: user.user_type })
    };
  } catch (error) {
    console.error("Error in login function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An error occurred login the user in" })
    };
  }
};
