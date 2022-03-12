import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";
import Grow from "@mui/material/Grow";
import MuiAlert from "@mui/material/Alert";
import { IconButton, Typography } from "@mui/material";
import { ConfirmationNumber } from "@mui/icons-material";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SlideTransition(props) {
  return <Slide {...props} direction="dow" />;
}

function GrowTransition(props) {
  return <Grow {...props} />;
}

const action = (
  <Button color="secondary" size="small">
    Accept
  </Button>
);

export default function SnackbarMessage() {
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <div>
      <Button onClick={handleClick(GrowTransition)}>Grow Transition</Button>
      <Button onClick={handleClick(Fade)}>Fade Transition</Button>
      <Button onClick={handleClick(SlideTransition)}>Slide Transition</Button>
      {/* <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        key={state.Transition.name}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Stack spacing={2} sx={{ maxWidth: 600 }}>
          <SnackbarContent
            action={action}
            message={
              "I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate."
            }
          />
        </Stack>
      </Snackbar> */}
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        key={state.Transition.name}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          <Typography>
            I love candy. I love cookiesI love candy. I love cookiesI love
            candy. I love cookies
          </Typography>
        </Alert>
      </Snackbar>
    </div>
  );
}
