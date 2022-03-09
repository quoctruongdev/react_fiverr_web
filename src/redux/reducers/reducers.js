import { combineReducers } from "redux";
import homePageReducer from "../../containers/Home/HomePage/_modules/reducer";
import authReducer from "../../containers/Admin/AuthPage/modules/reducer";
import loginReducerHome from "../../containers/Home/_components/Login/modules/reducer";
import joinReducerHome from "../../containers/Home/_components/Join/modules/reducer";

import listUserReducer from "../../containers/Admin/UserManagement/_modules/reducer";
// import deleteUserReducer from "../../containers/Admin/UserManagement/DeleteUser/modules/reducer";
import addUserReducer from "../../containers/Admin/UserManagement/AddUser/modules/reducer";
import updateUserReducer from "../../containers/Admin/UserManagement/UpdateUser/modules/reducer";
import editUserReducer from "../../containers/Admin/UserManagement/UpdateUser/Edit/_modules/reducer";
// import uploadAvatarReducer from "../../containers/Home/ProfilePage/UploadAvatar/modules/reducer";
import detailUserReducer from "../../containers/Home/DetailPage/Overview/_JobSlider/_modules/reducer";
import listCommentReducer from "../../containers/Home/DetailPage/Comment/modules/reducer";

import editJobReducer from "../../containers/Admin/JobManagement/UpdateJob/Edit/_modules/reducer";
import listJobReducer from "../../containers/Admin/JobManagement/_module/reducer";
import deleteJobReducer from "../../containers/Admin/JobManagement/DeleteJob/modules/reducer";
import addJobReducer from "../../containers/Admin/JobManagement/AddUser/modules/reducer";
import detailJobReducer from "../../containers/Home/DetailPage/_modules/reducer";
import jobUserBookingReducer from "../../containers/Home/ProfilePage/JobUserBooking/modules/reducer";
import bookingJobReducer from "../../containers/Home/DetailPage/BookingJob/modules/reducer";
// import authReducerHome from "../../containers/Home/_components/Login/modules/reducer";
import searchJobReducer from "../../containers/Home/SearchJobPage/_module/reducer";

import listJobMainReducer from "../../containers/Home/ListTypeJobPage/modules/reducer";
import listJobPopularReducer from "../../containers/Home/HomePage/PopularJob/modules/reducer";
import listSubTypeReducer from "../../containers/Home/ListTypeJobPage/modules/_modulesSubtypeJob/reducer";

import categoriesMainReducer from "../../containers/Home/HomePage/MarketPlace/modules/reducer";
import categoriesSubTypeReducer from "../../containers/Home/CategoriesSubPage/modules/reducer";

const rootReducer = combineReducers({
  homePageReducer,

  authReducer,
  // authReducerHome,
  joinReducerHome,
  loginReducerHome,

  //////USER//////
  listUserReducer,
  // deleteUserReducer,
  addUserReducer,
  updateUserReducer,
  editUserReducer,
  detailUserReducer,
  // uploadAvatarReducer,
  jobUserBookingReducer,
  bookingJobReducer,
  listCommentReducer,
  //////JOB//////
  editJobReducer,
  listJobReducer,
  deleteJobReducer,
  addJobReducer,
  detailJobReducer,
  searchJobReducer,

  categoriesMainReducer,
  categoriesSubTypeReducer,

  // Jobmain
  listJobMainReducer,
  // JobPopular
  listJobPopularReducer,

  listSubTypeReducer,

  //////COMMENT//////
});
export default rootReducer;
