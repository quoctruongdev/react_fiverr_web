import {
  Typography,
  Stepper,
  Paper,
  Step,
  Button,
  StepLabel,
} from "@mui/material";
import AddressForm from "./AddressForm";
import { useDispatch } from "react-redux";
import PaymentForm from "./PaymentForm";
import OrderDetail from "./OrderDetail";
import React, { useState } from "react";
import Success from "./Success";
import { actFetchBookingJob } from "../DetailPage/BookingJob/modules/actions";

const steps = ["Order Detail", "Confirm & Pay", , "Review your order"];

function getStepContent(step, data) {
  switch (step) {
    case 0:
      return <OrderDetail data={data} />;
    case 1:
      return <PaymentForm />;
    // case 2:
    //   return <AddressForm />;
    case 2:
      return <Success />;

    default:
      throw new Error("Unknown step");
  }
}

function CheckoutPage({ data }) {
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
                    Your order number is #2001539. We have emailed your order
                    confirmation, and will send you an update when your order
                    has shipped.
                  </Typography>
                </>
              ) : (
                <>
                  {getStepContent(activeStep, data)}
                  <div>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack}>Back</Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        handleNext();
                        dispatch(actFetchBookingJob(data?._id));
                      }}
                    >
                      {activeStep === steps.length - 1 ? "Place order" : "Next"}
                    </Button>
                  </div>
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
