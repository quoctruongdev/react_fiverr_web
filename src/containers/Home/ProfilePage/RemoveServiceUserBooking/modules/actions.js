import * as ActionType from "./constants";
import { apiClient } from "../../../../../utils/apiutils";

// ************ Job User Booking ************
export const actFetchDoneServiceUserBooking = (id) => {
  return (dispatch) => {
    dispatch(actDoneServiceUserBookingRequest());
    apiClient
      .patch(`jobs/done/${id}`)
      .then((result) => {
        dispatch(actDoneServiceUserBookingSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actDoneServiceUserBookingFailed(err));
      });
  };
};

const actDoneServiceUserBookingRequest = () => {
  return {
    type: ActionType.DONE_SERVICE_USER_BOOKING_REQUEST,
  };
};

const actDoneServiceUserBookingSuccess = (data) => {
  return {
    type: ActionType.DONE_SERVICE_USER_BOOKING_SUCCESS,
    payload: data,
  };
};

const actDoneServiceUserBookingFailed = (error) => {
  return {
    type: ActionType.DONE_SERVICE_USER_BOOKING_FAILED,
    payload: error,
  };
};
