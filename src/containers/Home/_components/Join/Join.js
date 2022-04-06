import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Loader from "../../../../components/Loader/Loader";
import JoinForm from "./JoinForm/JoinForm";
import { actJoinApi } from "./modules/actions";
import "./style.css";

export default function Join(props) {
  const loading2 = useSelector((state) => state.categoriesMainReducer.loading);
  const loading = useSelector((state) => state.joinReducerHome.loading);
  const error = useSelector((state) => state.joinReducerHome.error);
  if (loading || loading2) return <Loader />;
  return (
    <>
      <div className="Join__component">
        <JoinForm history={props.history} />
      </div>
    </>
  );
}
