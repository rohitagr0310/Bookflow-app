const { compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const connection = require("./db.js");
const secretKey = "bookflowadminstrationimp";

module.exports = async function login (req, res) {
  try {
    const { email, password } = req.body;

    const results = await connection.query("SELECT * FROM user WHERE email = ?", email);

    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = results[0];
    console.log(user);
    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // { userName: user.name }
    const token = sign({ userId: user.id }, { userType: user.user_type }, secretKey);
    return res.status(200).json({ message: "Login successful", email, token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "An error occurred" });
  }
};
