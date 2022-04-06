import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import "./search.css";

export default function SearchCarousel() {
  const [dataSearch, setDataSearch] = useState({
    keysearch: "",
  });
  const handleOnSubmit = () => {
    if (dataSearch.keysearch !== "") {
      return (
        <NavLink to={`/search-service/${dataSearch?.keysearch}`}>
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
    <>
      <div className="search__carousel">
        <div>
          <div>
            <div className="title__header">
              <h1 className="text__header ">
                <span>
                  Find the perfect <i>freelance</i> services for your business
                </span>
              </h1>
            </div>
            <form onSubmit={handleOnSubmit} className="search ">
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
            </form>
            <div className="popular">
              Popular:
              <ul>
                <li>
                  <NavLink
                    to="/search-service/Website Design"
                    className="text-body-2"
                  >
                    Website Design
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/search-service/NFT Art" className="text-body-2">
                    NFT Art
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/search-service/WordPress"
                    className="text-body-2"
                  >
                    WordPress
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/search-service/Logo Design"
                    className="text-body-2"
                  >
                    Logo Design
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
