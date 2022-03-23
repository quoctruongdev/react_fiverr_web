import * as ActionType from "./constants";

export const actPopoverGlobal = (Component, anchorEl, title) => {
  return {
    type: ActionType.PopoverGlobalActionType,
    payload: {
      Component,
      anchorEl,
      title,
    },
  };
};
