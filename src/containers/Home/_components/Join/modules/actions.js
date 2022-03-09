import * as ActionType from "./constants";
import { api } from "../../../../../utils/apiutils";
import { successNotice } from "../../Alert";
const TIME_EXP = 3600000;

// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk4YWQ2NGFlZjM0NDAwMWNlZDA5NGEiLCJlbWFpbCI6ImFuaFR1eWV0QGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTY0MTYzNTA0Nn0.L4TaY1iZHjQE7UlbeMFbdtRY9BH3_32pOQcpYnFnz2U"

export const actJoinApi = (user, history) => {
  return (dispatch) => {
    dispatch(actJoinRequest());
    api
      .post("auth/signup", user)
      .then((result) => {
        history.replace("/login");
        successNotice(
          "You have successfully registered. Please login to experience Fiverr's services",
          "0vh"
        );
        dispatch(actJoinSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actJoinFailed(error));
      });
  };
};

const actJoinRequest = () => {
  return {
    type: ActionType.JOIN_REQUEST,
  };
};

const actJoinSuccess = (data) => {
  return {
    type: ActionType.JOIN_SUCCESS,
    payload: data,
  };
};

const actJoinFailed = (error) => {
  return {
    type: ActionType.JOIN_FAILED,
    payload: error,
  };
};
