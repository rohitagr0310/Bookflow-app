import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Navigation from "./AdminNav";

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const logout = () => {
    // Add your logout logic here
    // Navigate to the login page after logout
    history.push("./component/login_page/LoginPage.js");
  };

  return (
    <div className="header">
      {/* Hamburger icon for the menu */}
      <button className={`menu-button ${dropdownVisible ? "active" : ""}`} onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faBars} />
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

export default Header;
