import React, { useState, useRef, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import PropTypes from "prop-types";
import "./_QRCodeScanner.css";

const QRCodeScanner = ({ onScan }) => {
  const qrReaderRef = useRef(null);
  const [qrScannerOpen, setQrScannerOpen] = useState(true);

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

  useEffect(() => {
    qrReaderRef.current?.openImageDialog(); // Open the scanner immediately
  }, []); // Run this effect only once on initial render

  const closeScanner = () => {
    if (qrReaderRef.current) {
      qrReaderRef.current.stop();
    }
    setQrScannerOpen(false);
  };

  return (
    <div className="qr-scanner">
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
      {!qrScannerOpen && <div>Scanner closed. Component will unmount.</div>}
    </div>
  );
};

QRCodeScanner.propTypes = {
  onScan: PropTypes.func.isRequired
};

export default QRCodeScanner;
