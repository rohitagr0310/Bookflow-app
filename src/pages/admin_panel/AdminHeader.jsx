import React, { useState } from "react";
import ClearAllSharpIcon from "@mui/icons-material/ClearAllSharp";
import AdminNav from "./AdminNav";

const AdminHeader = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="header">
      <button className={`menu-button ${dropdownVisible ? "active" : ""}`} onClick={toggleDropdown}>
        <ClearAllSharpIcon />
      </button>
      <div className={`sidebar ${dropdownVisible ? "active" : ""}`}>
        <AdminNav />
      </div>
      {dropdownVisible && (
        <div className="overlay" onClick={toggleDropdown} />
      )}
    </div>
  );
};

export default AdminHeader;
