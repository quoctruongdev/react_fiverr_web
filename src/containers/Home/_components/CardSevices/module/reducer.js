import * as ActionType from "./constants";
const initialState = {
  loading: false,
  data: [],
};

if (localStorage.getItem("myList")) {
  initialState.data = JSON.parse(localStorage.getItem("myList"));
} else {
  initialState.data = [];
}
const myListServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_TO_LIST_REQUEST:
      state.loading = true;
      state.data = [];
      return { ...state };
    case ActionType.ADD_TO_LIST_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      return { ...state };
    case ActionType.DELETE_FROM_LIST:
      state.loading = false;
      state.data = action.payload;
      return { ...state };
    case ActionType.DELETE_ALL_LIST:
      state.loading = false;
      state.data = [];
      return { ...state };
    default:
      return { ...state };
  }
};

export default myListServiceReducer;
