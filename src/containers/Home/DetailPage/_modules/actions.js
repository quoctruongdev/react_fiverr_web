import * as ActionType from "./constants";
import { apiClient } from "../../../../utils/apiutils";

// ************Detail Job************
export const actFetchDetailJob = (id) => {
  return (dispatch) => {
    dispatch(actDetailJobRequest());
    apiClient
      .get(`jobs/${id}`)
      .then((result) => {
        dispatch(actDetailJobSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actDetailJobFailed(err));
      });
  };
};

const actDetailJobRequest = () => {
  return {
    type: ActionType.DETAIL_JOB_REQUEST,
  };
};

const actDetailJobSuccess = (data) => {
  return {
    type: ActionType.DETAIL_JOB_SUCCESS,
    payload: data,
  };
};

const actDetailJobFailed = (error) => {
  return {
    type: ActionType.DETAIL_JOB_FAILED,
    payload: error,
  };
};
