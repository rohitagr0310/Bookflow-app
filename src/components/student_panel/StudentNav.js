import React from "react";
import { Link } from "react-router-dom";
import "./StudentNavStyle.css";
import "./student_pages/Account.js";
import "./student_pages/History.js";
import "./student_pages/IssuedBooks.js";
import "./student_pages/Logout.js";
import "./student_pages/Search.js";

const StudentNav = () => {
  const navigationStyle = {
    padding: "180px 50px"
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    display: "block", // Display as block to arrange them in blocks
    marginBottom: "20px" // Equal spacing between blocks
  };

  const linkHoverStyle = {
    color: "lightblue"
  };

  return (
    <div style={navigationStyle} className="navigation-panel">
      <nav>
        <ul className="link-list"> {/* Add a class to the ul */}
          <li><Link to="/Account" style={linkStyle} activeStyle={linkHoverStyle}>Account</Link></li>
          <li><Link to="/AddBook" style={linkStyle} activeStyle={linkHoverStyle}>Search</Link></li>
          <li><Link to="/ManageStudents" style={linkStyle} activeStyle={linkHoverStyle}>History</Link></li>
          <li><Link to="/IssuedBooks" style={linkStyle} activeStyle={linkHoverStyle}>Issued Books</Link></li>
          <li><Link to="/Logout" style={linkStyle} activeStyle={linkHoverStyle}>Logout</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default StudentNav;
