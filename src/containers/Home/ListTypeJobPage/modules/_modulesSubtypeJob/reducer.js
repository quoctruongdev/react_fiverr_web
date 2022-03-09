import * as ActionType from "./constants";

const initialStatae = {
  loading: false,
  data: null,
  error: null,
};

const listSubTypeReducer = (state = initialStatae, action) => {
  switch (action.type) {
    case ActionType.LIST_SUB_TYPE_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.LIST_SUB_TYPE_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.LIST_SUB_TYPE_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default listSubTypeReducer;
