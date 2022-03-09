import React from "react";
import { Route } from "react-router-dom";
import SideBar from "./_components/sideBar/SideBar";
import { Redirect } from "react-router-dom";

function LayoutAdmin(props) {
  return (
    <>
      <SideBar />
      {props.children}
    </>
  );
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
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
    />
  );
}
