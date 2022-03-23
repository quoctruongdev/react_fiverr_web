import * as ActionType from "./constants";
import { apiAdmin } from "../../../../../utils/apiutils";
import { actSetMessage } from "../../../../../components/Notification/module/actions";

export const actFetchDeleteService = (id) => {
  return (dispatch) => {
    dispatch(actDeleteServiceRequest());

    apiAdmin
      .delete(`jobs/${id}`)
      .then((result) => {
        dispatch(actDeleteServiceSuccess(result.data));
        dispatch(actSetMessage("Delete service success!", "success"));
      })
      .catch((err) => {
        dispatch(actSetMessage(`${err?.response?.data.message}`, "error"));
        dispatch(actDeleteServiceFailed(err));
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
