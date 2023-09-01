// AdminPanel.jsx
import React, { useState } from "react";
import Header from "./AdminHeader";
import "./_admin-panel-styles.css";
import { Outlet } from "react-router-dom";

const AdminPanel = () => {
  const [qrCodeData, setQRCodeData] = useState("");

  const handleQRCodeScan = (data) => {
    setQRCodeData(data);
  };

  return (
    <div>
      <Header onScanQRCode={handleQRCodeScan} />
      {qrCodeData && <div className="qr-code-data">Scanned QR Code Data: {qrCodeData}</div>}
      <div className="admin-content">
        Admin Panel
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanel;
