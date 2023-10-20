import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import "./_Header.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AppBar className="appBar">
      <Toolbar>
        <Typography variant="h6" className="headerText">

          <a href="#home" id="bookflow_scroll">
            BookFlow
          </a>

          {/* <NavLink to="/#home" className="headerLink">
            BookFlow
          </NavLink> */}
        </Typography>

        <div className={isActive ? "linksWrapper mobileLinksWrapper" : "linksWrapper"}>
          <NavLink to="/" className="navLink" onClick={() => setIsActive(false)}>
            Home
          </NavLink>
          <NavLink to="/contact-us" className="navLink" onClick={() => setIsActive(false)}>
            Contact
          </NavLink>
          <NavLink to="/about-us" className="navLink" onClick={() => setIsActive(false)}>
            Meet the Team
          </NavLink>
          <NavLink to="/terms-and-conditions" className="navLink" onClick={() => setIsActive(false)}>
            Terms
          </NavLink>
          <NavLink to="/login" className="navLink" onClick={() => setIsActive(false)}>
            Login
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
