import * as ActionType from "./constants";
import { apiAdmin } from "../../../../../utils/apiutils";

export const actFetchDetailService = (id) => {
  return (dispatch) => {
    dispatch(actDetailServiceRequest());

    apiAdmin
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
    type: ActionType.DETAIL_SERVICE_FAILED,
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
