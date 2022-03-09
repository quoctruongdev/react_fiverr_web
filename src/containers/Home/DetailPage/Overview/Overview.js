import React from "react";
import JobSlider from "./_JobSlider/JobSlider";
import BreadcrumbsComponent from "../../_components/Breadcrumbs/BreadcrumbsComponent";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { Rate } from "antd";

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

  return (
    <div id="overview">
      <BreadcrumbsComponent data={data} />
      <h3> {data?.name}</h3>
      <div name="overview" className="seller-overview d-flex">
        <Avatar
          id="box-1"
          sx={{
            bgcolor: deepOrange[500],
            cursor: "pointer",
            fontSize: 25,
            height: 32,
            width: 32,
            textTransform: "uppercase",
          }}
          alt={dataUserCreated?.name ? dataUserCreated.name : "Hidden Name"}
          src={
            !dataUserCreated?.avatar
              ? "/static/images/avatar/1.jpg"
              : dataUserCreated?.avatar
          }
        />
        <span className="user-status">
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
        <span class="ratings-count">({Math.floor(Math.random() * 20)})</span>

        <span class="orders-in-queue" style={{ margin: "12px" }}>
          ({Math.floor(Math.random() * 20)}) Orders in Queue
        </span>
        <span className=" gig-overview-tooltip">
          <img
            alt=""
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/gig_page_perseus/apps/fiverr-choice-badge.6942bc6.svg"
          />
        </span>
      </div>
      <JobSlider data={data} />
    </div>
  );
}
