import * as React from "react";
import { useState } from "react";
import { Tab } from "@mui/material";
import Message from "../../../containers/Home/_components/Navbar/Message";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

export default function PopoverPopup(props) {
  return (
    <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (
        <div>
          <Tab
            className="listItem"
            disableRipple
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
              ":active": { color: "#1dbf73" },
              ":focus-visible": { color: "#1dbf73" },
              minWidth: 0,
            }}
            label="Message"
            variant="contained"
            {...bindTrigger(popupState)}
          />
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Message />
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
