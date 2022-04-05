import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ButtonStyle from "../../components/MaterialUI/ButtonStyle/index";

export default function PageNotFound() {
  const loading = useSelector((state) => state.categoriesMainReducer.loading);

  if (loading) return <Loader />;

  return (
    <section className="flex items-center h-full p-16  dark:text-black">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-lg text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-coolGray-600">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/apps/empty-search-results.229c0d3.png"
              alt="emptyresultimage"
            />
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-coolGray-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <NavLink
            style={{
              textDecoration: "none",
            }}
            to="/"
            className="px-8 py-3 font-semibold rounded dark:bg-green-400 dark:text-coolGray-900"
          >
            <ButtonStyle justifyContent="center">Back to homepage</ButtonStyle>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
