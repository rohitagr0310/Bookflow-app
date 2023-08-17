import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import useStyles from "./LoginPageStyles";

const LoginPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          endIcon={<LoginIcon/>}
          type="submit"
          sx={{ marginTop: 3, borderRadius: 3 }}
          variant="contained"
          color="primary"
          onClick={handleSignIn}>
            Sign In
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
