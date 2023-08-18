import React from "react";
import "./DashboardStyle.css"; // Import your CSS file

const Dashboard = () => {
  // Placeholder data
  const totalBooks = 100;
  const issuedBooks = 25;
  const remainingBooks = totalBooks - issuedBooks;

  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <h2>Total Books</h2>
        <p>{totalBooks}</p>
      </div>
      <div className="dashboard-card">
        <h2>Books Issued</h2>
        <p>{issuedBooks}</p>
      </div>
      <div className="dashboard-card">
        <h2>Remaining Books</h2>
        <p>{remainingBooks}</p>
      </div>
    </div>
  );
};

export default Dashboard;
