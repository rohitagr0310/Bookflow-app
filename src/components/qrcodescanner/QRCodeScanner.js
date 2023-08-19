import React, { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";
import PropTypes from "prop-types";

const QRCodeScanner = ({ onScan }) => {
  const [qrScannerOpen, setQrScannerOpen] = useState(false);
  const qrReaderRef = useRef(null); // Create a ref for the QR reader component

  const handleScan = (data) => {
    if (data) {
      console.log("Scanned QR code data:", data);
      onScan(data);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  const toggleScanner = () => {
    if (qrScannerOpen) {
      // Stop the scanner and close it
      if (qrReaderRef.current) {
        qrReaderRef.current.stop();
      }
    }
    setQrScannerOpen(!qrScannerOpen);
  };

  return (
    <div className="qr-scanner">
      <button onClick={toggleScanner}>
        {qrScannerOpen ? "Close Scanner" : "Open Scanner"}
      </button>
      {qrScannerOpen && (
        <QrReader
          ref={qrReaderRef} // Assign the ref to the QR reader component
          delay={1000}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
        />
      )}
    </div>
  );
};

QRCodeScanner.propTypes = {
  onScan: PropTypes.func.isRequired
};

export default QRCodeScanner;
