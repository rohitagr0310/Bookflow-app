import React, { useState } from "react";
import Header from "./AdminHeader";
import QRCodeScanner from "../../components/qrcodescanner/QRCodeScanner";
import "./_admin-panel-styles.css";
import { Outlet } from "react-router-dom";

const AdminPanel = () => {
  const [qrScannerOpen, setQrScannerOpen] = useState(false);
  const [qrCodeData, setQRCodeData] = useState("");

  const handleQRCodeScan = (data) => {
    setQRCodeData(data);
    setQrScannerOpen(false);
  };

  return (
    <div>
      <Header />
      <button className="qr-button" onClick={() => setQrScannerOpen(true)}>
        Scan QR Code
      </button>

      {qrCodeData && <div className="qr-code-data">Scanned QR Code Data: {qrCodeData}</div>}

      {qrScannerOpen && (
        <div className="qr-scanner-dialog">
          <div className="scanner-content">
            <h2>Scan QR Code</h2>
            <QRCodeScanner onScan={handleQRCodeScan} />
            <button className="close-button" onClick={() => setQrScannerOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="admin-content">
        Admin Panel
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanel;
