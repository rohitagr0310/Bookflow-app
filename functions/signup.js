const { hash } = require("bcrypt");
const connection = require("./db-test.js");

module.exports = async function signup (req, res) {
  try {
    const userType = "U";
    const { name, rollnumber, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if the email already exists in the database
    const results = await connection.query("SELECT * FROM user WHERE email = ?", [email]);

    if (results.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await hash(password, 10);

    // Save the user to the database
    const insertResult = await connection.query(
      "INSERT INTO user (name, rollnumber, email, password, user_type) VALUES (?, ?, ?, ?, ?)",
      [name, rollnumber, email, hashedPassword, userType]
    );

    if (insertResult.affectedRows === 1) {
      return res.status(201).json({ message: "Signup successful" });
    } else {
      return res.status(500).json({ message: "Failed to create user" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred" });
  }
};
