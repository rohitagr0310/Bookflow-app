// Function to retrieve all pending book issue requests for the admin
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

// Function to accept a specific book issue request by ID
exports.acceptRequest = async (req, res) => {
  try {
    const { requestId } = req.body;

    const [request] = await queryDatabase(
      connection,
      "SELECT * FROM book_issue_requests where id = ?",
      requestId
    );

    if (!request) {
      return res.status(404).send("Request not found or already processed.");
    }

    // Determine whether the request is for the library or book bank
    const accession = request.accession;

    // Insert a new record into the corresponding issue table (e.g., issue_lib or issue_bb)
    const currentDate = new Date();
    let dueDate;

    if (accession === "Library") {
      // Calculate the due date as one month ahead
      dueDate = new Date(currentDate);
      dueDate.setMonth(currentDate.getMonth() + 1);
    } else {
      // Calculate the due date as six months ahead
      dueDate = new Date(currentDate);
      dueDate.setMonth(currentDate.getMonth() + 6);
    }

    // Format the due date as a MySQL date string (YYYY-MM-DD)
    const dueDateStr = dueDate.toISOString().slice(0, 10);

    const insertResult = await queryDatabase(
      connection,
      `INSERT INTO ${accession === "Library" ? "issued_library" : "issued_bb"} (user_id, book_id, issue_date, return_date, request_id) VALUES (?, ?, ?, ?, ?)`,
      [request.user_id, request.book_id, currentDate, dueDateStr, requestId]
    );

    if (insertResult.affectedRows === 1) {
      // Update the request status to 'accepted' in the book_issue_requests table
      await queryDatabase(
        connection,
        "delete from book_issue_requests WHERE id = ?",
        request.id
      );

      res.status(200).send("Request accepted.");
    } else {
      res.status(500).send("Failed to accept the request.");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred while processing the request.");
  }
};
