import * as ActionType from "./constants";
import { apiAdmin } from "../../../../../utils/apiutils";
import { actSetMessage } from "../../../../../components/Notification/module/actions";

export const actFetchDeleteUser = (id) => {
  return (dispatch) => {
    dispatch(actDeleteUserRequest());

    apiAdmin
      .delete(`users/${id}`)
      .then((result) => {
        dispatch(actDeleteUserSuccess(result.data));
        dispatch(actSetMessage("Delete user success!", "success"));
      })
      .catch((err) => {
        dispatch(actDeleteUserFailed(err));
        dispatch(actSetMessage(`${err?.response?.data.message}`, "error"));
      });
  };
};

const actDeleteUserRequest = () => {
  return {
    type: ActionType.DELETE_USER_REQUEST,
  };
};

const actDeleteUserSuccess = (data) => {
  return {
    type: ActionType.DELETE_USER_SUCCESS,
    payload: data,
  };
};

const actDeleteUserFailed = (error) => {
  return {
    type: ActionType.DELETE_USER_FAILED,
    payload: error,
  };
};
