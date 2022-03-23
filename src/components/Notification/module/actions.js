import * as ActionType from "./constants";

export const actSetMessage = (text, severity, action) => {
  return {
    type: ActionType.MessageActionType,
    payload: {
      text,
      severity,
      // open,
      action,
      // itemData,
    },
  };
};
