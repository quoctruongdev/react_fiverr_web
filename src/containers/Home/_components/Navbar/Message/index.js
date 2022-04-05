import * as React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MessageIcon from "@mui/icons-material/Message";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SettingsIcon from "@mui/icons-material/Settings";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { NavLink } from "react-router-dom";
import { IconButton, ListItemIcon, Stack } from "@mui/material";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import "./style.css";
import { makeStyles } from "@mui/styles";

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
        <Box sx={{ p: 3, color: "62646a" }}>
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

export default function Message() {
  const classes = useStyles();
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
          TabIndicatorProps={{
            style: { backgroundColor: "#1dbf73", bottom: " 5px" },
          }}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            className={classes.selected}
            sx={{
              textTransform: "capitalize",
              minHeight: 0,
              fontWeight: 600,
              borderBottom: "1px solid #e4e5e7",
            }}
            icon={<NotificationsIcon />}
            iconPosition="start"
            label="Notifications (0)"
            {...a11yProps(0)}
          />
          <Tab
            className={classes.selected}
            sx={{
              textTransform: "capitalize",
              minHeight: 0,
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
      >
        <TabPanel value={value} index={0}>
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
        <TabPanel value={value} index={1}>
          <Stack
            justifyContent="center"
            alignItems="center"
            direction="column"
            textAlign="center"
            height="350px"
          >
            <NotificationsOffIcon
              color="disabled"
              sx={{
                fontSize: 60,
              }}
            />
            <Typography>No Notifications</Typography>
            <Typography>
              ​Browse our amazing catalog of Gigs or offer your talent on
              Fiverr.
            </Typography>
          </Stack>
        </TabPanel>
      </SwipeableViews>
      <BottomNavigation
        className="Message__Footer"
        sx={{
          height: 32,
          borderTop: "1px solid #e4e5e7",
          position: "absolute",
          width: "100%",
          bottom: 0,
          justifyContent: "space-between",
          color: "#000000",
        }}
        showLabels
        value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      >
        <ListItemIcon>
          <IconButton disableRipple>
            <VolumeUpIcon fontSize="small" />
          </IconButton>
          <IconButton disableRipple>
            <SettingsIcon fontSize="small" />
          </IconButton>
        </ListItemIcon>
        <BottomNavigationAction
          disableRipple
          sx={{
            color: "#74767e!important",
            fontSize: 12,
          }}
          label={value === 1 ? "See All in Inbox" : ""}
        />
      </BottomNavigation>
    </Box>
  );
}
