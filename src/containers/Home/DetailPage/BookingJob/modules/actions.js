import * as ActionType from "./constants";
import { api } from "../../../../../utils/apiutils";
import { successNotice } from "../../../_components/Alert";

// ************Booking Job************
export const actFetchBookingJob = (id) => {
  return (dispatch) => {
    dispatch(actBookingJobRequest());
    api
      .patch(`jobs/booking/${id}`)
      .then((result) => {
        dispatch(actBookingJobSuccess(result.data));
        successNotice("Booking service success.", "0vh");
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
