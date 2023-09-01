import React, { useState } from "react";
import ClearAllSharpIcon from "@mui/icons-material/ClearAllSharp";
import { Link } from "react-router-dom";
import QRCodeScanner from "../../components/qrcodescanner/QRCodeScanner";
import "./_admin-nav.css";
import PropTypes from "prop-types";

const AdminNav = () => {
  const navigationStyle = {
    padding: "50px 50px"
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
          <li><Link to="/admin/manage-std" style={linkStyle} activeStyle={linkHoverStyle}>Manage Students</Link></li>
          <li><Link to="/admin/issued-book" style={linkStyle} activeStyle={linkHoverStyle}>Issued Books</Link></li>
          <li><Link to="/admin/all-book" style={linkStyle} activeStyle={linkHoverStyle}>All Books</Link></li>
          <li><Link to="/admin/account" style={linkStyle} activeStyle={linkHoverStyle}>Account</Link></li>
          <li><Link to="../login" style={linkStyle} activeStyle={linkHoverStyle}>Logout</Link></li>
        </ul>
      </nav>
    </div>
  );
};

const AdminHeader = ({ onScanQRCode }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [qrScannerOpen, setQrScannerOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleQRScanner = () => {
    setQrScannerOpen(!qrScannerOpen);
  };

  const handleScanComplete = (scannedData) => {
    onScanQRCode(scannedData);
    toggleQRScanner();
  };

  return (
    <div className="header">
      <button className={`menu-button ${dropdownVisible ? "active" : ""}`} onClick={toggleDropdown}>
        <ClearAllSharpIcon />
      </button>
      <button className="qr-button" onClick={toggleQRScanner}>
        Scan QR Code
      </button>
      <div className={`sidebar ${dropdownVisible ? "active" : ""}`}>
        <AdminNav />
      </div>
      {dropdownVisible && (
        <div className="overlay" onClick={toggleDropdown} />
      )}
      {qrScannerOpen && (
        <div className="qr-scanner-dialog">
          <QRCodeScanner onScan={handleScanComplete} />
        </div>
      )}
    </div>
  );
};

AdminHeader.propTypes = {
  onScanQRCode: PropTypes.func.isRequired
};

export default AdminHeader;
