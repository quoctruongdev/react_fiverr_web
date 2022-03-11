import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function CustomizedSearch({
  placeholder,
  variant,
  sx,
  handleSearch,
}) {
  const handleChange = (e) => {
    e.preventDefault();
    handleSearch(e.target.value.trim());
  };

  return (
    <Paper variant={variant} sx={sx}>
      <IconButton disableRipple sx={{ p: "10px" }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        onChange={handleChange}
        sx={{ flex: 1 }}
        placeholder={placeholder}
        inputProps={{ "aria-label": "search" }}
      />
    </Paper>
  );
}
