import React, { useState } from "react";
import "./_studentAccount.css";

const AccountCreation = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [studentId, setStudentId] = useState("");
  const [collegeId, setCollegeId] = useState("");
  const [semaster, setSemaster] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend
    // You can use a fetch request or an API library here
    // Make sure to handle errors and success messages accordingly
  };

  return (
    <body className="body">
      <div className="container">
        <h1>Edit an Account</h1>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Username:</td>
                <td>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>Password:</td>
                <td>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>Roll Number:</td>
                <td>
                  <input
                    type="text"
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>Student ID:</td>
                <td>
                  <input
                    type="text"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>College ID:</td>
                <td>
                  <input
                    type="text"
                    value={collegeId}
                    onChange={(e) => setCollegeId(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>Semaster:</td>
                <td>
                  <input
                    type="text"
                    value={semaster}
                    onChange={(e) => setSemaster(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>Year:</td>
                <td>
                  <input
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit">Edit Account</button>
        </form>
      </div>
    </body>
  );
};

export default AccountCreation;
