import React from "react";
import "./_history.css";

const History = () => {
  return (
    <div className="history-table">
      <table>
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Name</th>
            <th>Issue Date</th>
            <th>Submit Date</th>
            <th>Book Accession Number</th>
            <th>Book Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>22ETCCS018 </td>
            <td>John Doe</td>
            <td>2023-08-15</td>
            <td>2023-08-22</td>
            <td>123456789</td>
            <td>Introduction to History</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default History;
