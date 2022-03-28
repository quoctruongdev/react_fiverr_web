import React from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { Rate } from "antd";

export default function AboutSeller({ dataUserCreated, data }) {
  return (
    <div id="seller">
      <h2
        id="box-3"
        style={{ paddingBottom: " 25px" }}
        className="section-title about-the-seller "
      >
        About The Seller
      </h2>
      <div className="profile-card">
        <div className="seller__card">
          <div className="profile-info">
            <div className="user-profile-image">
              <label
                className="profile-pict"
                htmlFor="profile_image_7175825515719"
                style={{
                  width: 110,
                  height: 110,
                  fontSize: "35.2px",
                  wordSpacing: 1,
                }}
              >
                <Avatar
                  alt={
                    dataUserCreated?.name
                      ? dataUserCreated?.name.toUpperCase()
                      : "Hidden Name"
                  }
                  sx={{ bgcolor: deepOrange[500] }}
                  src={
                    !dataUserCreated?.avatar
                      ? "/static/images/avatar/1.jpg"
                      : dataUserCreated?.avatar
                  }
                  style={{
                    height: 110,
                    width: 110,
                    fontSize: 40,
                  }}
                />
                {data?.onlineSellers ? (
                  <a
                    style={{ backgroundPositionX: "-40px" }}
                    href="#/"
                    className="user-badge-round md locale-en-us level-two-seller"
                  >
                    <span className="level__text">level two seller</span>
                  </a>
                ) : data?.localSellers ? (
                  <a
                    // style={{ backgroundPositionX: "-40px" }}
                    href="#/"
                    className="user-badge-round md locale-en-us level-two-seller"
                  >
                    <span className="level__text">level one seller</span>
                  </a>
                ) : (
                  <a
                    style={{ backgroundPositionX: "-80px" }}
                    href="#/"
                    className="user-badge-round md locale-en-us level-two-seller"
                  >
                    <span className="level__text">Top rate seller</span>
                  </a>
                )}
              </label>
            </div>
            <div className="user-profile-labels">
              <div className="username-line">
                <a href="/#" className="seller-link">
                  {dataUserCreated?.name ? dataUserCreated.name : "Hidden Name"}
                </a>
              </div>
              <div className="one-liner-rating-wrapper">
                <p className="one-liner">one stop software solutions!</p>
                <div className="orca-rating seller-rating color-yellow tbody-6">
                  <Rate
                    style={{
                      fontSize: "1rem",
                      lineHeight: 1,
                    }}
                    count={1}
                    disabled
                    value={1}
                  />
                  <b className="rating-score">{data?.rating}</b>
                  <span className="ratings-count">(58)</span>
                </div>
              </div>
              <button type="button" class="btn btn-outline-secondary mt-3 ">
                <b> Contact Me</b>
              </button>
            </div>
          </div>
          <div className="stats-desc">
            <ul className="user-stats">
              <li>
                From
                <strong>VietNam</strong>
              </li>
              <li>
                Member since
                <strong>Mar 2022</strong>
              </li>
              <li>
                Avg. response time
                <strong>1 hour</strong>
              </li>
              <li>
                Last delivery
                <strong>1 week</strong>
              </li>
            </ul>
            <article className="seller-desc">
              <div className="inner">
                Hello there and Welcome to{" "}
                {dataUserCreated?.name
                  ? dataUserCreated.name.toUpperCase()
                  : "Hidden Name"}
                . we are a team of professionals with several years of
                experience making animated explainer videos. i will create
                professional whiteboard animations and 2d animations videos for
                you in an affordable price. we are here to assist you 24/7. so
                contact me now and get your whiteboard animation and 2d
                animation videos done right now. We specialize in logo
                designing. We're available exclusively on fiverr to rock your
                world with our designing skills. Come and experience it for
                yourself!
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
