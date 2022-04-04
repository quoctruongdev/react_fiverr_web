import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import React from "react";

export default function BreadcrumbsComponent({ children, ...props }) {
  return (
    <>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        {...props}
      >
        {children}
      </Breadcrumbs>
    </>
  );
}
