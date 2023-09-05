import React, { useState } from "react";
import ClearAllSharpIcon from "@mui/icons-material/ClearAllSharp";
import StudentNav from "./StudentNav.jsx";
// import "./_StudentHeader.css"; // Correctly reference the CSS file

const StudentHeader = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="header"> {/* Use the correct CSS class */}
      {/* Hamburger icon for the menu */}
      <button className={`menu-button ${dropdownVisible ? "active" : ""}`} onClick={toggleDropdown}>
        <ClearAllSharpIcon />
      </button>
      <div className={`sidebar ${dropdownVisible ? "active" : ""}`}>
        <StudentNav />
      </div>
      {dropdownVisible && (
        <div className="overlay" onClick={toggleDropdown} />
      )}
    </div>
  );
};

export default StudentHeader;
