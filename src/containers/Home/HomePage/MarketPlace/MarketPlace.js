import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Loader from "../../../../components/Loader/Loader";
import "./style.css";

export default function MarketPlace() {
  const data = useSelector((state) => state.categoriesMainReducer.data);
  const loading = useSelector((state) => state.categoriesMainReducer.loading);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(actFetchCategoriesMain());
  // }, []);

  const renderData = () => {
    return data?.map((item, index) => {
      // console.log(item);
      return (
        <li key={index}>
          <NavLink to={`/list-type-job/${item?._id}`}>
            <img
              src={`/asset/img/marketplace/${item?.name}.svg`}
              alt={item?.name}
              loading="lazy"
            />
            {item?.name}
          </NavLink>
        </li>
      );
    });
  };

  return (
    <div className="main-categories lohp-row max-width-container px-5 ">
      <h2>Explore the marketplace</h2>
      <ul className="categories-list">{renderData()}</ul>
    </div>
  );
}
