import * as ActionType from "./constants";
import { api } from "../../../../../utils/apiutils";

// ************Sub Type Job************
export const actFetchSubTypeJob = (id) => {
  return (dispatch) => {
    dispatch(actSubTypeJobRequest());
    api
      .get(`type-jobs/${id}`)
      .then((result) => {
        dispatch(actSubTypeJobSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actSubTypeJobFailed(err));
      });
  };
};

const actSubTypeJobRequest = () => {
  return {
    type: ActionType.LIST_SUB_TYPE_REQUEST,
  };
};

const actSubTypeJobSuccess = (data) => {
  return {
    type: ActionType.LIST_SUB_TYPE_SUCCESS,
    payload: data,
  };
};

const actSubTypeJobFailed = (error) => {
  return {
    type: ActionType.LIST_SUB_TYPE_FAILED,
    payload: error,
  };
};
