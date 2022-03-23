import * as ActionType from "./constants";
import { apiAdmin } from "../../../../../utils/apiutils";
import { actSetMessage } from "../../../../../components/Notification/module/actions";

// ************Add Service************
export const actFetchAddService = (user, history) => {
  return (dispatch) => {
    dispatch(actAddServiceRequest());
    apiAdmin
      .post("jobs", user)
      .then((result) => {
        dispatch(actAddServiceSuccess(result.data));
        dispatch(actSetMessage("Delete service success!", "success"));
      })
      .catch((err) => {
        dispatch(actSetMessage(`${err?.response?.data.message}`, "error"));
        dispatch(actAddServiceFailed(err));
      });
  };
};

const actAddServiceRequest = () => {
  return {
    type: ActionType.ADD_SERVICE_REQUEST,
  };
};

const actAddServiceSuccess = (data) => {
  return {
    type: ActionType.ADD_SERVICE_SUCCESS,
    payload: data,
  };
};

const actAddServiceFailed = (error) => {
  return {
    type: ActionType.ADD_SERVICE_FAILED,
    payload: error,
  };
};
