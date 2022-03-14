// ************Search Service************
import * as ActionType from "./constants";
import { apiAdmin } from "../../../../../utils/apiutils";

export const actFetchSearchService = (keyword) => {
  return (dispatch) => {
    dispatch(actSearchServiceRequest());
    apiAdmin
      .get(`jobs/by-name?name=${keyword}`)
      .then((result) => {
        dispatch(actSearchServiceSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actSearchServiceFailed(err));
      });
  };
};

const actSearchServiceRequest = () => {
  return {
    type: ActionType.SEARCH_SERVICE_REQUEST,
  };
};

const actSearchServiceSuccess = (data) => {
  return {
    type: ActionType.SEARCH_SERVICE_SUCCESS,
    payload: data,
  };
};

const actSearchServiceFailed = (error) => {
  return {
    type: ActionType.SEARCH_SERVICE_FAILED,
    payload: error,
  };
};
