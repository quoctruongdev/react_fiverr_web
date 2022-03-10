import * as ActionType from "./constants";
import { apiAdmin } from "../../../../utils/apiutils";

// ************List Job************
export const actFetchListJob = () => {
  return (dispatch) => {
    dispatch(actListJobRequest());
    apiAdmin
      .get("jobs")
      .then((result) => {
        dispatch(actListJobSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListJobFailed(err));
      });
  };
};

const actListJobRequest = () => {
  return {
    type: ActionType.LIST_JOB_REQUEST,
  };
};

const actListJobSuccess = (data) => {
  return {
    type: ActionType.LIST_JOB_SUCCESS,
    payload: data,
  };
};

const actListJobFailed = (error) => {
  return {
    type: ActionType.LIST_JOB_FAILED,
    payload: error,
  };
};
