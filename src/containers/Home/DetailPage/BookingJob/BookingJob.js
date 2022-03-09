import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../../../components/Loader/Loader";
import { actFetchBookingJob } from "./modules/actions";
import "./style.css";

export default function BookingJob(props) {
  const data = props.data;
  const id = data?._id;

  useEffect(() => {}, []);
  const loading = useSelector((state) => state.bookingJobReducer.loading);

  const dispatch = useDispatch();

  if (loading) return <Loader />;
  return (
    <div className="col-md-5">
      <div className="sticky-outer-wrapper sidebar">
        <div
          className="inner-sticky"
          style={{
            transform: "translate3d(0px, 0px, 0px)",
            fontSize: 16,
            wordSpacing: 1,
            width: "414.547px",
          }}
        >
          <aside className="sidebar-content">
            <div className="packages-tabs triple" role="tablist">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#tabs-1"
                    role="tab"
                  >
                    Basic
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tabs-2"
                    role="tab"
                  >
                    Standard
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tabs-3"
                    role="tab"
                  >
                    Premium
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="tabs-1">
                  <form className="content">
                    <div
                      className="content IND_tp10_panel"
                      id="IND_tp10_panel0"
                    >
                      <div className="package-content">
                        <header>
                          <h3>
                            <b
                              className="title"
                              style={{
                                fontSize: 16,
                                wordSpacing: 1,
                              }}
                            >
                              BASIC PACKAGE
                            </b>
                            <div className="price-wrapper">
                              <span className="price">US${data?.price}</span>
                            </div>
                          </h3>
                          <p>
                            bug fixing in your Simple and dynamic PHP website OR
                            build 1 page web application
                          </p>
                        </header>
                        <article style={{ fontSize: 14, wordSpacing: 1 }}>
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
                                  style={{
                                    fontSize: 14,
                                    wordSpacing: 1,
                                  }}
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
                                  style={{
                                    fontSize: 14,
                                    wordSpacing: 1,
                                  }}
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
                                  style={{
                                    fontSize: 14,
                                    wordSpacing: 1,
                                  }}
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
                        <button
                          onClick={() => {
                            dispatch(actFetchBookingJob(id));
                          }}
                          className=" btn co-white bg-co-green-700 "
                        >
                          Continue
                          <span
                            style={{
                              fontSize: 16,
                              wordSpacing: 1,
                            }}
                          >
                            (US${data?.price})
                          </span>
                        </button>
                      </footer>
                    </div>
                  </form>
                </div>
                <div className="tab-pane" id="tabs-2">
                  <form
                    className="content "
                    // action="/checkout/customize/196513559"
                  >
                    <div
                      className="content   IND_tp10_panel"
                      id="IND_tp10_panel1"
                    >
                      <div className="package-content">
                        <header>
                          <h3>
                            <b
                              className="title"
                              style={{
                                fontSize: 16,
                                wordSpacing: 1,
                              }}
                            >
                              SMALL PACKAGE
                            </b>
                            <div className="price-wrapper">
                              <span className="price">
                                US${data?.price * 4.5}
                              </span>
                            </div>
                          </h3>
                          <p>
                            build 3 pages Web Application with Reports OR A
                            Client PHP Website
                          </p>
                        </header>
                        <article style={{ fontSize: 14, wordSpacing: 1 }}>
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
                                  style={{
                                    fontSize: 14,
                                    wordSpacing: 1,
                                  }}
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
                                  style={{
                                    fontSize: 14,
                                    wordSpacing: 1,
                                  }}
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
                                  style={{
                                    fontSize: 14,
                                    wordSpacing: 1,
                                  }}
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
                        <button className=" btn co-white bg-co-green-700">
                          Continue
                          <span
                            style={{
                              fontSize: 16,
                              wordSpacing: 1,
                            }}
                          >
                            (US${data?.price * 4.5})
                          </span>
                        </button>
                      </footer>
                    </div>
                  </form>
                </div>
                <div className="tab-pane" id="tabs-3">
                  <form className="content ">
                    <div className="content  ">
                      <div className="package-content">
                        <header>
                          <h3>
                            <b
                              className="title"
                              style={{
                                fontSize: 16,
                                wordSpacing: 1,
                              }}
                            >
                              BUSINESS PACKAGE
                            </b>
                            <div
                              className="price-wrapper"
                              style={{
                                fontSize: 28,
                                wordSpacing: 1,
                              }}
                            >
                              <span className="price">
                                US${data?.price * 7.5}
                              </span>
                            </div>
                          </h3>
                          <p
                            style={{
                              fontSize: 14,
                              wordSpacing: 1,
                            }}
                          >
                            build 5 pages Web Application with Reports Or Client
                            PHP Website
                          </p>
                        </header>
                        <article style={{ fontSize: 14, wordSpacing: 1 }}>
                          <div
                            className="additional-info"
                            style={{
                              fontSize: 14,

                              wordSpacing: 1,
                            }}
                          >
                            <div className="delivery-wrapper">
                              <span className="delivery-icon">
                                <svg
                                  width={16}
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{
                                    fontSize: 14,

                                    wordSpacing: 1,
                                  }}
                                >
                                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
                                  <path d="M9 4H7v5h5V7H9V4z" />
                                </svg>
                              </span>
                              <b
                                className="delivery"
                                style={{
                                  fontSize: 14,
                                  wordSpacing: 1,
                                }}
                              >
                                14 Days Delivery
                              </b>
                            </div>
                            <div className="revisions-wrapper">
                              <span className="revisions-icon">
                                <svg
                                  width={16}
                                  viewBox="0 0 16 16"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{
                                    fontSize: 14,

                                    wordSpacing: 1,
                                  }}
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
                          <ul
                            className="features"
                            style={{
                              fontSize: 14,
                              wordSpacing: 1,
                            }}
                          >
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
                              5 Pages
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
                              Design Customization
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
                                  style={{
                                    fontSize: 14,

                                    wordSpacing: 1,
                                  }}
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
                        <button className=" btn co-white bg-co-green-700">
                          Continue
                          <span
                            style={{
                              fontSize: 16,
                              wordSpacing: 1,
                            }}
                          >
                            (US${data?.price * 7.5})
                          </span>
                        </button>
                      </footer>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
