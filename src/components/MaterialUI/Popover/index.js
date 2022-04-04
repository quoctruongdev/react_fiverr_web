import { Tab } from "@mui/material";
import Popover from "@mui/material/Popover";
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";
import * as React from "react";
import Message from "../../../containers/Home/_components/Navbar/Message";

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
            disableScrollLock
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
