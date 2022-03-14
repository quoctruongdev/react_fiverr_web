import * as ActionType from "./constants";
import { apiAdmin } from "../../../../utils/apiutils";

// ************List Job************
export const actFetchServicesList = () => {
  return (dispatch) => {
    dispatch(actServicesListRequest());
    apiAdmin
      .get("jobs")
      .then((result) => {
        dispatch(actServicesListSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actServicesListFailed(err));
      });
  };
};

const actServicesListRequest = () => {
  return {
    type: ActionType.SERVICES_LIST_REQUEST,
  };
};

const actServicesListSuccess = (data) => {
  return {
    type: ActionType.SERVICES_LIST_SUCCESS,
    payload: data,
  };
};

const actServicesListFailed = (error) => {
  return {
    type: ActionType.SERVICES_LIST_FAILED,
    payload: error,
  };
};
