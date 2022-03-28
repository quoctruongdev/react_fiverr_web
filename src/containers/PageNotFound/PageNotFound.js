// import { Select } from "antd";
import * as React from "react";
// import { NavLink } from "react-router-dom";
// import ButtonStyle from "../../components/MaterialUI/ButtonStyle";
// import PopperGlobal from "../../components/Popover";
import LoginMui from "../Home/_components/Login/LoginForm/LoginForm";

export default function PageNotFound() {
  return (
    <>
      {/* <section className=" Page__notFound flex items-center h-full p-16  ">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-coolGray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-coolGray-400">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <NavLink
              to="/"
              className="px-8 py-3 font-semibold rounded dark:bg-green-500 dark:text-coolGray-50 "
            >
              <ButtonStyle> Back to homepage</ButtonStyle>
            </NavLink>
          </div>
        </div>
      </section> */}
      <LoginMui />
    </>
  );
}
