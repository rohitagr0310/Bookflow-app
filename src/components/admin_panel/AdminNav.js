import React from "react";
import { Link } from "react-router-dom";
import "./_admin-nav.css";

const AdminNav = () => {
  const navigationStyle = {
    padding: "180px 50px"
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    display: "block",
    marginBottom: "20px"
  };

  const linkHoverStyle = {
    color: "lightblue"
  };

  return (
    <div style={navigationStyle} className="navigation-panel">
      <nav>
        <ul className="link-list">
          <li><Link to="/admin/add-book" style={linkStyle} activeStyle={linkHoverStyle}>Add Book</Link></li>
          <li><Link to="/ManageStudents" style={linkStyle} activeStyle={linkHoverStyle}>Manage Students</Link></li>
          <li><Link to="/pages/IssuedBooks" style={linkStyle} activeStyle={linkHoverStyle}>Issued Books</Link></li>
          <li><Link to="/pages/AllBooks" style={linkStyle} activeStyle={linkHoverStyle}>All Books</Link></li>
          <li><Link to="/admin/account" style={linkStyle} activeStyle={linkHoverStyle}>Account</Link></li>
          <li><Link to="../login" style={linkStyle} activeStyle={linkHoverStyle}>Logout</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminNav;
