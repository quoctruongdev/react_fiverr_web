import * as ActionType from "./constants";
const initialState = {
  data: {
    Component: null,
    open: false,
    title: null,
    action: null,
    width: null,
    height: null,
  },
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SHOW_MODAL_POPUP: {
      state.data = action.payload;
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};

export default modalReducer;
