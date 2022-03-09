import { Layout, Menu, Button } from "antd";
import React from "react";
import { useState } from "react";

import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import MovieIcon from "@mui/icons-material/Movie";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import "./style.css";

import { PoweroffOutlined } from "@ant-design/icons";
import { NavLink, BrowserRouter, Route, Redirect } from "react-router-dom";
import DashboardPage from "../../DashboardPage/DashboardPage";
import UserManagement from "../../UserManagement/UserManagement";
import { actLogout } from "../../AuthPage/modules/actions";
// import MenuManagement from "../../JobManagement/JobManagement";
// import ServicesManagement from "../../CommentManagement/CommentManagement";
// import AddUser from "../../UserManagement/AddUser/AddUser";
import UpdateUser from "../../UserManagement/UpdateUser/UpdateUser";
import JobManagement from "../../JobManagement/JobManagement";
import CommentManagement from "../../CommentManagement/CommentManagement";
import UpdateJob from "../../JobManagement/UpdateJob/UpdateUser";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "../../../../components/Loader/Loader";
import PopoverComponent from "../../../../components/Popover/Popover";
import { fontSize } from "@mui/system";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function SideBar(props) {
  const [state, setState] = useState({
    collapsed: false,
  });
  let history = useHistory();
  const dispatch = useDispatch();
  const [logoutButton, setlogoutButton] = useState({ loadings: [] });

  const enterLoading = (index) => {
    setlogoutButton(({ loadings }) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return {
        loadings: newLoadings,
      };
    });
  };

  const onCollapse = (collapsed) => {
    setState({ collapsed });
  };
  const { collapsed } = state;

  const contents = (
    <ul
      className="nav-popover-items-content"
      style={{ width: "auto", padding: "12px 16px" }}
    >
      {/* <li>
        <NavLink to={`/profile/${data?.name}`} className="nav-link" exact>
          Profile
        </NavLink>
      </li> */}
      <li>
        <a href="#/" className="nav-link">
          Dashboard
        </a>
      </li>
      <li>
        <a href="#/" className="nav-link">
          Manage Requests
        </a>
      </li>
      <li>
        <a href="#/" className="nav-link">
          Post a Request
        </a>
      </li>
      <li className="divider" />
      <li>
        <a href="#/" className="nav-link">
          Become a Seller
        </a>
      </li>
      <li>
        <a href="#/" className="nav-link">
          Settings
        </a>
      </li>
      <li>
        <a href="#/" target="_blank" className="nav-link">
          Help &amp; support
        </a>
      </li>
      <li className="divider" />
      <li>
        <NavLink
          onClick={() => {
            dispatch(actLogout(history));
          }}
          to="/"
          className="js-log-out nav-link"
        >
          Logout
        </NavLink>
      </li>
    </ul>
  );
  const data = JSON.parse(localStorage.getItem("UserAdmin")).user;

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          xs={{ span: 7 }}
        >
          <div className="logo m-4 flex justify-center ">
            <a href="/" className="site-logo ">
              <svg
                width="75"
                height="27"
                viewBox="0 0 89 27"
                fill="#ffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="##ffff">
                  <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
                </g>
                <g fill="#ffff">
                  <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
                </g>
              </svg>
            </a>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={props.path}>
            <Menu.Item key="1" icon={<AccountCircleIcon />}>
              <NavLink activeClassName="active" to="/dashboard/users">
                USER
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<AccountCircleIcon />}>
              <NavLink activeClassName="active" to="/dashboard/jobs">
                JOB
              </NavLink>
            </Menu.Item>
            <Menu.Item key="3" icon={<AccountCircleIcon />}>
              <NavLink activeClassName="active" to="/dashboard/comments">
                COMMENT
              </NavLink>
            </Menu.Item>

            {/* <SubMenu key="sub2" icon={<LocalMoviesIcon />} title="MENU">
              <Menu.Item key="5" icon={<MovieIcon />}>
                <NavLink to="/dashboard/menus">List Menu</NavLink>
              </Menu.Item>
              <Menu.Item key="6" icon={<MovieFilterIcon />}>
                <NavLink to="/dashboard/add-menu">Add Menu</NavLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<LocalMoviesIcon />} title="SERVICE">
              <Menu.Item key="8" icon={<MovieIcon />}>
                <NavLink to="/dashboard/menus">List Services</NavLink>
              </Menu.Item>
              <Menu.Item key="9" icon={<MovieFilterIcon />}>
                <NavLink to="/dashboard/add-menu">Add Service</NavLink>
              </Menu.Item>
            </SubMenu> */}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background  "
            style={{ padding: 0, backgroundColor: "rgb(51, 53, 69)" }}
          >
            <div className="flex p-2 justify-end">
              <div className="flex  mx-4 ">
                <div className="flex flex-col items-center mr-2 ">
                  <PopoverComponent data={data}>{contents}</PopoverComponent>
                  {/* <div className="flex -space-x-4">
                    <img
                      style={{ borderColor: "rgb(51, 53, 69" }}
                      className="w-12 h-12  rounded-full "
                      src="https://source.unsplash.com/41x41/?portrait"
                      alt=""
                    />
                    <span className="flex items-center justify-center w-5 h-5 font-semibold   text-xs  rounded-full bg-red-500  text-white     ">
                      {Math.floor(Math.random() * (100 - 0) - 0)}
                    </span>
                  </div> */}
                </div>

                {/* <div className="cursor-pointer text-red-500 hover:text-red-700 flex items-center">
                  <Button
                    type="primary"
                    icon={<PoweroffOutlined />}
                    loading={logoutButton.loadings[1]}
                    onClick={() => enterLoading(1)}
                  >
                    Log out
                  </Button>
                </div> */}
              </div>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Route exact path="/dashboard" component={DashboardPage} />
            <Route exact path="/dashboard/users" component={UserManagement} />
            <Route
              exact
              path="/dashboard/update-user/:id"
              component={UpdateUser}
            />
            <Route
              exact
              path="/dashboard/update-job/:id"
              component={UpdateJob}
            />
            {/* <Route exact path="/dashboard/add-user" component={AddUser} /> */}
            <Route exact path="/dashboard/jobs" component={JobManagement} />
            <Route
              exact
              path="/dashboard/comments"
              component={CommentManagement}
            />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Created by Quoc Truong
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}
