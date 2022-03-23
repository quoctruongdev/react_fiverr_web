import * as ActionType from "./constants";
import { apiAdmin } from "../../../../../utils/apiutils";
import { actSetMessage } from "../../../../../components/Notification/module/actions";

// ************Update User************
export const actFetchUpdateUser = (id, user) => {
  return (dispatch) => {
    dispatch(actUpdateUserRequest());
    apiAdmin
      .put(`users/${id}`, user)
      .then((result) => {
        dispatch(actUpdateUserSuccess(result.data));
        dispatch(actSetMessage("Update user success!", "success"));
      })
      .catch((err) => {
        dispatch(actUpdateUserFailed(err));
        dispatch(actSetMessage(`${err?.response?.data.message}`, "error"));
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
