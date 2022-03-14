import React, { useState } from "react";
import {
  Box,
  CardHeader,
  Checkbox,
  FormGroup,
  Grid,
  MenuItem,
} from "@mui/material";
import { CardContent, TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { actFetchAddUser } from "../../UsersManagement/Add/modules/actions";
import { actFetchAddService } from "./modules/actions";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import moment from "moment";
import LoadingButton from "@mui/lab/LoadingButton";
import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
import { Divider } from "antd";
import { useFormik } from "formik";
import { pink } from "@mui/material/colors";

export default function AddService() {
  const loadingBtn = useSelector((state) => state.addUserReducer.loading);
  // const [loadingBtn, setLoadingBtn] = useState(false);
  // function handleClickLoadingBtn() {
  //   setLoadingBtn(true);
  // }
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: null,
      rating: null,
      price: null,
      proServices: false,
      deliveryTime: false,
      localSellers: false,
      onlineSellers: false,
      type: null,
      subType: null,
    },
    onSubmit: (values) => {
      dispatch(actFetchAddService(values));
    },
  });
  const dispatch = useDispatch();
  const handleOnchangeCheckBox = (name) => (event) => {
    formik.setFieldValue(name, event.target.checked);
  };
  return (
    <>
      <form
        id="formAddService"
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
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
                onChange={formik.handleChange}
                required
                variant="outlined"
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
                required
                onChange={formik.handleChange}
                type={"number"}
                variant="outlined"
              />
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                type="number"
                fullWidth
                label="Rating"
                name="rating"
                variant="outlined"
                onChange={formik.handleChange}
                inputProps={{
                  style: {
                    height: "20px",
                  },
                }}
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
                // onClick={handleClickLoadingBtn}
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
                Add User
              </LoadingButton>
            }
          />
        </CardContent>
      </form>
    </>
  );
}
