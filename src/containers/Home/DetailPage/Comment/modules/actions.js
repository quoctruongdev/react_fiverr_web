import * as ActionType from "./constants";
import { api } from "../../../../../utils/apiutils";

// ************Detail Job************
export const actFetchListComment = (id) => {
  return (dispatch) => {
    dispatch(actListCommentRequest());
    api
      .get(`comments/by-job/${id}`)
      .then((result) => {
        dispatch(actListCommentSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListCommentFailed(err));
      });
  };
};

const actListCommentRequest = () => {
  return {
    type: ActionType.LIST_COMMENT_REQUEST,
  };
};

const actListCommentSuccess = (data) => {
  return {
    type: ActionType.LIST_COMMENT_SUCCESS,
    payload: data,
  };
};

const actListCommentFailed = (error) => {
  return {
    type: ActionType.LIST_COMMENT_FAILED,
    payload: error,
  };
};
