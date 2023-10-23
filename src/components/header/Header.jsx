import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import "./_Header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <AppBar className="appBar">
      <Toolbar>
        <Typography variant="h6" className="headerText">
          <a href="#home" id="bookflow_scroll">
            BookFlow
          </a>
        </Typography>

        <div className={`linksWrapper ${isMobileMenuOpen ? "mobileLinksWrapper" : ""}`}>
          <NavLink to="/" className="navLink" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/contact-us" className="navLink" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </NavLink>
          <NavLink to="/about-us" className="navLink" onClick={() => setIsMobileMenuOpen(false)}>
            Meet the Team
          </NavLink>
          <NavLink to="/terms-and-conditions" className="navLink" onClick={() => setIsMobileMenuOpen(false)}>
            Terms
          </NavLink>
          <NavLink to="/login" className="navLink" onClick={() => setIsMobileMenuOpen(false)}>
            Login
          </NavLink>
        </div>

        <div className="mobileMenuIcon" onClick={toggleMobileMenu}>
          <div className={`bar ${isMobileMenuOpen ? "change" : ""}`}></div>
          <div className={`bar ${isMobileMenuOpen ? "change" : ""}`}></div>
          <div className={`bar ${isMobileMenuOpen ? "change" : ""}`}></div>
        </div>
      </Toolbar>

      {isMobileMenuOpen && (
        <div className="mobileDropdownMenu">
          <NavLink to="/" className="mobileNavLink" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/contact-us" className="mobileNavLink" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </NavLink>
          <NavLink to="/about-us" className="mobileNavLink" onClick={() => setIsMobileMenuOpen(false)}>
            Meet the Team
          </NavLink>
          <NavLink to="/terms-and-conditions" className="mobileNavLink" onClick={() => setIsMobileMenuOpen(false)}>
            Terms
          </NavLink>
          <NavLink to="/login" className="mobileNavLink" onClick={() => setIsMobileMenuOpen(false)}>
            Login
          </NavLink>
        </div>
      )}
    </AppBar>
  );
};

export default Header;
