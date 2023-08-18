import React from "react";
import { Link } from "react-router-dom";
import "./AdminNavStyle.css";

const AdminNav = () => {
  const navigationStyle = {
    padding: "180px 50px"
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s ease"
  };

  const linkHoverStyle = {
    color: "lightblue"
  };
  return (
    <div style={navigationStyle} className="navigation-panel">
      <nav>
        <ul>
          <li><Link to="/pages/Dashboard" style={linkStyle} activeStyle={linkHoverStyle}>Dashboard</Link></li>
          <li><Link to="/pages/AddBook" style={linkStyle} activeStyle={linkHoverStyle}>Add Book</Link></li>
          <li><Link to="/ManageStudents" style={linkStyle} activeStyle={linkHoverStyle}>Manage Students</Link></li>
          <li><Link to="/pages/IssuedBooks" style={linkStyle} activeStyle={linkHoverStyle}>Issued Books</Link></li>
          <li><Link to="/pages/AllBooks" style={linkStyle} activeStyle={linkHoverStyle}>All Books</Link></li>
          <li><Link to="/pages/Account" style={linkStyle} activeStyle={linkHoverStyle}>Account</Link></li>
          <li><Link to="./login_page/LoginPage" style={linkStyle} activeStyle={linkHoverStyle}>Logout</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminNav;
