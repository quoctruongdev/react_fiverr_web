import * as ActionType from "./constants";

const initialStatae = {
  loading: false,
  data: null,
  error: null,
};

const categoriesMainReducer = (state = initialStatae, action) => {
  switch (action.type) {
    case ActionType.CATEGORIES_MAIN_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.CATEGORIES_MAIN_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.CATEGORIES_MAIN_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default categoriesMainReducer;
