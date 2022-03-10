import * as ActionType from "./constants";
import { apiClient } from "../../../../../utils/apiutils";

// ************ Job User Booking ************
export const actFetchJobUserBooking = () => {
  return (dispatch) => {
    dispatch(actJobUserBookingRequest());
    apiClient
      .get("jobs/by-user")
      .then((result) => {
        dispatch(actJobUserBookingSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actJobUserBookingFailed(err));
      });
  };
};

const actJobUserBookingRequest = () => {
  return {
    type: ActionType.JOB_USER_BOOKING_REQUEST,
  };
};

const actJobUserBookingSuccess = (data) => {
  return {
    type: ActionType.JOB_USER_BOOKING_SUCCESS,
    payload: data,
  };
};

const actJobUserBookingFailed = (error) => {
  return {
    type: ActionType.JOB_USER_BOOKING_FAILED,
    payload: error,
  };
};
