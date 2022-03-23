import * as ActionType from "./constants";
const initialState = {
  data: {
    text: null,
    severity: "info",
    action: null,
    // itemData: null,
    // open: false,
    // transiton: null,
  },
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.MessageActionType: {
      state.data = action.payload;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default messagesReducer;
