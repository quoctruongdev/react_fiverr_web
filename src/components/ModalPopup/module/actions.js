import * as ActionType from "./constants";

export const actShowModalPopup = ({
  Component,
  open,
  title,
  action,
  width,
  height,
}) => {
  return {
    type: ActionType.SHOW_MODAL_POPUP,
    payload: {
      Component,
      open,
      title,
      action,
      width,
      height,
    },
  };
};
