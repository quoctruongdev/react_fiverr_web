import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";

export default function BreadcrumbsComponent(props) {
  const data = props.data;
  const id = data?.type?._id;
  const breadcrumbs = [
    <NavLink
      style={{ color: "#1dbf73", fontSize: 12 }}
      underline="hover"
      key="1"
      to="/"
    >
      FIVERR
    </NavLink>,
    <NavLink
      className="uppercase"
      underline="hover"
      key="2"
      color="red"
      style={{ color: "#1dbf73", fontSize: 12 }}
      to={`/list-type-job/${id}`}
    >
      {data?.type?.name ? data?.type?.name : "SERVICE"}
    </NavLink>,
    <Typography key="3" color="text.primary">
      {data?.subType?.name}
    </Typography>,
  ];
  return (
    <>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </>
  );
}
