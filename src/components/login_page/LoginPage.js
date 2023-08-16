import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import useStyles from "./LoginPageStyles";

const LoginPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = () => {
    // Simulated authentication logic for demonstration
    const adminEmail = "admin@bookflow.com"; // admin email
    const adminPassword = "admin123"; // admin password

    const studentEmail = "student@bookflow.com"; // student email
    const studentPassword = "student123"; // student password

    if (email === adminEmail && password === adminPassword) {
      // If user is authenticated as admin, navigate to admin panel
      navigate("/admin");
    } else if (email === studentEmail && password === studentPassword) {
      // If user is not admin, navigate to student panel
      navigate("/student");
    }
  };

  const handleSignUp = () => {
    // Simulated sign-up logic for demonstration
    console.log("Sign up logic");
    console.log("Email:", email);
    console.log("Password:", password);

    // After successful sign-up, navigate to the appropriate panel
    navigate("/student");
  };

  return (
    <div className={classes.root}>
      <form className={classes.form}>
        <TextField
          label="Email"
          placeholder="Email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          label="Password"
          type="password"
          placeholder="Password"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={isSignUp ? handleSignUp : handleSignIn}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>
        <p className={classes.p} onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
