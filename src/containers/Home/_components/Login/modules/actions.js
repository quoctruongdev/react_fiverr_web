import * as ActionType from "./constants";
import { apiClient } from "../../../../../utils/apiutils";
import { successNotice } from "../../Alert";
import { actSetMessage } from "../../../../../components/Notification/module/actions";
import { useDispatch } from "react-redux";
import { actShowModalPopup } from "../../../../../components/ModalPopup/module/actions";

const TIME_EXP = 3600000;

// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk4YWQ2NGFlZjM0NDAwMWNlZDA5NGEiLCJlbWFpbCI6ImFuaFR1eWV0QGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY0MTYzNTA0Nn0.L4TaY1iZHjQE7UlbeMFbdtRY9BH3_32pOQcpYnFnz2U"

export const actLoginApi = (user, history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    apiClient
      .post("auth/signin", user)
      .then((result) => {
        if (result.data.user.role === "ADMIN") {
          dispatch(
            actSetMessage(
              "Account is an administrator account with no access",
              "error"
            )
          );
          return Promise.reject({
            response: {
              data: {
                content: "Account is an administrator account with no access",
              },
            },
          });
        }
        //lưu exp xuống localStorage
        const date = new Date().getTime();
        const exp = date + TIME_EXP;
        localStorage.setItem("expClient", exp);
        //setTimeOut để logout
        dispatch(actSetTimeLogout(history, TIME_EXP));
        //Luu trang thai login
        localStorage.setItem("UserClient", JSON.stringify(result.data));
        // dispatch(actSetMessage(result?.data?.message, "success"));
        dispatch(actSetMessage("You are already logged in", "success"));
        dispatch(actLoginSuccess(result.data));
        dispatch(actShowModalPopup({ open: false }));
        history.replace("/");
      })
      .catch((error) => {
        dispatch(actLoginFailed(error));
        error?.response?.data.message !== undefined &&
          dispatch(actSetMessage(`${error?.response?.data.message}`, "error"));
      });
  };
};

// export const actLogout = (history, dispatch) => {
//   //xoa localStorage
//   localStorage.removeItem("UserClient");
//   localStorage.removeItem("expClient");

//   //redirect ve trang /auth
//   // history.replace("/login");
//   dispatch(actSetMessage("You are logged out", "success"));

//   //clear reducer
//   return {
//     type: ActionType.LOGIN_CLEAR_DATA,
//   };
// };
export const actLogout = (history) => {
  return async function (dispatch) {
    dispatch(actLogOutRequest());
    setTimeout(() => {
      localStorage.removeItem("UserClient");
      localStorage.removeItem("expClient");
      dispatch(actLogOutSuccess());
      history.replace("/login");
      dispatch(actSetMessage("You are logged out", "success"));
    }, 300);
  };
};

const actLogOutRequest = () => {
  return {
    type: ActionType.LOGIN_CLEAR_DATA_REQUEST,
  };
};
const actLogOutSuccess = () => {
  return {
    type: ActionType.LOGIN_CLEAR_DATA,
  };
};

const actSetTimeLogout = (history, exp) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(actLogout(history));
    }, exp);
  };
};

//Trường hợp reload lại trang web
export const actTryLoginHome = (history) => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("UserClient"));
    if (!user) return;

    //Tính toán thời gian exp
    const exp = localStorage.getItem("expClient");
    const date = new Date().getTime();

    if (date > exp) {
      //logout
      dispatch(actLogout(history));

      return;
    }
    // console.log(exp - date);
    dispatch(actSetTimeLogout(history, exp - date));
    dispatch(actLoginSuccess(user));
  };
};

const actLoginRequest = () => {
  return {
    type: ActionType.LOGIN_REQUEST,
  };
};

const actLoginSuccess = (data) => {
  return {
    type: ActionType.LOGIN_SUCCESS,
    payload: data,
  };
};

const actLoginFailed = (error) => {
  return {
    type: ActionType.LOGIN_FAILED,
    payload: error,
  };
};
