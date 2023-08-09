import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">BookFlow</Typography>
        {/* You can add more components like buttons, icons, etc. */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
