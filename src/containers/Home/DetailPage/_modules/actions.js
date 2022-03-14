import * as ActionType from "./constants";
import { apiClient } from "../../../../utils/apiutils";

// ************Detail Service************
export const actFetchDetailService = (id) => {
  return (dispatch) => {
    dispatch(actDetailServiceRequest());
    apiClient
      .get(`jobs/${id}`)
      .then((result) => {
        dispatch(actDetailServiceSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actDetailServiceFailed(err));
      });
  };
};

const actDetailServiceRequest = () => {
  return {
    type: ActionType.DETAIL_SERVICE_REQUEST,
  };
};

const actDetailServiceSuccess = (data) => {
  return {
    type: ActionType.DETAIL_SERVICE_SUCCESS,
    payload: data,
  };
};

const actDetailServiceFailed = (error) => {
  return {
    type: ActionType.DETAIL_SERVICE_FAILED,
    payload: error,
  };
};
