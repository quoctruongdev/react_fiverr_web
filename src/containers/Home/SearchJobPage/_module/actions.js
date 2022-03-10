import * as ActionType from "./constants";
import { apiClient } from "../../../../utils/apiutils";

// ************Search Job************
export const actFetchSearchJob = (keyword) => {
  return (dispatch) => {
    dispatch(actSearchJobRequest());
    apiClient
      .get(`jobs/by-name?name=${keyword}`)
      .then((result) => {
        dispatch(actSearchJobSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actSearchJobFailed(err));
      });
  };
};

const actSearchJobRequest = () => {
  return {
    type: ActionType.SEARCH_JOB_REQUEST,
  };
};

const actSearchJobSuccess = (data) => {
  return {
    type: ActionType.SEARCH_JOB_SUCCESS,
    payload: data,
  };
};

const actSearchJobFailed = (error) => {
  return {
    type: ActionType.SEARCH_JOB_FAILED,
    payload: error,
  };
};
