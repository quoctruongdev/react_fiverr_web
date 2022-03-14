import * as ActionType from "./constants";
import { apiAdmin } from "../../../../../utils/apiutils";
// import { actFetchListUser } from "../../_modules/actions";

export const actFetchDeleteUser = (id) => {
  return (dispatch) => {
    dispatch(actDeleteUserRequest());

    apiAdmin
      .delete(`users/${id}`)
      .then((result) => {
        dispatch(actDeleteUserSuccess(result.data));
        // alert("Bạn đã xoá thành công");
        // dispatch(actFetchListUser());
      })
      .catch((err) => {
        dispatch(actDeleteUserFailed(err));
        alert(`${err.message}`);
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
