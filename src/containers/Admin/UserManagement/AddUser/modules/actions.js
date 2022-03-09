import * as ActionType from "./constants";
import { api } from "../../../../../utils/apiutils";

// ************Add User************
export const actFetchAddUser = (user, history) => {
  return (dispatch) => {
    dispatch(actAddUserRequest());
    api
      .post("users", user)
      .then((result) => {
        dispatch(actAddUserSuccess(result.data));
        alert("Add administrator successfully");
      })
      .catch((err) => {
        dispatch(actAddUserFailed(err));
      });
  };
};

const actAddUserRequest = () => {
  return {
    type: ActionType.ADD_USER_REQUEST,
  };
};

const actAddUserSuccess = (data) => {
  return {
    type: ActionType.ADD_USER_SUCCESS,
    payload: data,
  };
};

const actAddUserFailed = (error) => {
  return {
    type: ActionType.ADD_USER_FAILED,
    payload: error,
  };
};
