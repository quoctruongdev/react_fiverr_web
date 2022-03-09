import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchSearchJob } from "./_module/actions";
import { actFetchListUser } from "../../Admin/UserManagement/_modules/actions";
import JobItem from "./JobItem/JobItem";
import Loader from "../../../components/Loader/Loader";
import { Pagination } from "antd";
import { Redirect } from "react-router-dom";
import "./style.css";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CardSevices from "../_components/CardSevices";

export default function SearchJobPage(props) {
  let pageSize = 50;
  const data = useSelector((state) => state.searchJobReducer.data);
  const loading = useSelector((state) => state.searchJobReducer.loading);
  const dispatch = useDispatch();
  const dataAllUser = useSelector((state) => state.listUserReducer.data);

  // /Pagination
  const [state, setState] = useState({
    current: 1,
    totalPage: data?.length / pageSize,
    minIndex: 0,
    maxIndex: pageSize,
  });
  const handleChange = (page) => {
    setState({
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    });
  };
  const handleChangeSize = (state, size) => {
    pageSize = size;
  };

  //keyword search
  const name = props.match.params.keyword.trim();

  useEffect(() => {
    dispatch(actFetchSearchJob(name));
    dispatch(actFetchListUser());
  }, []);

  const renderListJob = () => {
    if (data && data.length === 0) {
      return <Redirect to="/search-error" />;
    } else {
      return (
        <>
          {data?.map((item, index) => {
            let UserCreated = dataAllUser?.filter(
              (user) => user._id === item.userCreated
            );
            return (
              index >= state.minIndex &&
              index < state.maxIndex && (
                <CardSevices
                  item={item}
                  UserCreated={UserCreated}
                  loading={loading}
                />
              )
            );
          })}
        </>
      );
    }
  };
  if (loading) return <Loader />;
  return (
    <>
      <div className="List__Job mx-5">
        <div className="layout-row header-wrapper">
          <div className="search-header">
            <span className="title">Results for "{name}"</span>
          </div>
        </div>
        {/* <Container sx={{ py: 4, px: 5 }} maxWidth="1400"> */}
        <Grid sx={{ py: 4 }} container spacing={4}>
          {renderListJob()}
        </Grid>
        {/* </Container> */}
      </div>

      <div className="pagination">
        <Pagination
          defaultPageSize={pageSize}
          current={state.current}
          total={data?.length}
          onChange={handleChange}
          onShowSizeChange={handleChangeSize}
        />
      </div>
    </>
  );
}
