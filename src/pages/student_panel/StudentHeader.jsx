import React, { useState } from "react";
import ClearAllSharpIcon from "@mui/icons-material/ClearAllSharp";
import StudentNav from "./StudentNav.jsx";
import QrCodeScannerRoundedIcon from "@mui/icons-material/QrCodeScannerRounded";
import QRCodeScanner from "../../components/qrcodescanner/QRCodeScanner";
import PropTypes from "prop-types";
import "./_StudentHeader.css";

const StudentHeader = ({ onScanQRCode }) => {
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
      <button onClick={toggleQRScanner}>
        <QrCodeScannerRoundedIcon />
      </button>
      <div className={`sidebar ${dropdownVisible ? "active" : ""}`}>
        <StudentNav />
      </div>
      {dropdownVisible && <div className="overlay" onClick={toggleDropdown} />}
      {qrScannerOpen && (
        <div className="qr-scanner-dialog">
          <QRCodeScanner onScan={handleScanComplete} />
        </div>
      )}
    </div>
  );
};

StudentHeader.propTypes = {
  onScanQRCode: PropTypes.func.isRequired
};

export default StudentHeader;
