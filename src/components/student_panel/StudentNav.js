import React from "react";
import { Link } from "react-router-dom";
import "./StudentNav.css";

const Navigation = () => {
  const navigationStyle = {
    backgroundColor: "blue",
    padding: "20px"
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
          <li><Link to="/add-book" style={linkStyle} activeStyle={linkHoverStyle}>Add Book</Link></li>
          <li><Link to="/manage-students" style={linkStyle} activeStyle={linkHoverStyle}>Manage Students</Link></li>
          <li><Link to="/issued-books" style={linkStyle} activeStyle={linkHoverStyle}>Issued Books</Link></li>
          <li><Link to="/all-books" style={linkStyle} activeStyle={linkHoverStyle}>All Books</Link></li>
          <li><Link to="/account" style={linkStyle} activeStyle={linkHoverStyle}>Account</Link></li>
          <li><Link to="/logout" style={linkStyle} activeStyle={linkHoverStyle}>Logout</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
