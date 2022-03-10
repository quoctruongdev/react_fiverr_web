import * as ActionType from "./constants";
import { apiClient } from "../../../../../utils/apiutils";
import { successNotice } from "../../Alert";

const TIME_EXP = 3600000;

// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk4YWQ2NGFlZjM0NDAwMWNlZDA5NGEiLCJlbWFpbCI6ImFuaFR1eWV0QGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY0MTYzNTA0Nn0.L4TaY1iZHjQE7UlbeMFbdtRY9BH3_32pOQcpYnFnz2U"

export const actLoginApi = (user, history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());
    apiClient
      .post("auth/signin", user)
      .then((result) => {
        if (result.data.user.role === "ADMIN") {
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
        successNotice("You are already logged in", "0vh");
        history.replace("/");

        dispatch(actLoginSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actLoginFailed(error));
      });
  };
};

export const actLogout = (history) => {
  //xoa localStorage
  localStorage.removeItem("UserClient");
  localStorage.removeItem("expClient");

  //redirect ve trang /auth
  history.replace("/login");
  successNotice("You are logged out", 10, "0vh");

  //clear reducer
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
