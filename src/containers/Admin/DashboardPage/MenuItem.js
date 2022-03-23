import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function MenuItemDashBoard() {
  return (
    <>
      {/* <ListItem
        button
        className="dashboarMenu"
        to="/dashboard"
        component={NavLink}
        exact
      >
        <ListItemIcon>
          <DashboardIcon color="secondary" />
        </ListItemIcon>
        <ListItemText sx={{ color: "#f50057" }} primary="DashBoard" />
      </ListItem> */}
      <ListItem
        button
        className="dashboarMenu"
        to="/dashboard/users"
        component={NavLink}
      >
        <ListItemIcon>
          <PersonIcon color="secondary" />
        </ListItemIcon>
        <ListItemText sx={{ color: "#f50057" }} primary="Users" />
      </ListItem>
      <ListItem
        button
        className="dashboarMenu"
        to="/dashboard/services"
        component={NavLink}
      >
        <ListItemIcon>
          <ShoppingCartIcon color="secondary" />
        </ListItemIcon>
        <ListItemText sx={{ color: "#f50057" }} primary="Services" />
      </ListItem>
    </>
  );
}
