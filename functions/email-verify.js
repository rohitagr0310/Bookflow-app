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

exports.handler = async (req, res) => {
  try {
    const { token } = req.query;

    // Look up the user by the verification token
    const [user] = await queryDatabase(connection, "SELECT * FROM user WHERE verification_token = ?", [token]);

    if (!user) {
      // Token not found in the database
      return res.status(400).send("Invalid verification token.");
    }

    // Update the user's email verification status
    await queryDatabase(connection, "UPDATE user SET email_verified = 'y', verification_token = NULL WHERE id = ?", [user.id]);

    // Redirect the user to a success page or display a success message
    res.redirect("http://localhost:8888/email-verified");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred during email verification.");
  }
};
