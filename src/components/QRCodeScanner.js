/**
 * A component that provides a QR code scanner functionality.
 * @module components/QRCodeScanner
 */

import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

/**
 * QRCodeScanner component.
 * @component
 */
function QRCodeScanner () {
  /**
   * State to hold the scanned QR code result.
   * @type {string}
   */
  const [result, setResult] = useState("");

  /**
   * Handles the QR code scan event.
   * @param {string} data - The data obtained from the QR code scan.
   */
  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  /**
   * Handles errors that may occur during QR code scanning.
   * @param {Error} error - The error that occurred.
   */
  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      <p>{result}</p>
    </div>
  );
}

export default QRCodeScanner;
