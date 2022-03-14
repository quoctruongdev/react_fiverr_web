import * as ActionType from "./constants";

const initialStatae = {
  loading: false,
  data: null,
  error: null,
};

const uploadImageServiceReducer = (state = initialStatae, action) => {
  switch (action.type) {
    case ActionType.UPLOAD_IMAGE_SERVICE_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.UPLOAD_IMAGE_SERVICE_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.UPLOAD_IMAGE_SERVICE_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default uploadImageServiceReducer;
