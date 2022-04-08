import { combineReducers } from "redux";
import homePageReducer from "../../containers/Home/HomePage/_modules/reducer";
import authReducer from "../../containers/Admin/AuthPage/modules/reducer";
import loginReducerHome from "../../containers/Home/_components/Login/modules/reducer";
import joinReducerHome from "../../containers/Home/_components/Join/modules/reducer";

import usersListReducer from "../../containers/Admin/UsersManagement/_modules/reducer";
import deleteUserReducer from "../../containers/Admin/UsersManagement/Delete/modules/reducer";
import addUserReducer from "../../containers/Admin/UsersManagement/Add/modules/reducer";
import updateUserReducer from "../../containers/Admin/UsersManagement/Update/modules/reducer";
import detailUserReducer from "../../containers/Admin/UsersManagement/Edit/_modules/reducer";
import searchUserReducer from "../../containers/Admin/UsersManagement/Search/modules/reducer";
import listCommentReducer from "../../containers/Home/DetailPage/Comment/modules/reducer";

import updateServiceReducer from "../../containers/Admin/ServicesManagement/Update/modules/reducer";
import searchServiceReducer from "../../containers/Admin/ServicesManagement/Search/modules/reducer";
import servicesListReducer from "../../containers/Admin/ServicesManagement/_module/reducer";
import deleteServiceReducer from "../../containers/Admin/ServicesManagement/Delete/modules/reducer";
import addServiceReducer from "../../containers/Admin/ServicesManagement/Add/modules/reducer";
import detailServiceReducer from "../../containers/Admin/ServicesManagement/Edit/_modules/reducer";
import jobUserBookingReducer from "../../containers/Home/ProfilePage/JobUserBooking/modules/reducer";
import bookingJobReducer from "../../containers/Home/DetailPage/BookingJob/modules/reducer";
import uploadImageServiceReducer from "../../containers/Admin/ServicesManagement/UploadImage/modules/reducer";

import listJobMainReducer from "../../containers/Home/ListTypeJobPage/modules/reducer";
import listJobPopularReducer from "../../containers/Home/HomePage/PopularJob/modules/reducer";
import listSubTypeReducer from "../../containers/Home/ListTypeJobPage/modules/_modulesSubtypeJob/reducer";

import categoriesMainReducer from "../../containers/Home/HomePage/MarketPlace/modules/reducer";
import categoriesSubTypeReducer from "../../containers/Home/CategoriesSubPage/modules/reducer";

//film
import addCarouselReducer from "../../containers/Home/HomePage/Carousel/modules/reducer";
import doneServiceBookingReducer from "../../containers/Home/ProfilePage/RemoveServiceUserBooking/modules/reducer";

//messageReducer
import messagesReducer from "../../components/Notification/module/reducer";
import modalReducer from "../../components/ModalPopup/module/reducer";
import popoverGlobalReducer from "../../components/Popover/module/reducer";

//My List Service
import myListServiceReducer from "../../containers/Home/_components/CardSevices/module/reducer";

const rootReducer = combineReducers({
  homePageReducer,

  authReducer,
  // authReducerHome,
  joinReducerHome,
  loginReducerHome,

  //////USER//////
  usersListReducer,
  deleteUserReducer,
  addUserReducer,
  updateUserReducer,
  detailUserReducer,
  // detailUserReducer,
  searchUserReducer,
  // uploadAvatarReducer,
  jobUserBookingReducer,
  bookingJobReducer,
  listCommentReducer,
  //////SerVices//////
  servicesListReducer,
  searchServiceReducer,
  deleteServiceReducer,
  addServiceReducer,
  detailServiceReducer,
  // searchJobReducer,
  categoriesMainReducer,
  categoriesSubTypeReducer,
  uploadImageServiceReducer,
  updateServiceReducer,
  doneServiceBookingReducer,

  // Jobmain
  listJobMainReducer,
  listJobPopularReducer,
  listSubTypeReducer,
  //////COMMENT//////

  // Home Page Film
  addCarouselReducer,

  //Message global
  messagesReducer,
  modalReducer,
  popoverGlobalReducer,

  myListServiceReducer,
});
export default rootReducer;
