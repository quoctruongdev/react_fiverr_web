import * as ActionType from "./constants";
import { apiAdmin } from "../../../../utils/apiutils";

// ************List User************
export const actFetchListUser = () => {
  return (dispatch) => {
    dispatch(actListUserRequest());
    apiAdmin
      .get("users")
      .then((result) => {
        dispatch(actListUserSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListUserFailed(err));
      });
  };
};

const actListUserRequest = () => {
  return {
    type: ActionType.LIST_USER_REQUEST,
  };
};

const actListUserSuccess = (data) => {
  return {
    type: ActionType.LIST_USER_SUCCESS,
    payload: data,
  };
};

const actListUserFailed = (error) => {
  return {
    type: ActionType.LIST_USER_FAILED,
    payload: error,
  };
};
