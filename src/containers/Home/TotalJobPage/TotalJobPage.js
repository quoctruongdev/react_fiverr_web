import { Box, Grid } from "@mui/material";
import { Pagination } from "antd";
import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader/Loader";
import { actFetchServicesList } from "../../Admin/ServicesManagement/_module/actions";
import { actFetchUsersList } from "../../Admin/UsersManagement/_modules/actions";
import CardSevices from "../_components/CardSevices";
import SkeletonCard from "../_components/CardSevices/SkeletonCard";
import useWindowSize from "../../../Hook/useWindowSize";
import "./style.css";

export default function TotalJobPage(props) {
  const size = useWindowSize();
  let pageSize = 50;
  const data = useSelector((state) => state.servicesListReducer.data);
  const loading = useSelector((state) => state.servicesListReducer.loading);
  const loadingLogin = useSelector((state) => state.loginReducerHome.loading);

  const dataAllUser = useSelector((state) => state.usersListReducer.data);
  const dispatch = useDispatch();

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

  const dataListSave = JSON.parse(localStorage.getItem("myList"));

  useEffect(() => {
    dispatch(actFetchServicesList());
    dispatch(actFetchUsersList());
  }, []);

  const renderListJob = () => {
    return data?.map((item, index) => {
      let UserCreated = dataAllUser?.filter(
        (user) => user._id === item.userCreated
      );
      return (
        index >= state.minIndex &&
        index < state.maxIndex && (
          <CardSevices
            key={index}
            item={item}
            UserCreated={UserCreated}
            loading={loading}
            duplicates={dataListSave?.filter(
              (items) => items?._id === item?._id
            )}
          />
        )
      );
    });
  };
  const rendeListSkeletonCard = (length, Component) => {
    const array = [];
    for (let index = 0; index < length; index++) {
      array.push(index);
    }
    return array?.map((item) => <Component key={item} />);
  };

  if (loading ?? loadingLogin) {
    return <Loader />;
  }
  return (
    <>
      <Box
        sx={{
          px: { xs: 4, sm: 5, md: 6 },
        }}
        className="List__Job"
      >
        <div className="layout-row header-wrapper">
          <div className="search-header">
            <h1 className="title">Total Service </h1>
          </div>
        </div>
        <Grid sx={{ py: 4 }} container spacing={4}>
          {data ? renderListJob() : rendeListSkeletonCard(12, SkeletonCard)}
        </Grid>
      </Box>
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
