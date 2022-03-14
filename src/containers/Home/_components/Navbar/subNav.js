import * as React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuList, Paper, MenuItem } from "@mui/material";
import { Popper, Tabs, Tab, Box } from "@mui/material";
import "./subnav.css";

export default function SubNavbar() {
  const data = useSelector((state) => state.categoriesMainReducer.data);
  const [state, setState] = useState({
    value: null,
    open: false,
    anchorEl: null,
    dataSubType: null,
  });
  const handlePopoverOpen = (event, index, item) => {
    setState({
      open: true,
      anchorEl: event?.currentTarget,
      value: index,
      dataSub: item,
    });
  };
  const handlePopoverClose = () => {
    setState({
      open: false,
      anchorEl: null,
      value: null,
    });
  };

  return (
    <div onMouseLeave={handlePopoverClose}>
      <Box
        id="CategoriesMenu"
        className="categories hidden_subnav"
        sx={{
          bgcolor: "#fff",
          borderBottom: "1px solid #e4e5e7",
        }}
        height={40}
      >
        <Tabs
          onChange={(event) => {
            handlePopoverOpen(event, state.value, state.dataSubType);
          }}
          value={state.value}
          TabIndicatorProps={{
            style: {
              background: "#1dbf73",
              heigt: 3,
              bottom: 5,
            },
          }}
          aria-haspopup="true"
          variant="scrollable"
          TabScrollButtonProps={{
            disableTouchRipple: "true",
            width: "20px",
          }}
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          sx={{
            // padding: 0,
            // maxWidth: 1400,
            margin: "auto",
            alignItems: "center",
            minHeight: "0px",
            height: "40px",
            padding: "0 10px",
          }}
        >
          {data?.map((item, index) => {
            return (
              <>
                <Tab
                  key={index}
                  sx={{
                    textTransform: "none",

                    fontSize: 16,
                    color: "#62646a",
                    ":hover": {
                      color: "#7a7d85",
                      textDecoration: "none",
                    },
                    padding: 0,
                    minWidth: 0,
                    margin: "0 10px",
                    ":first-child": {
                      marginLeft: "0px",
                    },
                    ":last-child": {
                      marginRight: "0px",
                    },
                  }}
                  data-key={index}
                  disableTouchRipple={true}
                  aria-owns={
                    state.open ? `mouse-over-popper${index}` : undefined
                  }
                  label={item?.name}
                  onMouseEnter={(event) => {
                    handlePopoverOpen(event, index, item);
                  }}
                  aria-haspopup="true"
                  component={Link}
                  to={`/list-type-job/${item?._id}`}
                />
              </>
            );
          })}
        </Tabs>
      </Box>

      <Popper
        open={state.open}
        anchorEl={state.anchorEl}
        id={`mouse-over-popper${state?.value}`}
        placement="bottom-start"
        style={{ zIndex: 1000 }}
      >
        <Paper
          sx={{
            borderRadius: "2px",
            border: "1px solid #e4e5e7",
            maxWidth: 1100,
            padding: "10px 30px",
            marginTop: "-5px",
            display: { xs: "none", lg: "block" },
            maxWidth: 900,
          }}
        >
          <MenuList
            sx={{
              columnCount:
                Math.floor(state.dataSub?.subTypeJobs?.length / 10) + 1,
              columnGap: 10,
            }}
          >
            {state.dataSub?.subTypeJobs &&
              state.dataSub?.subTypeJobs?.map((subItem, index) => (
                <MenuItem
                  to={`/categories/${state.dataSub?.name}/${state.dataSub?._id}/${subItem?.name}/${subItem?._id}`}
                  sx={{
                    color: "#7a7d85",
                    ":hover": { color: "#63666f" },
                  }}
                  onClick={handlePopoverClose}
                  key={index}
                  component={Link}
                >
                  {subItem?.name}
                </MenuItem>
              ))}
          </MenuList>
        </Paper>
      </Popper>
    </div>
  );
}
