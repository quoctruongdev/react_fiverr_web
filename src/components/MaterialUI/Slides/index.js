import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowLeft";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowRight";
import IconButton from "@mui/material/IconButton";
import StepIcon from "@mui/material/StepIcon";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { makeStyles } from "@mui/styles";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

export default function SilesMui() {
  const theme = useTheme();
  const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      flexGrow: 1,
      top: "150px!important",
      backgroundColor: "transparent !important",
    },

    button: { color: "#fff!important" },

    dot: {
      backgroundColor: "#fff !important",
      transform: "scale(0.8)",
    },

    dots: {
      position: "absolute!important",
      bottom: "-190%",
      left: "45%",
    },
    dotActive: {
      backgroundColor: "#fff",
      transform: "scale(1.3)",
      transition: ".3s",
    },
  });

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    if (activeStep === maxSteps - 1) {
      return setActiveStep(0);
    }
    return setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      setActiveStep(maxSteps);
    }
    return setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 300, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        {/* <Typography>{images[activeStep].label}</Typography> */}
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: "block",
                  maxWidth: 400,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="top"
        activeStep={activeStep}
        classes={{
          root: classes.root,
          dot: classes.dot,
          dotActive: classes.dotActive,
          dots: classes.dots,
          button: classes.button,
        }}
        nextButton={
          <IconButton
            sx={{
              backgroundColor: "#fff",
            }}
            disableRipple
            classes={{
              icon: classes.icon,
            }}
            size="small"
            onClick={handleNext}
            // disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </IconButton>
        }
        backButton={
          <IconButton
            sx={{
              backgroundColor: "#fff",
            }}
            disableRipple
            // classes={{ disabled: classes.disabled }}
            size="small"
            onClick={handleBack}
            // disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight color="#fff" />
            ) : (
              <KeyboardArrowLeft />
            )}
          </IconButton>
        }
      />
    </Box>
  );
}
