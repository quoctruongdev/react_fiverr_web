import * as ActionType from "./constants";

const initialStatae = {
  loading: false,
  data: null,
  error: null,
  dataVideo: {
    video:
      "https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd_nl/v1/video-attachments/generic_asset/asset/ab0907217c9f9a2c1d2eee677beb7619-1626082923646/how_fiverr_works",

    engSub: "",
  },
};

const categoriesSubTypeReducer = (state = initialStatae, action) => {
  switch (action.type) {
    case ActionType.CATEGORIES_SUB_TYPE_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.CATEGORIES_SUB_TYPE_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.CATEGORIES_SUB_TYPE_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default categoriesSubTypeReducer;
