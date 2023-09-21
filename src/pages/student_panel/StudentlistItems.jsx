/* eslint-disable no-use-before-define */
import * as React from "react";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HistoryIcon from "@mui/icons-material/History";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/student">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText className="admin-dashboard-menu-buttons" primary="Dashboard"/>
    </ListItemButton>
    <ListItemButton component={Link} to="/student/search">
      <ListItemIcon>
        <SearchIcon />
      </ListItemIcon>
      <ListItemText className="admin-dashboard-menu-buttons"primary="Search" />
    </ListItemButton>
    <ListItemButton component={Link} to="/student/account">
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText className="admin-dashboard-menu-buttons" primary="Account" />
    </ListItemButton>
    <ListItemButton component={Link} to="/student/history">
      <ListItemIcon>
        <HistoryIcon />
      </ListItemIcon>
      <ListItemText className="admin-dashboard-menu-buttons" primary="History" />
    </ListItemButton>
    <ListItemButton component={Link} to="/">
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText className="admin-dashboard-menu-buttons"primary="Logout" />
    </ListItemButton>
  </React.Fragment>
);
