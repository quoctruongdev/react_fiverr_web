// ************Search User************
import * as ActionType from "./constants";
import { apiAdmin } from "../../../../../utils/apiutils";

export const actFetchSearchUser = (keyword) => {
  return (dispatch) => {
    dispatch(actSearchUserRequest());
    apiAdmin
      .get(`users/pagination-search?name=${keyword}&skip=0&limit=0`)
      .then((result) => {
        dispatch(actSearchUserSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actSearchUserFailed(err));
      });
  };
};

const actSearchUserRequest = () => {
  return {
    type: ActionType.SEARCH_USER_REQUEST,
  };
};

const actSearchUserSuccess = (data) => {
  return {
    type: ActionType.SEARCH_USER_SUCCESS,
    payload: data,
  };
};

const actSearchUserFailed = (error) => {
  return {
    type: ActionType.SEARCH_USER_FAILED,
    payload: error,
  };
};
