import * as ActionType from "./constants";
import { apiAdmin } from "../../../../../utils/apiutils";
import { actSetMessage } from "../../../../../components/Notification/module/actions";

// ************Update Service************
export const actFetchUpdateService = (id, user) => {
  return (dispatch) => {
    dispatch(actUpdateServiceRequest());
    apiAdmin
      .put(`jobs/${id}`, user)
      .then((result) => {
        dispatch(actUpdateServiceSuccess(result.data));
        dispatch(actSetMessage("Delete user success!", "success"));
      })
      .catch((err) => {
        dispatch(actUpdateServiceFailed(err));
        dispatch(actSetMessage(`${err?.response?.data.message}`, "error"));
      });
  };
};

const actUpdateServiceRequest = () => {
  return {
    type: ActionType.UPDATE_SERVICE_REQUEST,
  };
};

const actUpdateServiceSuccess = (data) => {
  return {
    type: ActionType.UPDATE_SERVICE_SUCCESS,
    payload: data,
  };
};

const actUpdateServiceFailed = (error) => {
  return {
    type: ActionType.UPDATE_SERVICE_FAILED,
    payload: error,
  };
};
