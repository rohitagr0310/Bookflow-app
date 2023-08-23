import React, { useState } from "react";
import "./_studentAccount.css"; // Import the CSS file for styling

const StudentAccount = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rollno, setRollNo] = useState("");
  const [emailid, setEmailID] = useState("");
  const [semester, setSemester] = useState("");
  const [year, setYear] = useState("");
  const [phoneno, setPhoneNo] = useState("");

  const handleEditClick = () => {
    setIsEditing(true);
    console.log("Book added:", {
      username,
      password,
      rollno,
      emailid,
      semester,
      year,
      phoneno
    });

    // Clear input fields
    setUsername("");
    setPassword("");
    setRollNo("");
    setEmailID("");
    setSemester("");
    setYear("");
    setPhoneNo("");
  };

  const handleConfirmClick = () => {
    // Logic to handle confirming the edited details
    // Update the database or perform necessary actions
    setIsEditing(false);
  };

  return (
    <div className="account-container">
      <h1>Account</h1>
      <div className="input-group">
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Password:</label>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Roll No.:</label>
        <input type="text" value={rollno} onChange={(e) => setRollNo(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Email ID:</label>
        <input type="text" value={emailid} onChange={(e) => setEmailID(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Semester:</label>
        <input type="text" value={semester} onChange={(e) => setSemester(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Year:</label>
        <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Phone No.</label>
        <input type="text" value={phoneno} onChange={(e) => setPhoneNo(e.target.value)} />
      </div>

      <div className="center-button">
        {isEditing
          ? (
            <button onClick={handleConfirmClick}>Confirm</button>
          )
          : (
            <button onClick={handleEditClick}>Edit</button>
          )}
      </div>
    </div>
  );
};

export default StudentAccount;
