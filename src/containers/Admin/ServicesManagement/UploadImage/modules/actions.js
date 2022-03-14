import * as ActionType from "./constants";
import { apiAdmin } from "../../../../../utils/apiutils";

// ************Update Service************
export const actFetchUploadImageService = (id, job) => {
  return (dispatch) => {
    dispatch(actUploadImageServiceRequest());
    apiAdmin
      .post(`jobs/upload-image/${id}`, job)
      .then((result) => {
        dispatch(actUploadImageServiceSuccess(result.data));
        // alert("Upload image service successfull");
      })
      .catch((err) => {
        dispatch(actUploadImageServiceFailed(err));
      });
  };
};

const actUploadImageServiceRequest = () => {
  return {
    type: ActionType.UPLOAD_IMAGE_SERVICE_REQUEST,
  };
};

const actUploadImageServiceSuccess = (data) => {
  return {
    type: ActionType.UPLOAD_IMAGE_SERVICE_SUCCESS,
    payload: data,
  };
};

const actUploadImageServiceFailed = (error) => {
  return {
    type: ActionType.UPLOAD_IMAGE_SERVICE_FAILED,
    payload: error,
  };
};
