import pool from "../db.js";

const adminController = {
  getAllAdmins: (req, res) => {
    pool.query("SELECT * FROM admins", (error, results) => {
      if (error) {
        console.error("Error fetching admins:", error);
        res.status(500).json({ error: "An error occurred" });
      } else {
        res.status(200).json(results);
      }
    });
  }
};

export default adminController;
