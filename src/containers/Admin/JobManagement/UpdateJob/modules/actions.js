import * as ActionType from "./constants";
import { api } from "../../../../../utils/apiutils";

// ************Update Job************
export const actFetchUpdateJob = (id, user, history) => {
  return (dispatch) => {
    dispatch(actUpdateJobRequest());
    api
      .put(`users/${id}`, user)
      .then((result) => {
        dispatch(actUpdateJobSuccess(result.data));
        alert("Add administrator successfully");
        history.push("/dashboard/users");
      })
      .catch((err) => {
        dispatch(actUpdateJobFailed(err));
      });
  };
};

const actUpdateJobRequest = () => {
  return {
    type: ActionType.UPDATE_JOB_REQUEST,
  };
};

const actUpdateJobSuccess = (data) => {
  return {
    type: ActionType.UPDATE_JOB_SUCCESS,
    payload: data,
  };
};

const actUpdateJobFailed = (error) => {
  return {
    type: ActionType.UPDATE_JOB_FAILED,
    payload: error,
  };
};
