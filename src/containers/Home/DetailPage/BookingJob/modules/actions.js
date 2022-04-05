import * as ActionType from "./constants";
import { apiClient } from "../../../../../utils/apiutils";
import { actSetMessage } from "../../../../../components/Notification/module/actions";

// ************Booking Job************
export const actFetchBookingJob = (id) => {
  return (dispatch) => {
    dispatch(actBookingJobRequest());
    apiClient
      .patch(`jobs/booking/${id}`)
      .then((result) => {
        dispatch(actBookingJobSuccess(result.data));
        dispatch(actSetMessage("Booking service success.", "success"));
      })
      .catch((err) => {
        dispatch(actBookingJobFailed(err));
      });
  };
};

const actBookingJobRequest = () => {
  return {
    type: ActionType.BOOKING_JOB_REQUEST,
  };
};

const actBookingJobSuccess = (data) => {
  return {
    type: ActionType.BOOKING_JOB_SUCCESS,
    payload: data,
  };
};

const actBookingJobFailed = (error) => {
  return {
    type: ActionType.BOOKING_JOB_FAILED,
    payload: error,
  };
};
