import * as React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import MessageIcon from "@mui/icons-material/Message";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SettingsIcon from "@mui/icons-material/Settings";
// import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { NavLink } from "react-router-dom";
import { IconButton, ListItemIcon } from "@mui/material";

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

export default function Message() {
  // const [valueFooter, setValueFooter] = React.useState(0);

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: 400,
        height: 475,
        border: "1px solid #e4e5e7",
        position: "relative",
        borderRadius: "2px",
        padding: 0,
      }}
    >
      <AppBar
        sx={{
          bgcolor: "background.paper",
          color: "#62646a",
          boxShadow: "none",
        }}
        position="static"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="unset"
          // TabIndicatorProps={{ style: { backgroundColor: "#1dbf73" } }}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          // sx={{
          //   borderBottom: "1px solid #e4e5e7",
          // }}
        >
          <Tab
            sx={{
              textTransform: "capitalize",
              minHeight: 0,
              ":focus": {
                color: "#1dbf73",
              },
              fontWeight: 600,
              borderBottom: "1px solid #e4e5e7",
            }}
            icon={<NotificationsIcon />}
            iconPosition="start"
            label="Notifications (0)"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              textTransform: "capitalize",
              minHeight: 0,
              ":focus": {
                color: "#1dbf73",
              },
              fontWeight: 600,
              borderBottom: "1px solid #e4e5e7",
              borderLeft: "1px solid #e4e5e7",
            }}
            icon={<MessageIcon />}
            iconPosition="start"
            label="Inbox (0)"
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
        color="red"
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className="scroll-wrapper">
            <ul className="items-list">
              <li className="drawer-item read">
                <a href="#/" className="main-action">
                  <div className="image-wrapper">
                    <i className="notification-icon bell read" />
                  </div>
                  <div className="item-content-wrapper">
                    <p style={{ marginLeft: "10px" }} className="content">
                      Your profile image was removed since it might not be
                      original.
                      <strong>Learn more</strong>
                    </p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}></TabPanel>
      </SwipeableViews>
      <BottomNavigation
        sx={{
          height: 32,
          borderTop: "1px solid #e4e5e7",
          position: "absolute",
          width: "100%",
          bottom: 0,
          justifyContent: "space-between",
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <ListItemIcon>
          <IconButton>
            <VolumeUpIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <SettingsIcon fontSize="small" />
          </IconButton>
        </ListItemIcon>

        <BottomNavigationAction
          LinkComponent={NavLink}
          label="See All in Inbox"
        />
      </BottomNavigation>
    </Box>
  );
}
