import React from "react";
import { useSelector } from "react-redux";
import Loader from "../../../../components/Loader/Loader";
import LoginForm from "./LoginForm/LoginForm";
import "./style.css";
import { Box } from "@mui/material";
export default function Login(props) {
  const loading2 = useSelector((state) => state.categoriesMainReducer.loading);
  const loading = useSelector((state) => state.loginReducerHome.loading);
  if (loading2 || loading) return <Loader />;

  return (
    <>
      <div className="Login__component">
        <LoginForm history={props.history} />
      </div>
    </>
  );
}
