import * as ActionType from "./constants";
import { apiAdmin } from "../../../../../utils/apiutils";
import { actSetMessage } from "../../../../../components/Notification/module/actions";
// ************Add User************
export const actFetchAddUser = (user, history) => {
  return (dispatch) => {
    dispatch(actAddUserRequest());
    apiAdmin
      .post("users", user)
      .then((result) => {
        dispatch(actAddUserSuccess(result.data));
        dispatch(actSetMessage("Add user success!", "success"));
      })
      .catch((err) => {
        dispatch(actAddUserFailed(err));
        dispatch(actSetMessage(`${err?.response?.data.message}`, "error"));
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
