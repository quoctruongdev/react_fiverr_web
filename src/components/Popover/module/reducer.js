import * as ActionType from "./constants";
const initialState = {
  data: {
    Component: null,
    anchorEl: null,
    title: null,
  },
};

const popoverGlobalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.PopoverGlobalActionType: {
      state.data = action.payload;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default popoverGlobalReducer;
