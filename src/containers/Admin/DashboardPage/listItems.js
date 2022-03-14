import * as React from "react";
import "./style.css";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import { NavLink } from "react-router-dom";

export const mainListItems = (
  <>
    <ListItemButton
      className="dashboarMenu"
      to="/dashboard"
      exact
      component={NavLink}
    >
      <ListItemIcon>
        <DashboardIcon color="secondary" />
      </ListItemIcon>
      <ListItemText sx={{ color: "#9c27b0" }} primary="Dashboard" />
    </ListItemButton>
    <ListItemButton
      className="dashboarMenu"
      to="/dashboard/services"
      component={NavLink}
    >
      <ListItemIcon>
        <ShoppingCartIcon color="secondary" />
      </ListItemIcon>
      <ListItemText sx={{ color: "#9c27b0" }} primary="Services" />
    </ListItemButton>
    <ListItemButton
      className="dashboarMenu"
      to="/dashboard/users"
      component={NavLink}
    >
      <ListItemIcon>
        <PeopleIcon color="secondary" />
      </ListItemIcon>
      <ListItemText sx={{ color: "#9c27b0" }} primary="User" />
    </ListItemButton>
  </>
);
// color: "#ee0157",
