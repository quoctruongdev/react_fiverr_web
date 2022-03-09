import * as ActionType from "./constants";

const initialStatae = {
  loading: false,
  data: null,
  error: null,
};

const listJobPopularReducer = (state = initialStatae, action) => {
  switch (action.type) {
    case ActionType.LIST_JOB_POPULAR_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.LIST_JOB_POPULAR_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.LIST_JOB_POPULAR_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default listJobPopularReducer;
