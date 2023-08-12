import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useStyles from "./LoginPageStyles";

const LoginPage = () => {
  const classes = useStyles();
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
    // Perform sign-in logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleSignUp = () => {
    // Perform sign-up logic here
    console.log("Email:", email);
    console.log("Password:", password);
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
