import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchCategoriesSubType } from "./modules/actions";
import { actFetchUsersList } from "../../Admin/UsersManagement/_modules/actions";
import { NavLink } from "react-router-dom";
import { Pagination } from "antd";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Loader from "../../../components/Loader/Loader";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import ModalVideo from "../_components/ModalVideo/ModalVideo";
import CardSevices from "../_components/CardSevices";
import { Box, Grid, Stack } from "@mui/material";
import useModal from "../../../Hook/ModalHook";
import "./style.css";
import BreadcrumbsComponent from "../_components/Breadcrumbs/BreadcrumbsComponent";
import { Empty } from "antd";

export default function CategoriesSubPage(props) {
  let pageSize = 50;
  const { open, handleClose, handleOpen } = useModal();
  const { id, name, subname, subId } = props.match.params;
  const data = useSelector((state) => state.categoriesSubTypeReducer.data);

  const dataVideo = useSelector(
    (state) => state.categoriesSubTypeReducer.dataVideo
  );
  const dataAllUser = useSelector((state) => state.usersListReducer.data);
  const loading = useSelector(
    (state) => state.categoriesSubTypeReducer.loading
  );
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = `${subname} Service|Fiverr`;
    dispatch(actFetchCategoriesSubType(subId));
    dispatch(actFetchUsersList());
  }, [subId]);

  const breadcrumbs = [
    <NavLink underline="hover" key="1" style={{ color: "#1dbf73" }} to="/">
      FIVERR
    </NavLink>,
    <NavLink
      className=" uppercase "
      underline="hover"
      key="2"
      style={{ color: "#1dbf73" }}
      to={`/list-type-service/${id}`}
    >
      {name}
    </NavLink>,
    <Typography key="3" color="text.primary"></Typography>,
  ];
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
          />
        )
      );
    });
  };

  if (loading) return <Loader />;
  return (
    <>
      <Box
        sx={{
          px: { xs: 3, sm: 4, md: 6 },
          py: { xs: 3, sm: 4, md: 6 },
        }}
      >
        <header className="subcategory-header">
          <BreadcrumbsComponent sx={{ fontSize: "12px" }}>
            {breadcrumbs}
          </BreadcrumbsComponent>
          <Typography
            sx={{
              fontSize: { xs: 28, md: 40 },
            }}
            variant="h3"
          >
            {subname}
          </Typography>
          {/* <div className="title-wrapper">
            <h1>{subname}</h1>
          </div> */}
          <div className="explanation__video  ">
            <p className="subtitle">
              Stand out from the crowd with a logo that fits your brand
              personality.
            </p>
            <div onClick={handleOpen} className="explanation-video">
              <button className=" icon_play">
                <span
                  className=" play-icon"
                  style={{ width: 14, height: 14, marginRight: "4px" }}
                >
                  <svg
                    fill="#4a73e8"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.00017 0.333374C6.48384 0.333374 5.00157 0.783016 3.74079 1.62544C2.48002 2.46786 1.49736 3.66523 0.91709 5.06613C0.336818 6.46703 0.184992 8.00855 0.480812 9.49573C0.776632 10.9829 1.50681 12.349 2.57901 13.4212C3.65122 14.4934 5.01729 15.2236 6.50447 15.5194C7.99166 15.8152 9.53317 15.6634 10.9341 15.0831C12.335 14.5028 13.5323 13.5202 14.3748 12.2594C15.2172 10.9986 15.6668 9.51636 15.6668 8.00004C15.6646 5.96739 14.8562 4.01863 13.4189 2.58132C11.9816 1.14402 10.0328 0.33558 8.00017 0.333374V0.333374ZM11.5025 8.28737L5.83583 11.6207C5.7852 11.6505 5.7276 11.6664 5.66885 11.6667C5.61011 11.6671 5.55232 11.6519 5.50133 11.6227C5.45034 11.5936 5.40796 11.5514 5.37849 11.5006C5.34902 11.4498 5.3335 11.3921 5.3335 11.3334V4.66671C5.3335 4.60796 5.34902 4.55026 5.37849 4.49945C5.40796 4.44864 5.45034 4.40651 5.50133 4.37735C5.55232 4.34818 5.61011 4.33301 5.66885 4.33336C5.7276 4.33372 5.7852 4.34959 5.83583 4.37937L11.5025 7.71271C11.5525 7.74214 11.594 7.78413 11.6229 7.83453C11.6517 7.88493 11.6669 7.94198 11.6669 8.00004C11.6669 8.0581 11.6517 8.11515 11.6229 8.16555C11.594 8.21595 11.5525 8.25794 11.5025 8.28737V8.28737Z" />
                  </svg>
                </span>
                How Fiverr Works
              </button>
            </div>
          </div>
          <div className="number-of-results">
            <span className="m-r-4">
              {!data?.length ? "No" : data?.length} services available
            </span>
          </div>
        </header>
        <Grid sx={{ py: 4 }} container spacing={4}>
          {data?.length === 0 && (
            <Stack
              direction="row"
              width="100%"
              justifyContent="center"
              alignItems="center"
              minHeight={350}
            >
              <Empty />
            </Stack>
          )}
          {renderListJob()}
        </Grid>
      </Box>
      <div className="panigation">
        <Pagination
          defaultPageSize={pageSize}
          current={state.current}
          total={data?.length}
          onChange={handleChange}
          onShowSizeChange={handleChangeSize}
        />
      </div>
      <ModalVideo data={dataVideo} open={open} onClose={handleClose} />
    </>
  );
}
