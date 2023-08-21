import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./_Header.css";

const theme = createTheme();

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar className="appBar" position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className="headerText">
            <Link to="/" className="headerLink">
              BookFlow
            </Link>
          </Typography>

          <Link
            to="/login"
            className="loginLink"
          >
            Login
          </Link>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
