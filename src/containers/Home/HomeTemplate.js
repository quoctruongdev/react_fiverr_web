import { SnackbarProvider } from "notistack";
import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import Footer from "./_components/Footer/Footer";
import MainNavbar from "./_components/Navbar/Navbar";
import SubNavbar from "./_components/Navbar/SubNavigation/subNav";

function LayoutHome(props) {
  return (
    <>
      <MainNavbar />
      <SubNavbar />
      <SnackbarProvider>{props.children}</SnackbarProvider>
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
