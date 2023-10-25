/* eslint-disable no-use-before-define */
import * as React from "react";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HistoryIcon from "@mui/icons-material/History";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LogoutIcon from "@mui/icons-material/Logout";
import "./_student-panel-styles.css";

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
        <MenuBookIcon />
      </ListItemIcon>
      <ListItemText className="admin-dashboard-menu-buttons"primary="Issue Book" />
    </ListItemButton>
    <ListItemButton component={Link} to="/student/requests">
      <ListItemIcon>
        <MenuBookIcon />
      </ListItemIcon>
      <ListItemText className="admin-dashboard-menu-buttons"primary="Requests" />
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
