import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { actFetchDeleteService } from "../../../Admin/ServicesManagement/Delete/modules/actions";
import { actFetchUpdateUser } from "../../../Admin/UsersManagement/Update/modules/actions";
import { actFetchDetailUser } from "../../../Admin/UsersManagement/Edit/_modules/actions";
import { useDispatch, useSelector } from "react-redux";

export default function JobUserBooking({ data, ids, newIds }) {
  const dispatch = useDispatch();
  const imageDefault = "/asset/image_defaut.png";
  // const idServicesBooking = {
  //   bookingJob: [],
  // };
  // console.log(newIds);

  // idServicesBooking.bookingJob = Object.values(newIds)?.filter(
  //   (item) => item !== data?._id
  // );
  // console.log(idServicesBooking);

  return (
    <>
      {data?.usersBooking && (
        <div className="blog-card">
          <div className="meta">
            <div
              className="photo"
              style={{
                backgroundImage: `url("${
                  data?.image ? data?.image : imageDefault
                }")`,
              }}
            />
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
              <span
                // onClick={() => {
                //   // listIdServices.bookingJob

                //   // dispatch(actFetchDeleteService(data?._id));
                //   dispatch(
                //     actFetchUpdateUser(
                //       "618cc96995d99f001c0c080e",
                //       idServicesBooking
                //     )
                //   );
                // }}
                className="read-more"
              >
                <a href="#/">Delete</a>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
