import React from "react";
import { Empty } from "antd";
import Loader from "../../../components/Loader/Loader";
import CardSevices from "../_components/CardSevices";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { actDeleteAllList } from "../_components/CardSevices/module/action";

export default function MyListService() {
  const loading = useSelector((state) => state.categoriesMainReducer.loading);
  const data = JSON.parse(localStorage.getItem("myList"));
  const dispatch = useDispatch();
  const loadingMyList = useSelector(
    (state) => state.myListServiceReducer.loading
  );

  const renderMyListService = () => {
    return data?.map((item) => {
      return <CardSevices key={item?._id} item={item} />;
    });
  };
  if (loading || loadingMyList) return <Loader />;
  return (
    <Box minHeight={500} px={10}>
      <Stack justifyContent="space-between" alignItems="center" direction="row">
        <Typography
          sx={{
            paddingTop: "24px",
            color: "#404145",
            fontWeight: 700,
            fontSize: 30,
          }}
        >
          My List
          <Typography pb={4} color="#95979d" variant="subtitle1">
            Organize your go-to freelancers and favorite services into custom
            lists you can easily access and share with your team.
          </Typography>
        </Typography>
        <Typography>
          <Button
            onClick={() => {
              dispatch(actDeleteAllList());
            }}
            color="error"
            variant="contained"
            disabled={data?.length > 0 ? false : true}
          >
            Remove All
          </Button>
        </Typography>
      </Stack>
      <Grid sx={{ py: 4 }} container spacing={4}>
        {data?.length > 0 ? (
          renderMyListService()
        ) : (
          <Empty
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              minHeight: 300,
            }}
            image={Empty.PRESENTED_IMAGE_DEFAULT}
          />
        )}
      </Grid>
    </Box>
  );
}
