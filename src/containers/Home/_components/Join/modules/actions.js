import * as ActionType from "./constants";
import { apiClient } from "../../../../../utils/apiutils";
import { successNotice } from "../../Alert";
import { actSetMessage } from "../../../../../components/Notification/module/actions";
import { Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { actLoginApi } from "../../Login/modules/actions";

export const actJoinApi = (user, history) => {
  return (dispatch) => {
    dispatch(actJoinRequest());
    apiClient
      .post("auth/signup", user)
      .then((result) => {
        const dataLogin = {
          email: user?.email,
          password: user?.password,
        };
        dispatch(
          actSetMessage(
            "You have successfully registered.",
            "success",
            action(dispatch, dataLogin, history)
          )
        );
        dispatch(actJoinSuccess(result.data));
      })
      .catch((error) => {
        dispatch(actJoinFailed(error));
      });
  };
};

const action = (dispatch, dataLogin, history) => (
  <>
    <Button
      onClick={() => {
        dispatch(actLoginApi(dataLogin, history));
      }}
      sx={{ color: "#ffee33" }}
      size="small"
    >
      Login Now
    </Button>
    <IconButton
      size="small"
      aria-label="close"
      color="error"
      onClick={() => {
        dispatch(actSetMessage());
      }}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  </>
);
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
