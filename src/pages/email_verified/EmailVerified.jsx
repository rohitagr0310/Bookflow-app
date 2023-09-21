import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./_EmailVerifiedPage.css"; // Import the CSS file
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Import Material-UI icon
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"; // Import another Material-UI icon

const theme = createTheme(); // Create a custom theme

const EmailVerifiedPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <LockOutlinedIcon fontSize="large" color="primary" className="locklogo" />
        <Typography variant="h4" className="message">
          Email Verified Successfully
        </Typography>
        <CheckCircleIcon fontSize="large" color="success" className="checkmark" />
        <Typography variant="body1" className="message">
          Your email has been successfully verified. You can now log in to your BookFlow
          account.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className="button"
          href="/login"
        >
          Go to Login
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default EmailVerifiedPage;
