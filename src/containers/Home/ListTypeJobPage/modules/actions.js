import * as ActionType from "./constants";
import { apiClient } from "../../../../utils/apiutils";

// ************List Job Main************
export const actFetchListJobMain = (id) => {
  return (dispatch) => {
    dispatch(actListJobMainRequest());
    apiClient
      .get(`/jobs/by-type?type=${id}&skip=0&llimit=10`)
      .then((result) => {
        dispatch(actListJobMainSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListJobMainFailed(err));
      });
  };
};

const actListJobMainRequest = () => {
  return {
    type: ActionType.LIST_JOB_MAIN_REQUEST,
  };
};

const actListJobMainSuccess = (data) => {
  return {
    type: ActionType.LIST_JOB_MAIN_SUCCESS,
    payload: data,
  };
};

const actListJobMainFailed = (error) => {
  return {
    type: ActionType.LIST_JOB_MAIN_FAILED,
    payload: error,
  };
};
