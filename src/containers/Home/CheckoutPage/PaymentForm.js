import React from "react";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import moment from "moment";

function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6">Payment method</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            variant="standard"
            label="Name on card"
            fullWidth
            defaultValue="Test PayMent"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            variant="standard"
            defaultValue="9074 0567 3667 7685"
            label="Card number"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            variant="standard"
            label="Expiry date"
            fullWidth
            defaultValue={moment(new Date()).format("DD/MM/YYYY")}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            variant="standard"
            helperText="Last three digits on signature strip"
            defaultValue="034"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PaymentForm;
