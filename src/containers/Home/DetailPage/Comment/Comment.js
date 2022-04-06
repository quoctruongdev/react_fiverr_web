import React, { useState, useEffect } from "react";
import { Rate } from "antd";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { Progress } from "antd";
import { Grid } from "@mui/material";

export default function CommentReview({ dataComment }) {
  const [showResults, setShowResults] = React.useState(false);
  const [selected, setSelected] = useState();

  const buttonSelected = (selected2) => () => {
    if (selected2 !== selected) {
      setSelected(selected2);
      setShowResults(true);
    } else {
      setSelected();
      setShowResults(false);
    }
  };

  const renderDataComment = () => {
    return dataComment?.map((item, index) => {
      return (
        <li key={index} className="review-item">
          <div className="user-profile-images">
            <Avatar
              id="box-1"
              sx={{
                bgcolor: deepOrange[500],
                cursor: "pointer",
                fontSize: 25,
                height: 32,
                width: 32,
                marginRight: 1,
              }}
              alt={item.user?.name ? item.user?.name : "Secreat Name"}
              src={
                !item.user?.avatar
                  ? "/static/images/avatar/1.jpg"
                  : item.user?.avatar
              }
            />
            <span className="user-review">
              <a href="#/" className="seller-link ">
                {item.user?.name ? item.user?.name : "Secreat Name"}
              </a>
            </span>
            <Rate
              style={{
                fontSize: "0.9rem",
                lineHeight: 1,
              }}
              disabled
              value={1}
              count={1}
            />
            <b class="rating-score ">{item?.rating}</b>
          </div>
          <div className="reviewer-sub-details ">
            <div className="country">
              <img
                className="country-flag"
                src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png"
                alt="GB"
                loading="lazy"
              />
              <div className="country-name tbody-6">United Kingdom</div>
            </div>
          </div>
          <div className="review-description">
            {item?.content === "" ? (
              <p className="text-body-2">
                I thought this service was amazing, I bought the basic option
                just hoping for a basic logo, but the seller went above my
                expectations and provided me with a bunch of concepts that were
                better than I could have imagined, for £7.90 I think this
                service is a must-buy for anyone needing a professional-looking
                logo and not wanting to spend a huge amount
              </p>
            ) : (
              item?.content
            )}
          </div>
          <span className="summarize">
            <time className="text-body-2">Published 2 months ago</time>
          </span>

          <div className="helpful-thumbs">
            <div
              key={`11${index}`}
              onClick={buttonSelected(`11${index}`)}
              className={
                `11${index}` === selected
                  ? "selectedComment"
                  : "helpful-thumb text-body-2 "
              }
            >
              <span className="thumbs-icon" style={{ width: 14, height: 14 }}>
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.5804 7.81165C13.8519 7.45962 14 7 14 6.43858C14 5.40843 13.123 4.45422 12.0114 4.45422H10.0932C10.3316 3.97931 10.6591 3.39024 10.6591 2.54516C10.6591 0.948063 10.022 0 8.39207 0C7.57189 0 7.26753 1.03682 7.11159 1.83827C7.01843 2.31708 6.93041 2.76938 6.65973 3.04005C6.01524 3.68457 5.03125 5.25 4.44013 5.56787C4.38028 5.59308 4.3038 5.61293 4.22051 5.62866C4.06265 5.39995 3.79889 5.25 3.5 5.25H0.875C0.391754 5.25 0 5.64175 0 6.125V13.125C0 13.6082 0.391754 14 0.875 14H3.5C3.98325 14 4.375 13.6082 4.375 13.125V12.886C5.26354 12.886 7.12816 14.0002 9.22728 13.9996C9.37781 13.9997 10.2568 14.0004 10.3487 13.9996C11.9697 14 12.8713 13.0183 12.8188 11.5443C13.2325 11.0596 13.4351 10.3593 13.3172 9.70944C13.6578 9.17552 13.7308 8.42237 13.5804 7.81165ZM0.875 13.125V6.125H3.5V13.125H0.875ZM12.4692 7.5565C12.9062 7.875 12.9062 9.1875 12.3159 9.48875C12.6856 10.1111 12.3529 10.9439 11.9053 11.1839C12.1321 12.6206 11.3869 13.1146 10.3409 13.1246C10.2504 13.1255 9.32247 13.1246 9.22731 13.1246C7.23316 13.1246 5.54296 12.011 4.37503 12.011V6.44287C5.40611 6.44287 6.35212 4.58516 7.27847 3.65879C8.11368 2.82357 7.83527 1.43153 8.3921 0.874727C9.78414 0.874727 9.78414 1.84589 9.78414 2.54518C9.78414 3.69879 8.94893 4.21561 8.94893 5.32924H12.0114C12.6329 5.32924 13.1223 5.88607 13.125 6.44287C13.1277 6.99967 12.9062 7.4375 12.4692 7.5565ZM2.84375 11.8125C2.84375 12.1749 2.54994 12.4688 2.1875 12.4688C1.82506 12.4688 1.53125 12.1749 1.53125 11.8125C1.53125 11.4501 1.82506 11.1562 2.1875 11.1562C2.54994 11.1562 2.84375 11.4501 2.84375 11.8125Z" />
                </svg>
              </span>
              <span className="thumb-title">Helpful</span>
            </div>
            <div
              key={`22${index}`}
              onClick={buttonSelected(`22${index}`)}
              className={
                `22${index}` === selected
                  ? "selectedComment"
                  : "helpful-thumb text-body-2 "
              }
            >
              <span className=" thumbs-icon" style={{ width: 14, height: 14 }}>
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.419563 6.18835C0.148122 6.54038 6.11959e-07 7 5.62878e-07 7.56142C2.81294e-05 8.59157 0.876996 9.54578 1.98863 9.54578L3.90679 9.54578C3.66836 10.0207 3.34091 10.6098 3.34091 11.4548C3.34089 13.0519 3.97802 14 5.60793 14C6.42811 14 6.73247 12.9632 6.88841 12.1617C6.98157 11.6829 7.06959 11.2306 7.34027 10.9599C7.98476 10.3154 8.96875 8.75 9.55987 8.43213C9.61972 8.40692 9.6962 8.38707 9.77949 8.37134C9.93735 8.60005 10.2011 8.75 10.5 8.75L13.125 8.75C13.6082 8.75 14 8.35825 14 7.875L14 0.875C14 0.391754 13.6082 -3.42482e-08 13.125 -7.64949e-08L10.5 -3.0598e-07C10.0168 -3.48226e-07 9.625 0.391754 9.625 0.875L9.625 1.11398C8.73647 1.11398 6.87184 -0.000191358 4.77272 0.00038257C4.62219 0.000300541 3.74322 -0.000438633 3.65127 0.000382472C2.03027 -1.04643e-06 1.12867 0.981667 1.18117 2.45566C0.76754 2.94038 0.564868 3.64065 0.682829 4.29056C0.342234 4.82448 0.269227 5.57763 0.419563 6.18835ZM13.125 0.875L13.125 7.875L10.5 7.875L10.5 0.875L13.125 0.875ZM1.53079 6.4435C1.09375 6.125 1.09375 4.8125 1.6841 4.51125C1.31436 3.88891 1.64713 3.05613 2.09467 2.81605C1.86791 1.37941 2.61313 0.885417 3.65906 0.875355C3.74962 0.874535 4.67753 0.875355 4.77269 0.875355C6.76684 0.875355 8.45704 1.98898 9.62497 1.98898L9.62497 7.55713C8.5939 7.55713 7.64788 9.41484 6.72153 10.3412C5.88632 11.1764 6.16473 12.5685 5.6079 13.1253C4.21586 13.1253 4.21586 12.1541 4.21586 11.4548C4.21586 10.3012 5.05107 9.78439 5.05107 8.67076L1.9886 8.67076C1.36708 8.67076 0.877707 8.11393 0.874973 7.55713C0.872266 7.00033 1.09375 6.5625 1.53079 6.4435ZM11.1563 2.1875C11.1563 1.82506 11.4501 1.53125 11.8125 1.53125C12.1749 1.53125 12.4688 1.82506 12.4688 2.1875C12.4688 2.54994 12.1749 2.84375 11.8125 2.84375C11.4501 2.84375 11.1563 2.54994 11.1563 2.1875Z" />
                </svg>
              </span>
              <span className="thumb-title">Not Helpful</span>
            </div>
            {showResults && `11${index}` === selected ? (
              <div className="helpful-count text-body-2">
                You found this review helpful.
              </div>
            ) : null}
          </div>
          <div className="response-item ">
            <div className="user-profile-images">
              <Avatar
                sx={{
                  bgcolor: deepOrange[500],
                  cursor: "pointer",
                  fontSize: 25,
                  height: 32,
                  width: 32,
                  marginRight: 1,
                }}
                alt={dataComment?.name ? dataComment.name : "Other Name"}
                src={
                  !dataComment?.avatar
                    ? "/static/images/avatar/1.jpg"
                    : dataComment?.avatar
                }
              />
              <span className="user-review">
                <a href="#/" className="seller-link ">
                  {dataComment?.name ? dataComment.name : "Other Name"}
                </a>
              </span>
            </div>
            <div className="review-description">
              {item?.content === "" ? (
                <p className="text-body-2">
                  Thank you for giving us a shot, and even more for leaving us
                  this review. We will strive to deliver great experiences
                  consistently, please do come again.
                </p>
              ) : (
                item?.content + ""
              )}
            </div>
            <span className="summarize">
              <time className="text-body-2">Published 2 months ago</time>
            </span>
          </div>
        </li>
      );
    });
  };

  return (
    <div id="reviews" className="section">
      <header className="reviews-header ">
        <div className="details">
          <h2 className="text-display-5">
            <span>
              <span className="review-count">17,997</span>
            </span>
            Reviews
            <small className="review-rating">
              <Rate />
              <span>
                <span className="rating-score">4.9</span>
              </span>
            </small>
          </h2>
        </div>
        <span>
          <div className="filter-reviews">
            <h6 className="filter-dropdown-text ">Sort By</h6>
            <div className="filter-reviews-select">
              <span className=" filter-reviews-select-content ">
                Most relevant
              </span>
            </div>
          </div>
        </span>
      </header>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <div className="reviews__left">
            <table className="stars-counters">
              <tbody>
                <tr>
                  <td>
                    <span>
                      <button className=" stars-filter ">5 Stars</button>
                    </span>
                  </td>
                  <td
                    style={{ width: "100%" }}
                    className="progress-bar-container"
                  >
                    <Progress
                      strokeColor="#ffb33e"
                      percent={40}
                      showInfo={false}
                    />
                  </td>
                  <td className="star-num">(1,291)</td>
                </tr>
                <tr>
                  <td>
                    <span>
                      <button className=" stars-filter ">4 Stars</button>
                    </span>
                  </td>
                  <td className="progress-bar-container">
                    <Progress
                      strokeColor="#ffb33e"
                      percent={50}
                      showInfo={false}
                    />
                  </td>
                  <td className="star-num">(898)</td>
                </tr>
                <tr>
                  <td>
                    <span>
                      <button className=" stars-filter ">3 Stars</button>
                    </span>
                  </td>
                  <td className="progress-bar-container">
                    <Progress
                      strokeColor="#ffb33e"
                      percent={50}
                      showInfo={false}
                    />
                  </td>
                  <td className="star-num">(334)</td>
                </tr>
                <tr>
                  <td>
                    <span>
                      <button className=" stars-filter ">2 Stars</button>
                    </span>
                  </td>
                  <td className="progress-bar-container">
                    <Progress
                      strokeColor="#ffb33e"
                      percent={50}
                      showInfo={false}
                    />
                  </td>
                  <td className="star-num">(189)</td>
                </tr>
                <tr>
                  <td>
                    <span>
                      <button className=" stars-filter ">1 Stars</button>
                    </span>
                  </td>
                  <td className="progress-bar-container">
                    <Progress
                      strokeColor="#ffb33e"
                      percent={50}
                      showInfo={false}
                    />
                  </td>
                  <td className="star-num">(93)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="reviews__right">
            <div className="ranking">
              <h6 className="text-display-7">Rating Breakdown</h6>
              <ul>
                <li>
                  <span className="review__color review__color">
                    Seller communication level
                  </span>
                  <p>
                    <span className="rate_count review__color"> 4.9</span>
                    <Rate style={{ fontSize: 16 }} count={1} value={1} />
                  </p>
                </li>
                <li>
                  <span className="review__color"> Recommend to a friend</span>
                  <p>
                    <span className="rate_count review__color"> 4.9</span>

                    <Rate style={{ fontSize: 16 }} count={1} value={1} />
                  </p>
                </li>
                <li>
                  <span className="review__color"> Service as described</span>
                  <p>
                    <span className="rate_count review__color"> 4.9</span>
                    <Rate
                      style={{ fontSize: 16, lineHeight: "1" }}
                      count={1}
                      value={1}
                    />
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="reviews-wrap">
        <ul className="review-list">
          <span>{renderDataComment()}</span>
        </ul>
      </div>
    </div>
  );
}
