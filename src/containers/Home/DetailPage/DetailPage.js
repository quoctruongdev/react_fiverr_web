import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchDetailJob } from "./_modules/actions";
import { actFetchDetailUser } from "./Overview/_JobSlider/_modules/actions";
import { actFetchListComment } from "./Comment/modules/actions";
import Loader from "../../../components/Loader/Loader";
import Overview from "./Overview/Overview";
import TopNav from "../_components/Navbar/_topNav";
import CommentReview from "./Comment/Comment";
import BookingJob from "./BookingJob/BookingJob";
import Description from "./Description/Description";
import AboutSeller from "./AboutSeller/AboutSeller";
import FAQ from "./FAQ/FAQ";
import "./style.css";

export default function DetailPage(props) {
  const data = useSelector((state) => state.detailJobReducer.data);
  const loading = useSelector((state) => state.detailJobReducer.loading);
  const dataUserCreated = useSelector((state) => state.detailUserReducer.data);
  const dispatch = useDispatch();
  const dataComment = useSelector((state) => state.listCommentReducer.data);
  const loadingComment = useSelector(
    (state) => state.listCommentReducer.loading
  );
  useEffect(() => {
    const id = props.match.params.id;
    const userCreated = props.match.params.userCreated;
    dispatch(actFetchDetailJob(id));
    dispatch(actFetchListComment(id));
    dispatch(actFetchDetailUser(userCreated));
  }, []);

  console.log(dataComment);

  if (loading) {
    return <Loader />;
  }
  return (
    <section id="DetailPage">
      <TopNav />
      <div className="Detail__Job px-3 mx-5 row ">
        <div className="col-md-7 pb-5">
          <Overview data={data} dataUserCreated={dataUserCreated} />
          <Description data={data} dataUserCreated={dataUserCreated} />
          <AboutSeller dataUserCreated={dataUserCreated} data={data} />
          <FAQ />
          <CommentReview dataComment={dataComment} />
        </div>
        <BookingJob data={data} />
      </div>
    </section>
  );
}
