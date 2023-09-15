import * as React from "react";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import HistoryIcon from "@mui/icons-material/History";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import LogoutIcon from "@mui/icons-material/Logout";
import "./_admin-panel-styles.css";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/admin">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText className="admin-dashboard-menu-buttons" primary="Dashboard" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/add-book">
      <ListItemIcon>
        <LibraryAddIcon />
      </ListItemIcon>
      <ListItemText className="admin-dashboard-menu-buttons" primary="Add Book" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/all-book">
      <ListItemIcon>
        <LibraryBooksIcon />
      </ListItemIcon>
      <ListItemText className="admin-dashboard-menu-buttons" primary="All Books" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/pending-issue">
      <ListItemIcon>
        <PendingActionsIcon />
      </ListItemIcon>
      <ListItemText className="admin-dashboard-menu-buttons" primary="Pending Issue" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/issued-book">
      <ListItemIcon>
        <MenuBookIcon />
      </ListItemIcon>
      <ListItemText className="admin-dashboard-menu-buttons" primary="Issued Books" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/manage-std">
      <ListItemIcon>
        <LocalLibraryIcon />
      </ListItemIcon>
      <ListItemText className="admin-dashboard-menu-buttons" primary="Manage students" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/admin-history">
      <ListItemIcon>
        <HistoryIcon />
      </ListItemIcon>
      <ListItemText className="admin-dashboard-menu-buttons" primary="History" />
    </ListItemButton>
    <ListItemButton component={Link} to="/login">
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText className="admin-dashboard-menu-buttons" primary="Logout" />
    </ListItemButton>
  </React.Fragment>
);
