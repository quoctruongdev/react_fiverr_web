import React from "react";
import JobSlider from "./_JobSlider/JobSlider";
import BreadcrumbsComponent from "../../_components/Breadcrumbs/BreadcrumbsComponent";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { Rate } from "antd";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Overview({ data, dataUserCreated }) {
  function renderLevelSeller() {
    switch (true) {
      case data?.localSellers:
        return "Level 1 Sellers";
      case data?.onlineSellers:
        return "Level 2 Sellers";
      default:
        return "Top rate seller";
    }
  }

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
      to={`/list-type-service/${data?.type?._id}`}
    >
      {data?.type?.name ? data?.type?.name : "SERVICE"}
    </NavLink>,
    <Typography key="3" color="text.primary">
      {data?.subType?.name}
    </Typography>,
  ];

  return (
    <div id="overview">
      <BreadcrumbsComponent>{breadcrumbs}</BreadcrumbsComponent>
      <Typography variant="h5"> {data?.name}</Typography>
      <Box display="flex" name="overview" className="seller-overview ">
        <Avatar
          id="box-1"
          sx={{
            bgcolor: deepOrange[500],
            cursor: "pointer",
            fontSize: 25,
            height: 32,
            width: 32,
            textTransform: "uppercase",
            marginRight: "8px",
          }}
          alt={dataUserCreated?.name ? dataUserCreated.name : "Hidden Name"}
          src={
            !dataUserCreated?.avatar
              ? "/static/images/avatar/1.jpg"
              : dataUserCreated?.avatar
          }
        />
        <span
          style={{
            marginRight: "5px",
          }}
          className="user-status"
        >
          <a href="#/" className="seller-link ">
            {dataUserCreated?.name ? dataUserCreated.name : "Hidden Name"}
          </a>
        </span>
        <span className="user_level">
          <div className="seller-level">{renderLevelSeller()}</div>
        </span>
        <b
          style={{
            marginLeft: "8px",
          }}
          class="rating-score"
        >
          {data?.rating}
        </b>
        <Rate
          style={{
            fontSize: "0.9rem",
            lineHeight: 1,
          }}
          disabled
          value={1}
          count={1}
        />
        <span class="orders-in-queue" style={{ margin: "12px" }}>
          (10) Orders in Queue
        </span>
        <span className=" gig-overview-tooltip">
          <img
            alt=""
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/gig_page_perseus/apps/fiverr-choice-badge.6942bc6.svg"
          />
        </span>
      </Box>
      <JobSlider data={data} />
    </div>
  );
}
