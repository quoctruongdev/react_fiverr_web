import React from "react";
import { NavLink } from "react-router-dom";
import { Rate } from "antd";
import { DollarCircleFilled } from "@ant-design/icons";

import "./style.scss";

export default function JobUserBooking(props) {
  // const imageDefault = "/asset/image_defaut.png";
  const imageDefault = "/asset/image_defaut.png";
  const data = props.data;
  return (
    <>
      <div className="blog-card">
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage: `url(${
                data?.image ? data?.image : imageDefault
              })`,
            }}
          />
          <ul className="details">
            <li className="rating">
              Rating: <span>{data?.rating}</span>
            </li>
            <li className="price">
              Price: <span>{data?.price}</span> US
            </li>
          </ul>
        </div>
        <div className="description">
          <div
            style={{
              position: "absolute",
              bottom: 10,
            }}
          >
            <div className="quantity">
              <span>Qty</span> <b>123</b>
            </div>
          </div>
          <h1>{data?.name}</h1>
          <p>{data?.name + "..."}</p>
          <div style={{ marginTop: "10px", textAlign: "right" }}>
            <span className="read-more">
              <NavLink to={`/detail-job/${data?._id}/${data?.userCreated}`}>
                View Detail
              </NavLink>
            </span>
            <span className="read-more">
              <a href="#/">Edit</a>
            </span>
            <span className="read-more">
              <a href="#/">Delete</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
