import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useStyles from "./HeaderStyles";
import QRCodeScanner from "../../qrcodescanner/QRCodeScanner.js";

const theme = createTheme();

const Header = () => {
  const classes = useStyles();

  // State for controlling the QR code scanner dialog
  const [qrScannerOpen, setQrScannerOpen] = useState(false);
  const [qrCodeData, setQRCodeData] = useState(""); // Store the scanned QR code data

  // Function to handle the scanned QR code data
  const handleQRCodeScan = (data) => {
    setQRCodeData(data); // Store the scanned QR code data
    setQrScannerOpen(false); // Close the scanner dialog
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              BookFlow
            </Link>
          </Typography>

          {/* Add a button to open the QR code scanner */}
          <button onClick={() => setQrScannerOpen(true)}>
            Scan QR Code
          </button>

          {/* Display the scanned QR code data */}
          {qrCodeData && (
            <div>
              Scanned QR Code Data: {qrCodeData}
            </div>
          )}

          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Login
          </Link>
        </Toolbar>
      </AppBar>

      {/* Render the QR code scanner when the dialog is open */}
      {qrScannerOpen && (
        <QRCodeScanner onScan={handleQRCodeScan} />
      )}
    </ThemeProvider>
  );
};

export default Header;
