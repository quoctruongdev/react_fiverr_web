import * as ActionType from "./constants";
import { api } from "../../../../../utils/apiutils";

// ************List Job Popular************
export const actFetchListJobPopular = (id) => {
  return (dispatch) => {
    dispatch(actListJobPopularRequest());
    api
      .get("type-jobs")
      .then((result) => {
        dispatch(actListJobPopularSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListJobPopularFailed(err));
      });
  };
};

const actListJobPopularRequest = () => {
  return {
    type: ActionType.LIST_JOB_POPULAR_REQUEST,
  };
};

const actListJobPopularSuccess = (data) => {
  return {
    type: ActionType.LIST_JOB_POPULAR_SUCCESS,
    payload: data,
  };
};

const actListJobPopularFailed = (error) => {
  return {
    type: ActionType.LIST_JOB_POPULAR_FAILED,
    payload: error,
  };
};
