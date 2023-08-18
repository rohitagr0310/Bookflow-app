/* eslint-disable multiline-ternary */
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useStyles from "./HeaderStyles";

const theme = createTheme();

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // let isLoggedIn = true; // Simulated login status
  const userRole = "student"; // Simulated user role

  const handleLogout = () => {
    // Perform logout actions if needed
    // For now, we'll just redirect to the login page
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          BookFlow
            </Link>
          </Typography>
          <IconButton color="inherit" className={classes.qrCodeIcon}>
            <QrCodeScannerIcon />
          </IconButton>
          {isLoggedIn ? (
            <>
              {userRole === "admin" ? (
                <Link
                  to="/admin"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                Admin Panel
                </Link>
              ) : (
                <Link
                  to="/student"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                Student Panel
                </Link>
              )}
              <IconButton
                color="inherit"
                onClick={handleMenuClick}
                aria-controls="menu-appbar"
                aria-haspopup="true"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
              Login
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
