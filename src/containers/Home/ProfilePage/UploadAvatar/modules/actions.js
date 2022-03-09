import * as ActionType from "./constants";
import { api } from "../../../../../utils/apiutils";

// ************Upload Avatar************
export const actFetchUploadAvatar = (avatar, history) => {
  return (dispatch) => {
    dispatch(actUploadAvatarRequest());
    api
      .post("users/upload-avatar", avatar)
      .then((result) => {
        dispatch(actUploadAvatarSuccess(result.data));
        // alert("Upload avatar successfully");
      })
      .catch((err) => {
        dispatch(actUploadAvatarFailed(err));
      });
  };
};

const actUploadAvatarRequest = () => {
  return {
    type: ActionType.UPLOAD_AVATAR_REQUEST,
  };
};

const actUploadAvatarSuccess = (data) => {
  return {
    type: ActionType.UPLOAD_AVATAR_SUCCESS,
    payload: data,
  };
};

const actUploadAvatarFailed = (error) => {
  return {
    type: ActionType.UPLOAD_AVATAR_FAILED,
    payload: error,
  };
};
