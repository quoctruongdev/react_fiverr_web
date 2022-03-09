import * as ActionType from "./constants";
import { api } from "../../../../../utils/apiutils";

// ************Add Job************
export const actFetchAddJob = (user, history) => {
  return (dispatch) => {
    dispatch(actAddJobRequest());
    api
      .post("jobs", user)
      .then((result) => {
        dispatch(actAddJobSuccess(result.data));
        alert("Add new job successfully");
      })
      .catch((err) => {
        dispatch(actAddJobFailed(err));
      });
  };
};

const actAddJobRequest = () => {
  return {
    type: ActionType.ADD_JOB_REQUEST,
  };
};

const actAddJobSuccess = (data) => {
  return {
    type: ActionType.ADD_JOB_SUCCESS,
    payload: data,
  };
};

const actAddJobFailed = (error) => {
  return {
    type: ActionType.ADD_JOB_FAILED,
    payload: error,
  };
};
