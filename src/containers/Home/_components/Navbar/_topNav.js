import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { grey } from "@mui/material/colors";
import { green } from "@mui/material/colors";
import "./topnav.css";

import ScrollSpy from "react-scrollspy-navigation";
import { createRef } from "react";
import { Box, Button } from "@mui/material";

export default function TopNav() {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          px: 6,
        }}
        className="top__navbar"
      >
        <ul className="scrollspy">
          <ScrollSpy offsetTop={65}>
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
          <button>
            <FavoriteIcon fontSize="small" sx={{ color: grey[500] }} />
          </button>
          <button className="btn-collect ">
            <span className="collect-count">563</span>
          </button>
          <button>
            <ShareIcon fontSize="small" sx={{ color: green["A700"] }} />
          </button>
        </div>
      </Box>
    </>
  );
}
