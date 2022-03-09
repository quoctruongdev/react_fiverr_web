import React, { useState } from "react";
import { Route, useHistory, Redirect, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./_components/Footer/Footer";
import Join from "./_components/Join/Join";
import Login from "./_components/Login/Login";
import MainNavbar from "./_components/Navbar/Navbar";
import SubNavbar from "./_components/Navbar/subNav";

function LayoutHome(props) {
  return (
    <>
      {/* <Navbar /> */}
      <MainNavbar />
      <SubNavbar />
      {props.children}
      <Footer />
    </>
  );
}

export default function HomeTemplate({ Component, ...props }) {
  let location = useLocation();
  const userClient = localStorage.getItem("UserClient");

  if (
    (userClient && location.pathname === "/login") ||
    (userClient && location.pathname === "/join")
  ) {
    return <Redirect to="/" />;
  }
  if (!userClient && location.pathname === "/profile") {
    return <Redirect to="/" />;
  }
  return (
    <Route
      {...props}
      render={(propsRoute) => {
        return (
          <LayoutHome>
            <Component {...propsRoute} />
          </LayoutHome>
        );
      }}
    />
  );
}

{
  /* <Route
      {...props}
      render={(propsRoute) => {
        if (localStorage.getItem("UserAdmin")) {
          return (
            <LayoutAdmin>
              <Component {...propsRoute} />
            </LayoutAdmin>
          );
        }
        return <Redirect to="/auth" />;
      }}
    /> */
}
