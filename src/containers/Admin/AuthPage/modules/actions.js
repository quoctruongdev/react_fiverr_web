import * as ActionType from "./constants";
import { apiAdmin } from "./../../../../utils/apiutils";

const TIME_EXP = 3600000;

export const actAuthApi = (user, history) => {
  return (dispatch) => {
    dispatch(actAuthRequest());
    apiAdmin
      .post("auth/signin", user)
      .then((result) => {
        //Check maLoaiNguoiDung
        if (result.data.user.role === "CLIENT") {
          return Promise.reject({
            response: {
              data: {
                content: "Acount not have access.",
              },
            },
          });
        }

        //lưu exp xuống localStorage
        const date = new Date().getTime();
        const exp = date + TIME_EXP;
        localStorage.setItem("exp", exp);

        //setTimeOut để logout
        dispatch(actSetTimeLogout(history, TIME_EXP));

        //Luu trang thai login
        localStorage.setItem("UserAdmin", JSON.stringify(result.data));
        history.replace("/dashboard/users");

        //redirect dashboard
        dispatch(actAuthSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actAuthFailed(error));
      });
  };
};

export const actLogout = (history) => {
  //xoa localStorage
  localStorage.removeItem("UserAdmin");
  localStorage.removeItem("exp");

  //redirect ve trang /auth
  history.replace("/auth");

  //clear reducer
  return {
    type: ActionType.AUTH_CLEAR_DATA,
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
export const actTryLogin = (history) => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("UserAdmin"));
    if (!user) return;

    //Tính toán thời gian exp
    const exp = localStorage.getItem("exp");
    const date = new Date().getTime();

    if (date > exp) {
      //logout
      dispatch(actLogout(history));
      return;
    }
    // console.log(exp - date);
    dispatch(actSetTimeLogout(history, exp - date));
    dispatch(actAuthSuccess(user));
  };
};

const actAuthRequest = () => {
  return {
    type: ActionType.AUTH_REQUEST,
  };
};

const actAuthSuccess = (data) => {
  return {
    type: ActionType.AUTH_SUCCESS,
    payload: data,
  };
};

const actAuthFailed = (error) => {
  return {
    type: ActionType.AUTH_FAILED,
    payload: error,
  };
};
