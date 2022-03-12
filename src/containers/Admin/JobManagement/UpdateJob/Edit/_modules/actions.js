import * as ActionType from "./constants";
import { apiAdmin } from "../../../../../../utils/apiutils";

export const actFetchEditJob = (id) => {
  return (dispatch) => {
    dispatch(actEditJobRequest());

    apiAdmin
      .get(`users/${id}`)
      .then((result) => {
        dispatch(actEditJobSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actEditJobFailed(err));
      });
  };
};

const actEditJobRequest = () => {
  return {
    type: ActionType.EDIT_JOB_FAILED,
  };
};

const actEditJobSuccess = (data) => {
  return {
    type: ActionType.EDIT_JOB_SUCCESS,
    payload: data,
  };
};

const actEditJobFailed = (error) => {
  return {
    type: ActionType.EDIT_JOB_FAILED,
    payload: error,
  };
};
