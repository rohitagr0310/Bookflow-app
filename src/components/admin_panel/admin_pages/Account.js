import React from "react";

const Account = () => {
  const userDetails = {
    email: "admin@123",
    librarianName: "Adarsh Regar",
    adminContactNo: "1234567890",
    libraryAddress: "Techno India NJR Institute of Technology, Udaipur, Rajasthan"
  };

  return (
    <div>
      <h1>Account Information</h1>
      <p>Email: {userDetails.email}</p>
      <p>Librarian Name: {userDetails.librarianName}</p>
      <p>Admin Contact No: {userDetails.adminContactNo}</p>
      <p>Library Address: {userDetails.libraryAddress}</p>
    </div>
  );
};

export default Account;
