// import * as React from "react";
// import Box from "@mui/material/Box";
// import Popper from "@mui/material/Popper";
// import Fade from "@mui/material/Fade";
// import Paper from "@mui/material/Paper";
// import { ClickAwayListener } from "@mui/material";
// import { actPopperGlobal } from "./module/actions";
// import { useSelector, useDispatch } from "react-redux";

// export default function PopperGlobal({ children }) {
//   const data = useSelector((state) => state.popperGlobalReducer.data);
//   const dispatch = useDispatch();
//   const open = Boolean(data?.anchorEl);
//   const id = open ? "fade-popper" : undefined;
//   const handleClose = () => {
//     dispatch(actPopperGlobal());
//   };

//   return (
//     <Box sx={{ width: 500 }}>
//       <Popper
//         open={open}
//         id={id}
//         anchorEl={data?.anchorEl}
//         placement="left"
//         transition
//         props
//       >
//         {({ TransitionProps }) => (
//           <ClickAwayListener onClickAway={handleClose}>
//             <Fade {...TransitionProps} timeout={350}>
//               <Paper
//
//                 }}
//               >
//                 {data?.Component}
//               </Paper>
//             </Fade>
//           </ClickAwayListener>
//         )}
//       </Popper>
//     </Box>
//   );
// }

import * as React from "react";
import Popover from "@mui/material/Popover";
import { useSelector, useDispatch } from "react-redux";
import { actPopoverGlobal } from "./module/actions";

export default function PopoverGlobal() {
  const data = useSelector((state) => state.popoverGlobalReducer.data);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(actPopoverGlobal(null));
  };

  const open = Boolean(data?.anchorEl);
  const id = open ? "global-popover" : undefined;

  return (
    <div>
      {open && (
        <Popover
          id={id}
          open={open}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 0.8,
              "&:before": {
                content: '""',
                display: "flex",
                position: "absolute",
                top: "45%",
                right: -5,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: -10,
              },
            },
          }}
          anchorEl={data?.anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "center",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "right",
          }}
        >
          {data?.Component}
        </Popover>
      )}
    </div>
  );
}
