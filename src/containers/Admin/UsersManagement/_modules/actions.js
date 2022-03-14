import * as ActionType from "./constants";
import { apiAdmin } from "../../../../utils/apiutils";

// ************User List ************
export const actFetchUsersList = () => {
  return (dispatch) => {
    dispatch(actUsersListRequest());
    apiAdmin
      .get("users")
      .then((result) => {
        dispatch(actUsersListSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actUsersListFailed(err));
      });
  };
};

const actUsersListRequest = () => {
  return {
    type: ActionType.USERS_LIST_REQUEST,
  };
};

const actUsersListSuccess = (data) => {
  return {
    type: ActionType.USERS_LIST_SUCCESS,
    payload: data,
  };
};

const actUsersListFailed = (error) => {
  return {
    type: ActionType.USERS_LIST_FAILED,
    payload: error,
  };
};
