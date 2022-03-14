import * as ActionType from "./constants";
import { apiAdmin } from "../../../../../utils/apiutils";

// ************Add Service************
export const actFetchAddService = (user, history) => {
  return (dispatch) => {
    dispatch(actAddServiceRequest());
    apiAdmin
      .post("jobs", user)
      .then((result) => {
        dispatch(actAddServiceSuccess(result.data));
        alert("Add new job successfully");
      })
      .catch((err) => {
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
