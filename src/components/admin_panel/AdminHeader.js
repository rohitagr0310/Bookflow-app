import React, { useState } from "react";
import ClearAllSharpIcon from "@mui/icons-material/ClearAllSharp";
import Navigation from "./AdminNav";

const AdminHeader = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const logout = () => {
    // Add your logout logic here
    // Navigate to the login page after logout
    // history.push("./component/login_page/LoginPage.js");
  };

  return (
    <div className="header">
      {/* Hamburger icon for the menu */}
      <button className={`menu-button ${dropdownVisible ? "active" : ""}`} onClick={toggleDropdown}>
        <ClearAllSharpIcon />
      </button>
      <button onClick={logout}>Logout</button>
      <div className={`sidebar ${dropdownVisible ? "active" : ""}`}>
        <Navigation />
      </div>
      {dropdownVisible && (
        <div className="overlay" onClick={toggleDropdown} />
      )}
    </div>
  );
};

export default AdminHeader;
