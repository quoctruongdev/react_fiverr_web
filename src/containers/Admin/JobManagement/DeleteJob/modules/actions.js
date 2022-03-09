import * as ActionType from "./constants";
import { api } from "../../../../../utils/apiutils";
import { actFetchListJob } from "../../_module/actions";

export const actFetchDeleteJob = (id) => {
  return (dispatch) => {
    dispatch(actDeleteJobRequest());

    api
      .delete(`jobs/${id}`)
      .then((result) => {
        dispatch(actDeleteJobSuccess(result.data));
        // alert("Bạn đã xoá thành công");
        // dispatch(actFetchListJob());
      })
      .catch((err) => {
        dispatch(actDeleteJobFailed(err));
        alert(`${err.message}`);
      });
  };
};

const actDeleteJobRequest = () => {
  return {
    type: ActionType.DELETE_JOB_REQUEST,
  };
};

const actDeleteJobSuccess = (data) => {
  return {
    type: ActionType.DELETE_JOB_SUCCESS,
    payload: data,
  };
};

const actDeleteJobFailed = (error) => {
  return {
    type: ActionType.DELETE_JOB_FAILED,
    payload: error,
  };
};
