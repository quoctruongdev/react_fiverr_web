import * as ActionType from "./constants";

const initialStatae = {
  loading: false,
  data: null,
  error: null,
};
export const resetForm = () => {
  document.getElementById("AddUserForm").reset();
};

const usersListReducer = (state = initialStatae, action) => {
  switch (action.type) {
    case ActionType.USERS_LIST_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.USERS_LIST_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.USERS_LIST_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default usersListReducer;
