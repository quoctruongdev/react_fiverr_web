import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Box, Divider } from "@mui/material";
import SidebarCollapse from "../../SidebarCollapse/SidebarCollapse";

export default function SwipeSideBar({ sideBar, toggleDrawer }) {
  const list = () => (
    <Box
      sx={{
        flexGrow: 1,
        width: 270,
      }}
    >
      <SidebarCollapse />
      <Divider />
    </Box>
  );
  return (
    <div>
      <SwipeableDrawer
        open={sideBar}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
