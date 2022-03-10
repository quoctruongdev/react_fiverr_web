import * as ActionType from "./constants";
import { apiAdmin } from "../../../../utils/apiutils";

// ************Categories Sub Type************
export const actFetchCategoriesSubType = (id) => {
  return (dispatch) => {
    dispatch(actCategoriesSubTypeRequest());
    apiAdmin
      .get(`jobs/by-sub-type?subType=${id}&skip=&llimit=10`)
      .then((result) => {
        dispatch(actCategoriesSubTypeSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actCategoriesSubTypeFailed(err));
      });
  };
};

const actCategoriesSubTypeRequest = () => {
  return {
    type: ActionType.CATEGORIES_SUB_TYPE_REQUEST,
  };
};

const actCategoriesSubTypeSuccess = (data) => {
  return {
    type: ActionType.CATEGORIES_SUB_TYPE_SUCCESS,
    payload: data,
  };
};

const actCategoriesSubTypeFailed = (error) => {
  return {
    type: ActionType.CATEGORIES_SUB_TYPE_FAILED,
    payload: error,
  };
};
