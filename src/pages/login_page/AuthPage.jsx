/* eslint-disable multiline-ternary */
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
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import Checkbox from "@mui/material/Checkbox"; // Import Checkbox component
import FormControlLabel from "@mui/material/FormControlLabel";
import InputAdornment from "@mui/material/InputAdornment"; // Import InputAdornment
import VisibilityIcon from "@mui/icons-material/Visibility"; // Import the eye icon
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import TimedPopup from "../../components/timedpopup/TimedPopup";
// import scrollToTop from "../../components/scroll/scroll-to-top";
import "./_AuthPage.css";
import axios from "axios";
import "./ForgetPassword";

const AuthPage = () => {
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    navigate("/password-reset");
  };

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

  const [errorMessage, setErrorMessage] = useState("");
  const [errorSeverity, setErrorSeverity] = useState("");
  const [isErrorPopupOpen, setIsErrorPopupOpen] = useState(false);

  const handleCloseErrorPopup = () => {
    setIsErrorPopupOpen(false);
  };
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

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const apiUrlLogin = "/.netlify/functions/login";

      const response = await axios.post(apiUrlLogin, {
        email: loginData.loginEmail,
        password: loginData.loginPassword
      });

      console.log(response);
      if (response.status === 200) {
        const userType = response.data.userType;
        const token = response.data.token;
        const userId = response.data.id;
        const user = response.data.username;
        // Store the token and user type in local storage or state
        localStorage.setItem("token", token);
        localStorage.setItem("userType", userType);
        localStorage.setItem("userId", userId);
        localStorage.setItem("user", user);

        // Navigate based on the userType
        if (userType === "A") {
          navigate("/admin");
        } else if (userType === "U") {
          navigate("/student");
        }
      } else {
      // Login failed, show an error message
      }
    } catch (error) {
      console.log(error.response.data.error);
      setErrorMessage(error.response.data.error);
      setErrorSeverity("error");
      setIsErrorPopupOpen(true);
      console.error("An error occurred:", error);
    }
  };

  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const handleToggleSignupPassword = () => {
    setShowSignupPassword(!showSignupPassword);
  };
  const [showPassword, setShowPassword] = useState(false); // New state for showing/hiding password

  const handleTogglePassword = () => {
    setShowPassword(!showPassword); // Toggle the password visibility
  };

  const validatePassword = (password) => {
  // Check if the password is at least 8 characters long
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }

    // Check if the password has at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      return "Password must have at least one uppercase letter.";
    }

    // Check if the password has at least one digit
    if (!/\d/.test(password)) {
      return "Password must have at least one digit.";
    }

    // Check if the password has at least one special character
    if (!/[@$!%*?&]/.test(password)) {
      return "Password must have at least one special character.";
    }

    // Password meets all conditions
    return null;
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (signupData.signupPassword !== signupData.confirmPassword) {
        const message = "Password and Confirm Password do not match.";
        setErrorMessage(message);
        setErrorSeverity("error");
        setIsErrorPopupOpen(true);
        return; // Reject the operation
      }

      if (signupData.rollnumber.length !== 10) {
        const message = "Roll number must be 10 characters long.";
        setErrorMessage(message);
        setErrorSeverity("error");
        setIsErrorPopupOpen(true);
        return; // Reject the operation
      }

      const passwordValidationError = validatePassword(signupData.signupPassword);

      if (passwordValidationError) {
        setErrorMessage(passwordValidationError);
        setErrorSeverity("error");
        setIsErrorPopupOpen(true);
        return; // Reject the operation
      }

      if (!emailRegex.test(signupData.signupEmail)) {
        setErrorMessage("Invalid email address.");
        setErrorSeverity("error");
        setIsErrorPopupOpen(true);
        return; // Reject the operation
      }

      const apiUrlSignup = "/.netlify/functions/signup";

      const response = await axios.post(apiUrlSignup, {
        name: signupData.name,
        rollnumber: signupData.rollnumber,
        email: signupData.signupEmail,
        password: signupData.signupPassword,
        confirmPassword: signupData.confirmPassword
      });

      if (response.status === 201) {
        // Signup successful code
        setErrorMessage("Signup successful.");
        setErrorSeverity("success");
        setIsErrorPopupOpen(true);
        console.log("Signup successful:", response.data.message);

        // Clear the input fields
        setSignupData({
          name: "",
          rollnumber: "",
          signupEmail: "",
          signupPassword: "",
          confirmPassword: ""
        });
      }
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setErrorSeverity("error");
      setIsErrorPopupOpen(true);
      console.log("Signup failed:", error.response.data.message);
    }
  };

  const handleToggleForm = () => {
    if (showLogin) {
      window.scrollTo(0, 50);
    } else {
      window.scrollTo(0, 80);
    }
    setShowLogin(!showLogin);
  };

  const [agreeTerms, setAgreeTerms] = useState(false); // New state for checkbox

  const handleAgreeTermsChange = () => {
    setAgreeTerms(!agreeTerms); // Toggle the checkbox state
  };

  return (
    <>
      <div className="bodyNoMarginPadding">
        <AppBar className="appBar">
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
            <Typography variant="h6" style={{ flexGrow: 1, marginLeft: 10 }}>
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
            {showLogin ? (
              <div>
                <form>
                  <div className="input_sec">
                    <label htmlFor="email">Email</label>
                    <TextField
                      placeholder="johndoe123@gmail.com"
                      variant="outlined"
                      value={loginData.loginEmail}
                      onChange={handleLoginEmailChange}
                      fullWidth
                      required
                    />
                  </div>
                  <div className="input_sec">
                    <label htmlFor="email">Password</label>
                    <TextField
                      type={showPassword ? "text" : "password"}
                      placeholder="Jy08nGx@i9n"
                      variant="outlined"
                      value={loginData.loginPassword}
                      onChange={handleLoginPasswordChange}
                      fullWidth
                      required
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleTogglePassword}
                              edge="end"
                              size="small"
                              className="showPasswordButton"
                            >
                              {showPassword ? (
                                <VisibilityIcon />
                              ) : (
                                <VisibilityOffIcon />
                              )}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                  </div>
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
                  <Button
                    variant="text"
                    color="primary"
                    className="forget"
                    onClick={handleForgotPassword}
                  >
                    <Link to="/password-reset">Forgot Password?</Link>
                  </Button>
                </form>
              </div>
            ) : (
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
                  type={showSignupPassword ? "text" : "password"} // Toggle between text and password
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleToggleSignupPassword} // Call the toggle function
                          edge="end"
                          size="small"
                          className="showPasswordButton"
                        >
                          {showSignupPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
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
                  type={showSignupPassword ? "text" : "password"} // Toggle between text and password
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={agreeTerms}
                      onChange={handleAgreeTermsChange}
                      color="primary"
                    />
                  }
                  label={
                    <span className="checkboxLabel">
                      I agree to the{" "}
                      <Link to="/terms-and-conditions">
                        Terms and Conditions
                      </Link>
                    </span>
                  }
                />
                <Button
                  type="submit"
                  className="submitButton"
                  variant="contained"
                  color="primary"
                  onClick={handleSignUp}
                  disabled={!agreeTerms}
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
      <TimedPopup
        open={isErrorPopupOpen}
        onClose={handleCloseErrorPopup}
        message={errorMessage}
        severity={errorSeverity}
      />
    </>
  );
};

export default AuthPage;
