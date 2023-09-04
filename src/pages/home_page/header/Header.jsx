import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./_Header.css";

const Header = () => {
  return (
    <AppBar className="appBar" position="static">
      <Toolbar>
        <Typography variant="h6" className="headerText">
          <Link to="/" className="headerLink">
            BookFlow
          </Link>
        </Typography>

        <Link to="/login" className="loginLink">
          Login
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
