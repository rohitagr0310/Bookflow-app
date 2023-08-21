import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz"; // New icon
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./_AuthPage.sass";

const theme = createTheme();

const AuthPage = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    loginEmail: "",
    loginPassword: ""
  });

  const [signupData, setSignupData] = useState({
    name: "",
    signupEmail: "",
    signupPassword: "",
    confirmPassword: ""
  });

  const [showLogin, setShowLogin] = useState(true); // New state

  const handleLoginEmailChange = (event) => {
    setLoginData((prevData) => ({
      ...prevData,
      loginEmail: event.target.value
    }));
  };

  const handleLoginPasswordChange = (event) => {
    setLoginData((prevData) => ({
      ...prevData,
      loginPassword: event.target.value
    }));
  };

  const handleSignupChange = (event) => {
    const { name, value } = event.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSignIn = () => {
    // Simulated authentication logic for demonstration
    const adminEmail = "admin@bookflow.com";
    const adminPassword = "admin123";

    const studentEmail = "student@bookflow.com";
    const studentPassword = "student123";

    if (
      loginData.loginEmail === adminEmail &&
      loginData.loginPassword === adminPassword
    ) {
      navigate("/admin");
    } else if (
      loginData.loginEmail === studentEmail &&
      loginData.loginPassword === studentPassword
    ) {
      navigate("/student");
    }
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    // Perform signup logic here using the signupData
    console.log("Sign Up form data submitted:", signupData);
  };

  const handleToggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="bodyNoMarginPadding">
        <AppBar className="appBar" position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="back"
              component={Link}
              to="/"
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
            Authentication
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="authPageContainer">
          <div className="formContainer">
            <div className="formHeader">
              <Typography variant="h6">
                {showLogin ? "Login" : "Sign Up"}
              </Typography>
            </div>
            {showLogin
              ? (
                <form>
                  <TextField
                    label="Email"
                    placeholder="Email"
                    variant="outlined"
                    value={loginData.loginEmail}
                    onChange={handleLoginEmailChange}
                    fullWidth
                    margin="normal"
                    required
                  />
                  <TextField
                    label="Password"
                    type="password"
                    placeholder="Password"
                    variant="outlined"
                    value={loginData.loginPassword}
                    onChange={handleLoginPasswordChange}
                    fullWidth
                    margin="normal"
                    required
                  />
                  <Button
                    endIcon={<LoginIcon />}
                    type="submit"
                    className="submitButton"
                    variant="contained"
                    color="primary"
                    onClick={handleSignIn}
                  >
                Sign In
                  </Button>
                </form>
              )
              : (
                <form onSubmit={handleSignUp}>
                  <TextField
                    label="Name"
                    name="name"
                    value={signupData.name}
                    onChange={handleSignupChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                  />
                  <TextField
                    label="Email"
                    name="signupEmail"
                    value={signupData.signupEmail}
                    onChange={handleSignupChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                    type="email"
                  />
                  <TextField
                    label="Password"
                    name="signupPassword"
                    value={signupData.signupPassword}
                    onChange={handleSignupChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                    type="password"
                  />
                  <TextField
                    label="Confirm Password"
                    name="confirmPassword"
                    value={signupData.confirmPassword}
                    onChange={handleSignupChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    required
                    type="password"
                  />
                  <Button
                    type="submit"
                    className="submitButton"
                    variant="contained"
                    color="primary"
                  >
                Sign Up
                  </Button>
                </form>
              )}
            <div className="toggleButtonContainer">
              <Button
                variant="text"
                color="primary"
                onClick={handleToggleForm}
                startIcon={<SwapHorizIcon />}
              >
                {showLogin ? "Switch to Sign Up" : "Switch to Login"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AuthPage;
