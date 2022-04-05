import {
  Button,
  Paper,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ButtonStyle from "../../../components/MaterialUI/ButtonStyle/index";
import { actFetchBookingJob } from "../DetailPage/BookingJob/modules/actions";
import OrderDetail from "./OrderDetail";
import PaymentForm from "./PaymentForm";

const steps = ["Order Detail", "Confirm & Pay"];

function getStepContent(step, data, cost) {
  switch (step) {
    case 0:
      return <OrderDetail cost={cost} data={data} />;
    case 1:
      return <PaymentForm />;

    default:
      throw new Error("Unknown step");
  }
}

function CheckoutPage({ data, cost }) {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <>
        <main>
          <Paper elevation={0}>
            <Typography
              sx={{
                paddingBottom: "15px",
              }}
              component="h1"
              variant="h4"
              align="center"
            >
              Checkout
            </Typography>
            <Stepper
              sx={{
                paddingBottom: "10px",
              }}
              activeStep={activeStep}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <>
              {activeStep === steps.length ? (
                <>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order code is #{data?._id}. We have emailed your order
                    confirmation, and will send you an update when your order
                    has shipped.
                  </Typography>
                </>
              ) : (
                <>
                  {getStepContent(activeStep, data, cost)}
                  <Stack direction="row">
                    {activeStep !== 0 && (
                      <Button onClick={handleBack}>Back</Button>
                    )}
                    <ButtonStyle
                      onClick={() => {
                        handleNext();
                        activeStep === steps.length - 1 &&
                          dispatch(actFetchBookingJob(data?._id));
                      }}
                    >
                      {activeStep === steps.length - 1 ? "Place order" : "Next"}
                    </ButtonStyle>
                  </Stack>
                </>
              )}
            </>
          </Paper>
        </main>
      </>
    </>
  );
}

export default CheckoutPage;
