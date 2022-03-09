import * as ActionType from "./constants";
import { api } from "../../../../../utils/apiutils";

// ************Market Place Categories************
export const actFetchCategoriesMain = (id) => {
  return (dispatch) => {
    dispatch(actCategoriesMainRequest());
    api
      .get("type-jobs")
      .then((result) => {
        dispatch(actCategoriesMainSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actCategoriesMainFailed(err));
      });
  };
};

const actCategoriesMainRequest = () => {
  return {
    type: ActionType.CATEGORIES_MAIN_REQUEST,
  };
};

const actCategoriesMainSuccess = (data) => {
  return {
    type: ActionType.CATEGORIES_MAIN_SUCCESS,
    payload: data,
  };
};

const actCategoriesMainFailed = (error) => {
  return {
    type: ActionType.CATEGORIES_MAIN_FAILED,
    payload: error,
  };
};
