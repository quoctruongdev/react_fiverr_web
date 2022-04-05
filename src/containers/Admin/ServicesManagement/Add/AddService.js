import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  CardContent,
  CardHeader,
  Checkbox,
  CircularProgress,
  FormGroup,
  Grid,
  TextField,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Divider } from "antd";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { actFetchAddService } from "./modules/actions";

export default function AddService() {
  const loadingBtn = useSelector((state) => state.addServiceReducer.loading);
  const error = useSelector((state) => state.addServiceReducer.error);
  const errorMessage = error?.response?.data.message;

  const validationSchema = yup.object({
    name: yup
      .string("Enter service name")
      .min(10, "Name should be of maximum 10 characters length!")
      .max(100, "Name should be of maximum 50 characters length!")
      .required("Name is required"),
    rating: yup.string("Enter service rating").required("Rating is required"),
    price: yup.string("Enter service price").required("Price is required"),
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      rating: "",
      price: "",
      proServices: false,
      deliveryTime: false,
      localSellers: false,
      onlineSellers: false,
      type: null,
      subType: null,
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      dispatch(actFetchAddService(values));
      if (!errorMessage) {
        formik.handleReset();
      }
    },
  });
  const dispatch = useDispatch();

  const handleOnchangeCheckBox = (name) => (event) => {
    formik.setFieldValue(name, event.target.checked);
  };
  return (
    <>
      <form id="formAddService" onSubmit={formik.handleSubmit}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <TextField
                inputProps={{
                  style: {
                    height: "20px",
                  },
                }}
                fullWidth
                label="Name Service"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                variant="outlined"
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>

            <Grid item md={12} xs={12}>
              <TextField
                inputProps={{
                  style: {
                    height: "20px",
                  },
                }}
                fullWidth
                label="Price-USD"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                type={"number"}
                variant="outlined"
                error={formik.touched.price && Boolean(formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                type="number"
                fullWidth
                label="Rating"
                value={formik.values.rating}
                name="rating"
                variant="outlined"
                onChange={formik.handleChange}
                inputProps={{
                  style: {
                    height: "20px",
                  },
                  min: 0,
                  max: 10,
                }}
                error={formik.touched.rating && Boolean(formik.errors.rating)}
                helperText={formik.touched.rating && formik.errors.rating}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  onChange={handleOnchangeCheckBox("proServices")}
                  value={true}
                  control={
                    <Checkbox
                      sx={{
                        color: pink[800],
                        "&.Mui-checked": {
                          color: pink[600],
                        },
                      }}
                    />
                  }
                  label="ProServices"
                  labelPlacement="end"
                  name="proServices"
                />
                <FormControlLabel
                  onChange={handleOnchangeCheckBox("deliveryTime")}
                  value={true}
                  control={
                    <Checkbox
                      sx={{
                        color: pink[800],
                        "&.Mui-checked": {
                          color: pink[600],
                        },
                      }}
                    />
                  }
                  label="Delivery"
                  labelPlacement="end"
                />
                <FormControlLabel
                  onChange={handleOnchangeCheckBox("localSellers")}
                  value={true}
                  control={
                    <Checkbox
                      sx={{
                        color: pink[800],
                        "&.Mui-checked": {
                          color: pink[600],
                        },
                      }}
                    />
                  }
                  label="LocalSeller"
                  labelPlacement="end"
                />
                <FormControlLabel
                  onChange={handleOnchangeCheckBox("onlineSellers")}
                  value={true}
                  control={
                    <Checkbox
                      sx={{
                        color: pink[800],
                        "&.Mui-checked": {
                          color: pink[600],
                        },
                      }}
                    />
                  }
                  label="OnlineSeller"
                  labelPlacement="end"
                />
              </FormGroup>
            </Grid>
          </Grid>
        </CardContent>
        <CardContent>
          <Divider />
          <CardHeader
            sx={{ py: 0 }}
            action={
              <LoadingButton
                type="submit"
                color="secondary"
                loadingPosition="start"
                startIcon={<AddBoxSharpIcon />}
                variant="contained"
                loading={loadingBtn}
                loadingIndicator={
                  <CircularProgress color="success" size={16} />
                }
              >
                Add Service
              </LoadingButton>
            }
          />
        </CardContent>
      </form>
    </>
  );
}
