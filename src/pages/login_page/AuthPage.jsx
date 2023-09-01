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
import "./_AuthPage.css";
import axios from "axios";
import TimedPopup from "../../components/timedpopup/TimedPopup";

const theme = createTheme();

const AuthPage = () => {
  const navigate = useNavigate();
  const [successPopupOpen, setSuccessPopupOpen] = useState(false);
  const [errorPopupOpen, setErrorPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupSeverity, setPopupSeverity] = useState("success");

  const [loginData, setLoginData] = useState({
    loginEmail: "",
    loginPassword: ""
  });

  const [signupData, setSignupData] = useState({
    name: "",
    rollnumber: "",
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

  const handleSignIn = async () => {
    event.preventDefault();
    try {
      const apiUrlLogin = "http://localhost:5000/auth/login";

      const response = await axios.post(apiUrlLogin, {
        email: loginData.loginEmail,
        password: loginData.loginPassword
      });

      if (response.status === 200) {
        const userType = response.data.userType;
        const token = response.data.token;

        // Store the token in local storage or state
        localStorage.setItem("token", token);

        // Navigate based on the userType
        if (userType === "A") {
          navigate("/admin");
        } else if (userType === "U") {
          navigate("/student");
        } else {
          console.error("Unknown user type:", userType);
        }
      } else {
      // Login failed, show an error message
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleSignUp = async (event) => {
    try {
      const apiUrlSignup = "http://localhost:5000/auth/signup";

      const response = await axios.post(apiUrlSignup, {
        name: signupData.name,
        rollnumber: signupData.rollnumber,
        email: signupData.signupEmail,
        password: signupData.signupPassword,
        confirmPassword: signupData.confirmPassword
      });

      if (response.status === 201) {
      // Signup successful code
        console.log("Signup successful:", response.data.message);
        setPopupMessage("User registered successfully!");
        setPopupSeverity("success");
        setSuccessPopupOpen(true);
      } else {
      // Signup failed, show an error message
        console.error("Signup failed:", response.data.message);
        setPopupMessage("Registration failed. Please try again.");
        setPopupSeverity("error");
        setErrorPopupOpen(true);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleToggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="bodyNoMarginPadding">
        <AppBar className="appBar" position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="back" component={Link} to="/">
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
              <Typography variant="h6">{showLogin ? "Login" : "Sign Up"}</Typography>
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
                    label="Roll Number"
                    name="rollnumber"
                    value={signupData.rollnumber}
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
                  <Button type="submit" className="submitButton" variant="contained" color="primary" onClick={handleSignUp}>
                  Sign Up
                  </Button>
                </form>
              )}
            <div className="toggleButtonContainer">
              <Button variant="text" color="primary" onClick={handleToggleForm} startIcon={<SwapHorizIcon />}>
                {showLogin ? "Switch to Sign Up" : "Switch to Login"}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <TimedPopup
        open={successPopupOpen}
        onClose={() => setSuccessPopupOpen(false)}
        message={popupMessage}
        severity={popupSeverity}
      />
      <TimedPopup
        open={errorPopupOpen}
        onClose={() => setErrorPopupOpen(false)}
        message={popupMessage}
        severity={popupSeverity}
      />
    </ThemeProvider>
  );
};

export default AuthPage;
