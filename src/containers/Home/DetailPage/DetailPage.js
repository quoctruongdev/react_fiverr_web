import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchDetailService } from "./_modules/actions";
import { actFetchDetailUser } from "./Overview/_JobSlider/_modules/actions";
import { actFetchListComment } from "./Comment/modules/actions";
import Loader from "../../../components/Loader/Loader";
import Overview from "./Overview/Overview";
import TopNav from "../_components/Navbar/TopNavigation/_topNav";
import CommentReview from "./Comment/Comment";
import BookingJob from "./BookingJob/BookingJob";
import Description from "./Description/Description";
import AboutSeller from "./AboutSeller/AboutSeller";
import FAQ from "./FAQ/FAQ";
import "./style.css";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";

export default function DetailPage(props) {
  const data = useSelector((state) => state.detailServiceReducer.data);
  const loading = useSelector((state) => state.detailServiceReducer.loading);
  const loadingLogin = useSelector((state) => state.loginReducerHome.loading);

  const dataUserCreated = useSelector((state) => state.detailUserReducer.data);
  const dispatch = useDispatch();
  const dataComment = useSelector((state) => state.listCommentReducer.data);
  const loadingComment = useSelector(
    (state) => state.listCommentReducer.loading
  );

  const userLogin = localStorage.getItem("UserClient");

  useEffect(() => {
    const id = props.match.params.id;
    const userCreated = props.match.params.userCreated;
    dispatch(actFetchDetailService(id));
    dispatch(actFetchListComment(id));
    dispatch(actFetchDetailUser(userCreated));
  }, [userLogin]);

  if (loading || loadingLogin) {
    return <Loader />;
  }
  return (
    <section>
      <TopNav />
      <Box sx={{ flexGrow: 1, px: { xs: 3, sm: 6, md: 8, lg: 10 }, pt: 4 }}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={7.5}>
            <Overview data={data} dataUserCreated={dataUserCreated} />
            <Description data={data} dataUserCreated={dataUserCreated} />
            <AboutSeller dataUserCreated={dataUserCreated} data={data} />
            <FAQ />
            <CommentReview dataComment={dataComment} />
          </Grid>
          <Grid item xs={12} md={4.5}>
            <BookingJob userLogin={userLogin} data={data} />
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
