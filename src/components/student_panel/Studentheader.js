import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import StudentPanel from "./StudentPanel"; // Import the StudentPanel component

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Library App
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <StudentPanel />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Library App</p>
      </footer>
      <Menu
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        anchorEl={null}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Home</MenuItem>
        <MenuItem onClick={handleMenuClose}>About</MenuItem>
        <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
        <MenuItem onClick={handleMenuClose}>Account</MenuItem>
        <MenuItem onClick={handleMenuClose}>Search</MenuItem>
        <MenuItem onClick={handleMenuClose}>Filter</MenuItem>
        <MenuItem onClick={handleMenuClose}>Feedback</MenuItem>
        <MenuItem onClick={handleMenuClose}>Help</MenuItem>
      </Menu>
    </div>
  );
};

export default Header;
