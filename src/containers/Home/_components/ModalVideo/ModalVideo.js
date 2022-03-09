import * as React from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
// web.cjs is required for IE11 support

import { useSpring, animated, useTransition } from "react-spring";

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

const style = {
  position: "absolute",
  display: "block",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "480px",
  width: "70%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 0,
  borderRadius: 1,
};

export default function ModalVideo({ open, onClose, data }) {
  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        open={open}
        onClose={onClose}
      >
        <Fade in={open}>
          <Box sx={style}>
            <video
              className="orca-video"
              style={{ width: "100%" }}
              autoPlay
              controls
              poster
              preload="metadata"
              crossOrigin="anonymous"
            >
              <source src={data?.video} type="video/mp4" />
              <track
                label="EN"
                srcLang="en-US"
                src={data?.engSub}
                default
                kind="subtitles"
              />
            </video>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
