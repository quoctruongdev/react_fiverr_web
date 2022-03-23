import * as ActionType from "./constants";
import { apiAdmin } from "../../../../../utils/apiutils";

export const actFetchDetailUser = (id) => {
  return (dispatch) => {
    dispatch(actDetailUserRequest());

    apiAdmin
      .get(`users/${id}`)
      .then((result) => {
        dispatch(actDetailUserSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actDetailUserFailed(err));
      });
  };
};

const actDetailUserRequest = () => {
  return {
    type: ActionType.DETAIL_USER_FAILED,
  };
};

const actDetailUserSuccess = (data) => {
  return {
    type: ActionType.DETAIL_USER_SUCCESS,
    payload: data,
  };
};

const actDetailUserFailed = (error) => {
  return {
    type: ActionType.DETAIL_USER_FAILED,
    payload: error,
  };
};
