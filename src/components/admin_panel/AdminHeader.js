import React, { useState } from "react";
import Navigation from "./AdminNav";

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const logout = () => {
    // Add your logout logic here
    // Navigate to the login page after logout
    // Phistory.push("./component/login_page/LoginPage");
  };

  return (
    <div className="header">
      <button name="start" onClick={toggleDropdown}>Menu</button>
      <button onClick={logout}>Logout</button>
      <div className={`sidebar ${dropdownVisible ? "active" : ""}`}>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
