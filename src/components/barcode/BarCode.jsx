import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import { Button, Container, Typography, Paper } from "@material-ui/core";

function BarCode () {
  const webcamRef = useRef(null);
  const [scannedData, setScannedData] = useState("");

  const handleScan = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    // Implement barcode decoding logic here
    // Set the scannedData state with the decoded data
    setScannedData("Decoded data from image: " + imageSrc);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Barcode Reader
        </Typography>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={400}
          style={{ marginBottom: "20px" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleScan}
          fullWidth
        >
          Scan Barcode
        </Button>
        {scannedData && (
          <div style={{ marginTop: "20px" }}>
            <Typography variant="h6">Scanned Data:</Typography>
            <Typography variant="body1">{scannedData}</Typography>
          </div>
        )}
      </Paper>
    </Container>
  );
}

export default BarCode;
