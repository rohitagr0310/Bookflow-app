import { hash, compare } from "bcrypt";
import pkg from "jsonwebtoken";
import pool from "../db.js";
const { sign } = pkg;

const authController = {
  signup: (req, res) => {
    try {
      const userType = "U";
      const { name, rollnumber, email, password, confirmPassword } = req.body;

      console.log(name);
      console.log(rollnumber);
      console.log(email);
      console.log(password);
      console.log(confirmPassword);

      if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
      }

      // Check if the email already exists in the database
      pool.query("SELECT * FROM user WHERE email = ?", [email], (error, results) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ message: "An error occurred" });
        }

        if (results.length > 0) {
          return res.status(400).json({ message: "Email already exists" });
        }

        // Hash the password
        hash(password, 10, (hashError, hashedPassword) => {
          if (hashError) {
            console.error(hashError);
            return res.status(500).json({ message: "An error occurred" });
          }

          // Save the user to the database
          pool.query(
            "INSERT INTO user (name, rollnumber, email, password, user_type) VALUES (?, ?, ?, ?, ?)",
            [name, rollnumber, email, hashedPassword, userType],
            (insertError, insertResult) => {
              if (insertError) {
                console.error(insertError);
                return res.status(500).json({ message: "Failed to create user" });
              }

              if (insertResult.affectedRows === 1) {
                return res.status(201).json({ message: "Signup successful" });
              } else {
                return res.status(500).json({ message: "Failed to create user" });
              }
            }
          );
        });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred" });
    }
  },
  login: (req, res) => {
    try {
      const { email, password } = req.body;
      pool.query("SELECT * FROM user WHERE email = ?", email, (error, results) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ message: "An error occurred" });
        }
        if (results.length === 0) {
          return res.status(401).json({ message: "Invalid credentials" });
        }
        const user = results[0];
        const isPasswordValid = compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({ message: "Invalid credentials" });
        }

        // Extract user type from the user object
        const userType = user.user_type;

        const token = sign({ userId: user.id }, "your_secret_key");
        return res.status(200).json({ message: "Login successful", email, token, userType });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred" });
    }
  }
};

export default authController;
