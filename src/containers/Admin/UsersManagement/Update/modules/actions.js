import * as ActionType from "./constants";
import { apiAdmin } from "../../../../../utils/apiutils";

// ************Update User************
export const actFetchUpdateUser = (id, user, history) => {
  return (dispatch) => {
    dispatch(actUpdateUserRequest());
    apiAdmin
      .put(`users/${id}`, user)
      .then((result) => {
        dispatch(actUpdateUserSuccess(result.data));
        alert("Update administrator successfully");
        history.push("/dashboard/users");
      })
      .catch((err) => {
        dispatch(actUpdateUserFailed(err));
      });
  };
};

const actUpdateUserRequest = () => {
  return {
    type: ActionType.UPDATE_USER_REQUEST,
  };
};

const actUpdateUserSuccess = (data) => {
  return {
    type: ActionType.UPDATE_USER_SUCCESS,
    payload: data,
  };
};

const actUpdateUserFailed = (error) => {
  return {
    type: ActionType.UPDATE_USER_FAILED,
    payload: error,
  };
};
