import * as React from "react";
import { Link } from "react";
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

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/admin">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/add-book">
      <ListItemIcon>
        <LibraryAddIcon />
      </ListItemIcon>
      <ListItemText primary="Add Book" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/all-book">
      <ListItemIcon>
        <LibraryBooksIcon />
      </ListItemIcon>
      <ListItemText primary="All Books" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/pending-issue">
      <ListItemIcon>
        <PendingActionsIcon />
      </ListItemIcon>
      <ListItemText primary="Pending Issue" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/issued-book">
      <ListItemIcon>
        <MenuBookIcon />
      </ListItemIcon>
      <ListItemText primary="Issued Books" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/manage-std">
      <ListItemIcon>
        <LocalLibraryIcon />
      </ListItemIcon>
      <ListItemText primary="Manage students" />
    </ListItemButton>
    <ListItemButton component={Link} to="/admin/admin-history">
      <ListItemIcon>
        <HistoryIcon />
      </ListItemIcon>
      <ListItemText primary="History" />
    </ListItemButton>
  </React.Fragment>
);
