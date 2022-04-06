import Logout from "@mui/icons-material/Logout";
// MUI///
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Toolbar,
  Tooltip,
} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";
import BadgeStyle from "../../../../components/Badge/BadgeComponent";
import { logo } from "../../../../components/Logo/logo";
import PopperPopup from "../../../../components/MaterialUI/Popover";
import { actFetchDetailUser } from "../../../Admin/UsersManagement/Edit/_modules/actions";
import { actLogout } from "../Login/modules/actions";
import "./navbar.css";
import SwipeSideBar from "./SideNav/SideBarNav";

export default function MainNavbar() {
  const data = useSelector((state) => state.detailUserReducer.data);
  const loading = useSelector((state) => state.loginReducerHome.loading);

  const pages = [
    { name: " Services", url: "/total-service" },
    { name: " Sign In", url: "/login" },
    { name: "Join", url: "/join" },
  ];
  const pagesLogin = [
    { name: "Services", url: "/total-service" },
    { name: " Messages", url: "#" },
    { name: "Lists", url: `/my-list/${data?.name}` },
  ];

  const dispatch = useDispatch();
  const history = useHistory();
  const [sideBar, setSideBar] = useState(false);
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
    userLogin?.user?._id && dispatch(actFetchDetailUser(userLogin?.user?._id));
  }, [loading]);

  const [anchorElUser, setAnchorElUser] = useState(null);

  //Search Services
  const [dataSearch, setDataSearch] = useState({
    keysearch: "",
  });
  const handleOnSubmit = () => {
    if (dataSearch.keysearch !== "") {
      return (
        <NavLink to={`/search-service/${dataSearch?.keysearch}`}>
          <button className="btn_search">Search</button>
        </NavLink>
      );
    } else {
      return (
        <button className="btn_search">
          <span>Search</span>
        </button>
      );
    }
  };
  const handleOnChange = (event) => {
    event.preventDefault();
    setDataSearch({
      keysearch: event.target.value,
    });
  };

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
          display: {
            xs: page?.name === "Join" ? "flex" : "none",
            sm:
              page?.name === "Join" || page?.name === "Lists" ? "flex" : "none",
            md:
              page?.name === "Join" || page?.name === "Lists" ? "flex" : "none",
            lg: "flex",
          },
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

  return (
    <>
      <AppBar
        id="MainNavbar"
        position="unset"
        color="inherit"
        sx={{
          paddingX: { xs: "15px", sm: "30px", md: "50px" },
          boxShadow: "none",
          backgroundColor: "unset",
          height: "71px",
          borderBottom: "1px solid #e4e5e7",
          justifyContent: "center",
          width: "100%",
        }}
        className="Navbar__header"
      >
        <Container disableGutters maxWidth={false}>
          <Toolbar disableGutters>
            <Box
              sx={{
                mr: 2,
                flexGrow: { xs: 1, sm: 0 },
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                disableRipple
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
                display: { xs: "flex", sm: "flex", md: "flex" },
              }}
              className="logo__navbar"
            >
              {logo("#404145")}
            </Typography>

            <Box
              sx={{
                borderBottomRightRadius: { sm: "3px", md: "0" },
                borderTopRightRadius: { sm: "3px", md: "0" },
                width: { md: "374px", sm: "250px" },
                display: { xs: "none", sm: "flex", md: "flex" },
              }}
            >
              <div id="SearchNavbar" className="header__search hidden_search">
                <div className="search-bar-package search_bar-package">
                  <form onSubmit={handleOnSubmit}>
                    <span
                      className="search-bar-icon"
                      style={{ width: 16, height: 16 }}
                    >
                      <svg
                        width={16}
                        height={16}
                        xw
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z" />
                      </svg>
                    </span>
                    <input
                      onChange={handleOnChange}
                      type="search"
                      name="keysearch"
                      placeholder="Find Services"
                      required
                    />
                    <Box
                      sx={{
                        display: { sm: "none", md: "flex" },
                      }}
                    >
                      {handleOnSubmit()}
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
                flexGrow: { sx: 0, sm: 1, md: 1 },
                display: { sx: "flex", sm: "flex", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {userLogin ? renderListNav(pagesLogin) : renderListNav(pages)}
            </Box>
            {userLogin && (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0, pr: { xs: "10px", md: "inherit" } }}
                  >
                    <BadgeStyle
                      styles={32}
                      data={userLogin?.user}
                      loading={loading}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  disableScrollLock
                  anchorEl={anchorElUser}
                  id="menu-appbar"
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                  onClick={handleCloseUserMenu}
                  PaperProps={{
                    elevation: 0,
                    sx: {
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
                    to={`/profile/${userLogin?.user?.name}`}
                    component={Link}
                  >
                    <Avatar src={userLogin?.user?.avatar} /> Profile
                  </MenuItem>
                  <Divider />
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
