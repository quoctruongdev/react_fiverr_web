import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./search.css";
import { NavLink, Redirect } from "react-router-dom";
import { Path } from "svgs";

export default function SearchCarousel() {
  const [dataSearch, setDataSearch] = useState({
    keysearch: "",
  });
  const handleOnSubmit = () => {
    if (dataSearch.keysearch !== "") {
      return (
        <NavLink to={`/search-job/${dataSearch?.keysearch}`}>
          <button className="btn ">Search</button>
        </NavLink>
      );
    } else {
      return (
        <button className="btn ">
          <span>Search</span>
        </button>
      );
    }
  };

  const handleOnChange = (event) => {
    event.preventDefault();
    setDataSearch({
      keysearch: event.target.value,
    });
  };

  return (
    <div>
      <div className="header mx-5 ">
        <div className=" row align-items-center">
          <div className="col-md-7">
            <div className="title__header">
              <h1 className="text__header ">
                <span>
                  Find the perfect <i>freelance</i> services for your business
                </span>
              </h1>
            </div>
            <div onSubmit={handleOnSubmit} className="search ">
              <FaSearch className="icon__search" />
              <input
                onChange={handleOnChange}
                className="form-control form__1"
                placeholder='Try "building mobile app"'
                type="search"
                name="keysearch"
                required
              />
              {handleOnSubmit()}
            </div>

            <div className="popular">
              Popular:
              <ul>
                <li>
                  <NavLink
                    to="/search-job/Website Design"
                    className="text-body-2"
                  >
                    Website Design
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/search-job/WordPress" className="text-body-2">
                    WordPress
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/search-job/Logo Design" className="text-body-2">
                    Logo Design
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/search-job/NFT Art" className="text-body-2">
                    NFT Art
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
