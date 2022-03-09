import * as React from "react";
import { useEffect } from "react";
import "./nav2.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation, useHistory } from "react-router-dom";
import { actFetchEditUser } from "../../../Admin/UserManagement/UpdateUser/Edit/_modules/actions";

// MUI///
import { AppBar, Box, Toolbar, Divider, IconButton } from "@mui/material";
import { Tab, MenuItem, Tooltip, Menu, Avatar, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

import SwipeSideBar from "./SideBarNav";
import { actLogout } from "../Login/modules/actions";
import PopperPopup from "../../../../components/Material UI/Popover";
import PopoverComponent from "../../../../components/Popover/Popover";

const pages = [
  { name: " List Services", url: "/total-job" },
  { name: " Sign In", url: "/login" },
  { name: "Join", url: "/join" },
];
const pagesLogin = [
  { name: " List Services", url: "/total-job" },
  { name: " Message", url: "#" },
  // { name: "List", url: "#" },
];

export default function MainNavbar() {
  const data = useSelector((state) => state.editUserReducer.data);
  const dispatch = useDispatch();
  const history = useHistory();
  const [sideBar, setSideBar] = React.useState(false);
  const userLogin = JSON.parse(localStorage.getItem("UserClient"));
  const location = useLocation();

  const defaultMainNavbar = () => {
    if (location.pathname !== "/") {
      document.getElementById("MainNavbar").classList.remove("Navbar__header");
      document.getElementById("SearchNavbar").classList.remove("hidden_search");
      document
        .getElementById("CategoriesMenu")
        .classList.remove("hidden_subnav");
    }
  };
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setSideBar(open);
  };

  useEffect(() => {
    defaultMainNavbar();
    userLogin?.user?._id && dispatch(actFetchEditUser(userLogin?.user?._id));
  }, []);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const renderListNav = (listPage) => {
    return listPage.map((page, index) => (
      <Tab
        className="listItem"
        disableTouchRipple
        sx={{
          display: { xs: "none", sm: "none", md: "none", lg: "flex" },
          textTransform: "none",
          fontSize: 16,
          fontWeight: 600,
          color: "#62646a",
          opacity: 1,
          ":hover": {
            color: "#1dbf73",
            textDecoration: "none",
          },
          minWidth: 0,
        }}
        to={`${page?.url}`}
        component={page?.url === "#" ? PopperPopup : NavLink}
        activeClassName="active_navbar"
        textAlign="center"
        label={page?.name}
        key={index}
        exact
      />
    ));
  };
  const logo = (
    <a href="/" className="site-logo ">
      <svg
        width="89"
        height="27"
        viewBox="0 0 89 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
        </g>
        <g fill="#1dbf73">
          <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
        </g>
      </svg>
    </a>
  );

  return (
    <>
      <AppBar
        id="MainNavbar"
        position="unset"
        color="inherit"
        sx={{
          paddingLeft: "26px",
          paddingRight: "26px",
          boxShadow: "none",
          backgroundColor: "unset",
          height: "71px",
          borderBottom: "1px solid #e4e5e7",
          justifyContent: "center",
        }}
        className="Navbar__header"
      >
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <Box
              sx={{
                mr: 2,
                flexGrow: { xs: 1, sm: 0 },
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                className="button__toggle"
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer(true)}
                color="inherit"
                maxWidth={"50px"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={23}
                  height={19}
                  viewBox="0 0 23 19"
                >
                  <rect y={16} width={23} height={3} rx="1.5" fill="#555" />
                  <rect width={23} height={3} rx="1.5" fill="#555" />
                  <rect y={8} width={23} height={3} rx="1.5" fill="#555" />
                </svg>
              </IconButton>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { xs: "none", sm: "flex", md: "flex" },
              }}
              overflow="visible"
              className="logo__navbar"
            >
              {logo}
            </Typography>

            <Box
              sx={{
                borderBottomRightRadius: { sm: "3px", md: "0" },
                borderTopRightRadius: { sm: "3px", md: "0" },
                width: { md: "374px", sm: "250px" },
                display: { xs: "none", sm: "flex", md: "flex" },
              }}
              overflow={"visible"}
            >
              <div id="SearchNavbar" className="header__search hidden_search">
                <div className="search-bar-package search_bar-package">
                  <form className>
                    <span
                      className="search-bar-icon"
                      style={{ width: 16, height: 16 }}
                    >
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z" />
                      </svg>
                    </span>
                    <input type="search" placeholder="Find Services" />
                    <Box
                      sx={{
                        display: { sm: "none", md: "flex" },
                      }}
                    >
                      <button className="btn_search">Search</button>
                    </Box>
                  </form>
                </div>
              </div>
            </Box>

            <Typography
              id="color__Logo"
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none", sm: "none" },
              }}
            >
              {logo}
            </Typography>
            <Box
              id="listItemNav"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "flex", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {userLogin ? renderListNav(pagesLogin) : renderListNav(pages)}
            </Box>
            {userLogin && (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <PopoverComponent styles={32} data={data} />
                  </IconButton>
                </Tooltip>
                <Menu
                  anchorEl={anchorElUser}
                  id="menu-appbar"
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                  onClick={handleCloseUserMenu}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem
                    sx={{
                      color: "#74767e",
                      ":hover": {
                        color: "#19a463",
                        textDecoration: "none",
                      },
                    }}
                    to={`/profile/${data?.name}`}
                    component={Link}
                  >
                    <Avatar src={data?.avatar} /> Profile
                  </MenuItem>
                  <MenuItem>
                    <Avatar /> My account
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      dispatch(actLogout(history));
                    }}
                  >
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <SwipeSideBar toggleDrawer={toggleDrawer} sideBar={sideBar} />
    </>
  );
}
