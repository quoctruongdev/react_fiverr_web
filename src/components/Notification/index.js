import MuiAlert from "@mui/material/Alert";
import Grow from "@mui/material/Grow";
// import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import * as React from "react";
import { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actSetMessage } from "./module/actions";

// function SlideTransition(props) {
//   return <Slide {...props} direction="up" />;
// }
function GrowTransition(props) {
  return <Grow {...props} />;
}
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MessageNotification() {
  const data = useSelector((state) => state.messagesReducer.data);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(actSetMessage(""));
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={data?.text}
        autoHideDuration={data?.action ? 30000 : 4000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        TransitionComponent={GrowTransition}
        onClose={handleClose}
      >
        {data?.text && (
          <Alert
            action={data?.action}
            onClose={handleClose}
            severity={data?.severity}
            sx={{ width: "100%" }}
          >
            {data?.text}
          </Alert>
        )}
      </Snackbar>
    </Stack>
  );
}
