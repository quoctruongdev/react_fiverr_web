import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { grey } from "@mui/material/colors";
import { green } from "@mui/material/colors";
import "./topnav.css";

import ScrollSpy from "react-scrollspy-navigation";
import { createRef } from "react";

export default function TopNav() {
  return (
    <>
      <div className="top__navbar px-5 ">
        <ul className="scrollspy">
          <ScrollSpy offsetTop={-130}>
            <a href="#overview" ref={createRef()}>
              Overview
            </a>
            <a href="#description" ref={createRef()}>
              Description
            </a>
            <a href="#seller" ref={createRef()}>
              About The Seller
            </a>
            <a href="#faq" ref={createRef()}>
              FAQ
            </a>
            <a href="#reviews" ref={createRef()}>
              Reviews
            </a>
          </ScrollSpy>
        </ul>
        <div className="icons-list">
          <button className="btn">
            <FavoriteIcon fontSize="small" sx={{ color: grey[500] }} />
          </button>
          <button className="btn btn-collect ">
            <span className="collect-count">563</span>
          </button>
          <button className="btn">
            <ShareIcon fontSize="small" sx={{ color: green["A700"] }} />
          </button>
        </div>
      </div>
    </>
  );
}
