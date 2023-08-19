import React from "react";
import { Link } from "react-router-dom";
import "./AdminNavStyle.css";
import "./admin_pages/Account";
import "./admin_pages/AddBook";
import "./admin_pages/AllBooks";
import "./admin_pages/IssuedBooks";
import "./admin_pages/ManageStudents";

const AdminNav = () => {
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
          <li><Link to="/pages/AddBook" style={linkStyle} activeStyle={linkHoverStyle}>Add Book</Link></li>
          <li><Link to="/ManageStudents" style={linkStyle} activeStyle={linkHoverStyle}>Manage Students</Link></li>
          <li><Link to="/pages/IssuedBooks" style={linkStyle} activeStyle={linkHoverStyle}>Issued Books</Link></li>
          <li><Link to="/pages/AllBooks" style={linkStyle} activeStyle={linkHoverStyle}>All Books</Link></li>
          <li><Link to="/pages/Account" style={linkStyle} activeStyle={linkHoverStyle}>Account</Link></li>
          <li><Link to="../login" style={linkStyle} activeStyle={linkHoverStyle}>Logout</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminNav;
