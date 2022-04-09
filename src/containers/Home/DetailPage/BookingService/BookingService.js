import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import ButtonStyle from "../../../../components/MaterialUI/ButtonStyle";
import { actShowModalPopup } from "../../../../components/ModalPopup/module/actions";
import CheckoutPage from "../../CheckoutPage/CheckoutPage";
import LoginForm from "../../_components/Login/LoginForm/LoginForm";
import "./style.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  selected: {
    "&.Mui-selected": { color: "#1dbf73" },
  },
}));

export default function BookingService(props) {
  const classes = useStyles();
  const { userLogin, data, id } = props;
  const loading = useSelector((state) => state.bookingServiceReducer.loading);
  const dispatch = useDispatch();

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <div className="sticky-outer-wrapper sidebar">
        <Box
          sx={{
            minWidth: 300,
            height: 500,
            border: "solid 1px #dadbdd",
            pb: 5,
          }}
        >
          <AppBar color="inherit" elevation={0} position="static">
            <Tabs
              sx={{
                bgcolor: "#fafafa",
                borderBottom: "solid 1px #dadbdd",
              }}
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
              TabIndicatorProps={{
                sx: {
                  bgcolor: "#1dbf73",
                },
              }}
            >
              <Tab
                className={classes.selected}
                sx={{
                  py: 2,
                  borderRight: "solid 1px #dadbdd",
                  fontWeight: 600,
                }}
                label="Basic"
                {...a11yProps(0)}
              />
              <Tab
                className={classes.selected}
                sx={{
                  py: 2,
                  borderRight: "solid 1px #dadbdd",
                  fontWeight: 600,
                }}
                label="Standard"
                {...a11yProps(1)}
              />

              <Tab
                className={classes.selected}
                sx={{
                  py: 2,
                  fontWeight: 600,
                }}
                label="Premium"
                {...a11yProps(2)}
              />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <form>
                <div className="content">
                  <div className="package-content">
                    <header>
                      <h3>
                        <b className="title">BASIC PACKAGE</b>
                        <div className="price-wrapper">
                          <span className="price">US${data?.price}</span>
                        </div>
                      </h3>
                      <p>
                        bug fixing in your Simple and dynamic PHP website OR
                        build 1 page web application
                      </p>
                    </header>
                    <article>
                      <div className="additional-info">
                        <div className="delivery-wrapper">
                          <span className=" delivery-icon">
                            <svg
                              width={16}
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
                              <path d="M9 4H7v5h5V7H9V4z" />
                            </svg>
                          </span>
                          <b className="delivery">2 Days Delivery</b>
                        </div>
                        <div className="revisions-wrapper">
                          <span className="  revisions-icon">
                            <svg
                              width={16}
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z" />
                              <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z" />
                            </svg>
                          </span>
                          <b className="revisions">1 Revision</b>
                        </div>
                      </div>
                      <ul className="features">
                        <li className="feature">
                          <span className="  feature-check-icon included">
                            <svg
                              width={16}
                              viewBox="0 0 11 9"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                            </svg>
                          </span>
                          1 Page
                        </li>
                        <li className="feature">
                          <span className="  feature-check-icon included">
                            <svg
                              width={16}
                              viewBox="0 0 11 9"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                            </svg>
                          </span>
                          Design Customization
                        </li>
                        <li className="feature">
                          <span className="  feature-check-icon">
                            <svg
                              width={16}
                              viewBox="0 0 11 9"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                            </svg>
                          </span>
                          Content Upload
                        </li>
                        <li className="feature">
                          <span className="  feature-check-icon included">
                            <svg
                              width={16}
                              viewBox="0 0 11 9"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                            </svg>
                          </span>
                          Responsive Design
                        </li>
                        <li className="feature">
                          <span className="  feature-check-icon included">
                            <svg
                              width={16}
                              viewBox="0 0 11 9"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                            </svg>
                          </span>
                          Include Source Code
                        </li>
                      </ul>
                    </article>
                  </div>
                  <footer className="tab-footer">
                    <ButtonStyle
                      onClick={() => {
                        userLogin &&
                          dispatch(
                            actShowModalPopup({
                              Component: <CheckoutPage cost={1} data={data} />,
                              open: true,
                            })
                          );
                        !userLogin &&
                          dispatch(
                            actShowModalPopup({
                              Component: <LoginForm />,
                              open: true,
                              sx: { p: 0 },
                            })
                          );
                      }}
                      sx={{
                        width: "100%",
                      }}
                    >
                      Continue (US${data?.price})
                    </ButtonStyle>
                  </footer>
                </div>
              </form>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <form>
                <div className="content">
                  <div className="package-content">
                    <header>
                      <h3>
                        <b className="title">SMALL PACKAGE</b>
                        <div className="price-wrapper">
                          <span className="price">US${data?.price * 3.5}</span>
                        </div>
                      </h3>
                      <p>
                        build 3 pages Web Application with Reports OR A Client
                        PHP Website
                      </p>
                    </header>
                    <article>
                      <div className="additional-info">
                        <div className="delivery-wrapper">
                          <span className="  delivery-icon">
                            <svg
                              width={16}
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
                              <path d="M9 4H7v5h5V7H9V4z" />
                            </svg>
                          </span>
                          <b className="delivery">7 Days Delivery</b>
                        </div>
                        <div className="revisions-wrapper">
                          <span className="  revisions-icon">
                            <svg
                              width={16}
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z" />
                              <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z" />
                            </svg>
                          </span>
                          <b className="revisions">4 Revisions</b>
                        </div>
                      </div>
                      <ul className="features">
                        <li className="feature">
                          <span className="  feature-check-icon included">
                            <svg
                              width={16}
                              viewBox="0 0 11 9"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                            </svg>
                          </span>
                          3 Pages
                        </li>
                        <li className="feature">
                          <span className="  feature-check-icon included">
                            <svg
                              width={16}
                              viewBox="0 0 11 9"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                            </svg>
                          </span>
                          Design Customization
                        </li>
                        <li className="feature">
                          <span className="  feature-check-icon">
                            <svg
                              width={16}
                              viewBox="0 0 11 9"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                            </svg>
                          </span>
                          Content Upload
                        </li>
                        <li className="feature">
                          <span className="  feature-check-icon included">
                            <svg
                              width={16}
                              viewBox="0 0 11 9"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                            </svg>
                          </span>
                          Responsive Design
                        </li>
                        <li className="feature">
                          <span className="  feature-check-icon included">
                            <svg
                              width={16}
                              viewBox="0 0 11 9"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                            </svg>
                          </span>
                          Include Source Code
                        </li>
                      </ul>
                    </article>
                  </div>
                  <footer className="tab-footer">
                    <footer className="tab-footer">
                      <ButtonStyle
                        onClick={() => {
                          userLogin &&
                            dispatch(
                              actShowModalPopup({
                                Component: (
                                  <CheckoutPage cost={3.5} data={data} />
                                ),
                                open: true,
                              })
                            );
                          !userLogin &&
                            dispatch(
                              actShowModalPopup({
                                Component: <LoginForm />,
                                open: true,
                                sx: { p: 0 },
                              })
                            );
                        }}
                      >
                        Continue (US${data?.price * 3.5})
                      </ButtonStyle>
                    </footer>
                  </footer>
                </div>
              </form>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <form>
                <div className="content  ">
                  <div className="package-content">
                    <header>
                      <h3>
                        <b className="title">BUSINESS PACKAGE</b>
                        <div className="price-wrapper">
                          <span className="price">US${data?.price * 5.5}</span>
                        </div>
                      </h3>
                      <p>
                        build 5 pages Web Application with Reports Or Client PHP
                        Website
                      </p>
                    </header>
                    <article>
                      <div className="additional-info">
                        <div className="delivery-wrapper">
                          <span className="delivery-icon">
                            <svg
                              width={16}
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
                              <path d="M9 4H7v5h5V7H9V4z" />
                            </svg>
                          </span>
                          <b className="delivery">14 Days Delivery</b>
                        </div>
                        <div className="revisions-wrapper">
                          <span className="revisions-icon">
                            <svg
                              width={16}
                              viewBox="0 0 16 16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z" />
                              <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z" />
                            </svg>
                          </span>
                          <b
                            className="revisions"
                            style={{
                              fontSize: 14,

                              wordSpacing: 1,
                            }}
                          >
                            Unlimited Revisions
                          </b>
                        </div>
                      </div>
                      <ul className="features">
                        <li className="feature">
                          <span className="feature-check-icon included">
                            <svg
                              width={16}
                              viewBox="0 0 11 9"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                            </svg>
                          </span>
                          5 Pages
                        </li>
                        <li className="feature">
                          <span className="  feature-check-icon included">
                            <svg
                              width={16}
                              viewBox="0 0 11 9"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                            </svg>
                          </span>
                          Design Customization
                        </li>
                        <li className="feature">
                          <span className="  feature-check-icon included">
                            <svg
                              width={16}
                              viewBox="0 0 11 9"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                            </svg>
                          </span>
                          Content Upload
                        </li>
                        <li className="feature">
                          <span className="  feature-check-icon included">
                            <svg
                              width={16}
                              viewBox="0 0 11 9"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{
                                fontSize: 14,
                                wordSpacing: 1,
                              }}
                            >
                              <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                            </svg>
                          </span>
                          Responsive Design
                        </li>
                        <li className="feature">
                          <span className="  feature-check-icon included">
                            <svg
                              width={16}
                              viewBox="0 0 11 9"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z" />
                            </svg>
                          </span>
                          Include Source Code
                        </li>
                      </ul>
                    </article>
                  </div>
                  <footer className="tab-footer">
                    <footer className="tab-footer">
                      <ButtonStyle
                        onClick={() => {
                          userLogin &&
                            dispatch(
                              actShowModalPopup({
                                Component: (
                                  <CheckoutPage cost={5.5} data={data} />
                                ),
                                open: true,
                              })
                            );
                          !userLogin &&
                            dispatch(
                              actShowModalPopup({
                                Component: <LoginForm />,
                                open: true,
                                sx: { p: 0 },
                              })
                            );
                        }}
                      >
                        Continue (US${data?.price * 5.5})
                      </ButtonStyle>
                    </footer>
                  </footer>
                </div>
              </form>
            </TabPanel>
          </SwipeableViews>
        </Box>
      </div>
    </>
  );
}
