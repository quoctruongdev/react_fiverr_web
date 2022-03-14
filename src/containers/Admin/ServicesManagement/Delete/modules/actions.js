import * as ActionType from "./constants";
import { apiAdmin } from "../../../../../utils/apiutils";
import { actFetchListService } from "../../_module/actions";

export const actFetchDeleteService = (id) => {
  return (dispatch) => {
    dispatch(actDeleteServiceRequest());

    apiAdmin
      .delete(`jobs/${id}`)
      .then((result) => {
        dispatch(actDeleteServiceSuccess(result.data));
        // alert("Bạn đã xoá thành công");
        // dispatch(actFetchListService());
      })
      .catch((err) => {
        dispatch(actDeleteServiceFailed(err));
        alert(`${err.message}`);
      });
  };
};

const actDeleteServiceRequest = () => {
  return {
    type: ActionType.DELETE_SERVICE_REQUEST,
  };
};

const actDeleteServiceSuccess = (data) => {
  return {
    type: ActionType.DELETE_SERVICE_SUCCESS,
    payload: data,
  };
};

const actDeleteServiceFailed = (error) => {
  return {
    type: ActionType.DELETE_SERVICE_FAILED,
    payload: error,
  };
};
