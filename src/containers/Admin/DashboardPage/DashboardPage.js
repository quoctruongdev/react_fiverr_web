import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Logout from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Settings from "@mui/icons-material/Settings";
import {
  Avatar,
  ListItem,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, NavLink, Route, useHistory } from "react-router-dom";
import BadgeStyle from "../../../components/Badge/BadgeComponent";
import { logo } from "../../../components/Logo/logo";
import useWindowSize from "../../../Hook/useWindowSize";
import { actLogout } from "../../Admin/AuthPage/modules/actions";
import ServicesManagement from "../ServicesManagement/ServicesManagement";
import UsersManagement from "./../UsersManagement/UserManagement";
import { mainListItems } from "./listItems";
import { Link } from "react-router-dom";
const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

export default function DashboardPage() {
  const userAdmin = JSON.parse(localStorage.getItem("UserAdmin")).user;
  console.log(userAdmin);
  const history = useHistory();
  const dispatch = useDispatch();
  // const classes = useStyles();

  const size = useWindowSize();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const handleResizeSidebar = () => {
    if (size.width < 892) {
      return setOpen(false);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    const ResizeSidebar = setTimeout(() => {
      handleResizeSidebar();
    }, 0);

    return () => {
      clearTimeout(ResizeSidebar);
    };
  }, [size.width]);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={mdTheme}>
        <Paper sx={{ display: "flex" }}>
          <CssBaseline />

          <AppBar color="inherit" position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: "24px",
                justifyContent: "space-between",
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: "36px",
                  ...(open && { display: "none" }),
                  bgcolor: "#fff",
                }}
              >
                <MenuIcon />
              </IconButton>

              <ListItem
                color="inherit"
                disableRipple

                // sx={{ flexGrow: 1 }}
              >
                {logo}
              </ListItem>
              <Typography align="right" sx={{ flexGrow: 1 }}>
                <IconButton>
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <BadgeStyle data={userAdmin} styles={32} />
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
                        to={`/profile/${userAdmin?.name}`}
                        component={Link}
                      >
                        <Avatar src={userAdmin?.avatar} /> Profile
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
                </IconButton>
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            open={open}
            PaperProps={{
              sx: {
                backgroundColor: "#253053",
                border: "none",
              },
            }}
          >
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
                backgroundColor: "#253053",
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon color="#ffff" />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
              {mainListItems}
              <Divider sx={{ my: 1 }} />
            </List>
          </Drawer>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
              mt: 2,
            }}
          >
            <Toolbar />
            <Route exact path="/dashboard/users" component={UsersManagement} />
            <Route
              exact
              path="/dashboard/services"
              component={ServicesManagement}
            />
          </Box>
        </Paper>
      </ThemeProvider>
    </BrowserRouter>
  );
}
