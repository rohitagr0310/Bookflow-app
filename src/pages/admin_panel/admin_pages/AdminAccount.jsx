import React from "react";
import "./_admin-account.css";
import "./Profile_pic.jpg";

const AdminAccount = () => {
  const userDetails = {
    email: "admin@123",
    librarianName: "Adarsh Regar",
    adminContactNo: "1234567890",
    libraryAddress: "Techno India NJR Institute of Technology, Udaipur, Rajasthan",
    profilePicture: "/admin_pages/Profile_pic.jpg", // Example path to profile picture
    accountStatus: "Active",
    lastLogin: "2023-08-20 10:30 AM",
    libraryStatistics: {
      booksAvailable: 300,
      booksBorrowed: 50
      // ... other statistics
    },
    personalNotes: "Remember to update the book catalog."
  };

  return (
    <body>
      <div className="account-container">
        <h1>Account Information</h1>
        <img src={userDetails.profilePicture} alt="Profile" className="profile-picture" />
        <div className="account-info"></div>
        <p>Email: {userDetails.email}</p>
        <p>Librarian Name: {userDetails.librarianName}</p>
        <p>Admin Contact No: {userDetails.adminContactNo}</p>
        <p>Library Address: {userDetails.libraryAddress}</p>
        <p>Account Status: {userDetails.accountStatus}</p>
        <p>Last Login: {userDetails.lastLogin}</p>
        <p>Books Available: {userDetails.libraryStatistics.booksAvailable}</p>
        <p>Books Borrowed: {userDetails.libraryStatistics.booksBorrowed}</p>
        <p>Personal Notes: {userDetails.personalNotes}</p>
      </div>
    </body>
  );
};

export default AdminAccount;
