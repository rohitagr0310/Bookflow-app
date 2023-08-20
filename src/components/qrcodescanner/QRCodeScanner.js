import React, { useState, useRef } from "react";
import { QrReader } from "react-qr-reader";
import PropTypes from "prop-types";
import "./_QRCodeScanner.sass";

const QRCodeScanner = ({ onScan }) => {
  const qrReaderRef = useRef(null);
  const [qrScannerOpen, setQrScannerOpen] = useState(false);

  const handleResult = async (result, error) => {
    if (result) {
      console.log(result?.text);
      onScan(result.text);
      closeScanner();
    }

    if (error) {
      console.info(error);
    }
  };

  const toggleScanner = () => {
    if (qrReaderRef.current) {
      qrReaderRef.current.clear();
    }
    setQrScannerOpen(!qrScannerOpen);
  };

  const closeScanner = () => {
    if (qrReaderRef.current) {
      qrReaderRef.current.stop();
    }
    setQrScannerOpen(false);
  };

  return (
    <div className="qr-scanner">
      <button onClick={toggleScanner}>
        {qrScannerOpen ? "Close Scanner" : "Open Scanner"}
      </button>
      {qrScannerOpen && (
        <div className="qr-reader-container">
          <QrReader
            ref={qrReaderRef}
            delay={1000}
            onResult={handleResult}
            className="qr-reader"
          />
        </div>
      )}
    </div>
  );
};

QRCodeScanner.propTypes = {
  onScan: PropTypes.func.isRequired
};

export default QRCodeScanner;
