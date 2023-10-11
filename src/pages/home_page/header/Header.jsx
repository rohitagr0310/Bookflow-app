import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./_Header.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AppBar className="appBar">
      <Toolbar>
        <Typography variant="h6" className="headerText">
          <Link to="/" className="headerLink">
            BookFlow
          </Link>
        </Typography>

        <div className={isActive ? "linksWrapper mobileLinksWrapper" : "linksWrapper"}>
          <a href="/" className="navLink" onClick={() => setIsActive(false)}>
            Home
          </a>
          <a href="/contact-us" className="navLink" onClick={() => setIsActive(false)}>
            Contact
          </a>
          <a href="/about-us" className="navLink" onClick={() => setIsActive(false)}>
            Meet the Team
          </a>
          <a href="/terms-and-conditions" className="navLink" onClick={() => setIsActive(false)}>
            Terms
          </a>
        </div>

        <Link to="/login" className="loginLink">
          Login
        </Link>
        <span className="material-icons toggleNav" onClick={() => {
          setIsActive(!isActive);
        }}>
          {isActive ? "close" : "menu"}
        </span>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
