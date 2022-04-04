import * as ActionType from "./constants";
import { actSetMessage } from "../../../../../components/Notification/module/actions";

// export const actAddToListService = (service) => async (dispatch) => {
export const actAddToListService = (service) => {
  const promise = new Promise((resolve, reject) => {
    const lists = localStorage.getItem("myList")
      ? JSON.parse(localStorage.getItem("myList"))
      : [];
    const duplicates = lists?.filter((item) => item?._id === service?._id);

    setTimeout(() => {
      if (duplicates?.length === 0) {
        const serviceToAdd = { ...service, count: 1 };
        resolve(
          lists.push(serviceToAdd),
          localStorage.setItem("myList", JSON.stringify(lists))
        );
      } else {
        const updatedCart = lists?.filter((item) => item?._id !== service?._id);
        reject(localStorage.setItem("myList", JSON.stringify(updatedCart)));
      }
    }, 300);
  });

  return (dispatch) => {
    dispatch(actAddToListReQuest());
    promise
      .then((result) => {
        dispatch(actAddToListSuccess(result));
        dispatch(actSetMessage("The item saved in: My List.", "info"));
      })
      .catch((lists) => {
        dispatch(actDeleteFromList(lists));
        dispatch(
          actSetMessage(
            "The item has been removed from the :My List",
            "warning"
          )
        );
      });
  };
};

export const actDeleteAllList = () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const lists = [];
      resolve(localStorage.setItem("myList", JSON.stringify(lists)));
    }, 300);
  });

  return (dispatch) => {
    dispatch(actAddToListReQuest());
    promise.then((lists) => {
      dispatch(actDeleteAll(lists));
      dispatch(
        actSetMessage("All item has been removed from the :My List", "success")
      );
    });
  };
};

const actAddToListReQuest = () => {
  return {
    type: ActionType.ADD_TO_LIST_REQUEST,
  };
};
const actAddToListSuccess = () => {
  return {
    type: ActionType.ADD_TO_LIST_SUCCESS,
  };
};
const actDeleteFromList = () => {
  return {
    type: ActionType.DELETE_FROM_LIST,
  };
};
const actDeleteAll = () => {
  return {
    type: ActionType.DELETE_ALL_LIST,
  };
};
