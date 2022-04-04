import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LoadingButton from "@mui/lab/LoadingButton";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Divider } from "antd";
import { useFormik } from "formik";
import moment from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { actFetchUpdateUser } from "../Update/modules/actions";
import { actShowModalPopup } from "../../../../components/ModalPopup/module/actions";
import { actPopoverGlobal } from "../../../../components/Popover/module/actions";

export default function EditUser({ userItem, onClose, history }) {
  const loadingBtn = useSelector((state) => state.updateUserReducer.loading);
  // const data = useSelector((state) => state.updateUserReducer.data);
  const error = useSelector((state) => state.updateUserReducer.error);
  const errorMessage = error?.response?.data.message;
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    name: yup
      .string("Enter your name")
      .max(50, "Name should be of maximum 50 characters length!")
      .required("Name is required"),
    phone: yup
      .string("Enter your phone")
      .min(8, "Too Short!")
      .max(20, "Too Long!")
      .required("phone is required"),

    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: userItem?.name,
      email: userItem?.email,
      phone: userItem?.phone,
      skill: userItem?.skill,
      certification: userItem?.certification,
      birthday: userItem?.birthday,
      gender: userItem?.gender,
      role: userItem?.role,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(actFetchUpdateUser(userItem?._id, values, history));
      if (!errorMessage) {
        dispatch(actShowModalPopup({ open: false }));
        dispatch(actPopoverGlobal({ anchorEl: null }));
      }
    },
  });
  const handlechangeDatePicker = (valueDate) => {
    let birthday = moment(valueDate).format("YYYY-MM-DD");
    formik.setFieldValue("birthday", birthday);
  };
  return (
    <>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                inputProps={{
                  style: {
                    height: "20px",
                  },
                }}
                fullWidth
                label="Full name"
                name="name"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                InputLabelProps={{ shrink: true }}
                type="number"
                variant="outlined"
                inputProps={{
                  style: {
                    height: "20px",
                  },
                }}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                inputProps={{
                  style: {
                    height: "20px",
                  },
                }}
                fullWidth
                label="Email Address"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                type="Password"
                disabled
                fullWidth
                label="Password"
                name="password"
                value={userItem?.password}
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                inputProps={{
                  style: {
                    height: "20px",
                  },
                }}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <LocalizationProvider
                sx={{ width: "100%" }}
                dateAdapter={AdapterDateFns}
              >
                <DesktopDatePicker
                  label="Birthday"
                  name="birthday"
                  InputLabelProps={{ shrink: true }}
                  minDate={new Date("1950-01-01")}
                  onChange={handlechangeDatePicker}
                  value={moment(formik.values.birthday)}
                  renderInput={(params) => <TextField fullWidth {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl
                variant="outlined"
                margin={"1"}
                style={{ width: "100%", marginBottom: 32 }}
              >
                <FormLabel
                  sx={{
                    marginBottom: "0px",
                  }}
                  id="demo-controlled-radio-buttons-group"
                >
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="gender"
                  row
                  onChange={formik.handleChange}
                  defaultValue={userItem?.gender}
                >
                  <FormControlLabel
                    size="small"
                    value="false"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    size="small"
                    value="true"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                inputProps={{
                  style: {
                    height: "20px",
                  },
                }}
                fullWidth
                label="Skill"
                name="skill"
                onChange={formik.handleChange}
                value={formik.values.skill}
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                type="text"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                id="outlined-select-currency"
                fullWidth
                select
                label="Role"
                SelectProps={{
                  style: {
                    height: "50px",
                  },
                }}
                name="role"
                onChange={formik.handleChange}
                defaultValue={userItem?.role}
              >
                <MenuItem key="1" value="ADMIN">
                  Admin
                </MenuItem>
                <MenuItem key="2" value="CLIENT">
                  Client
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                inputProps={{
                  style: {
                    height: "20px",
                  },
                }}
                fullWidth
                label="Certification"
                name="certification"
                onChange={formik.handleChange}
                value={formik.values.certification}
                variant="outlined"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
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
                Save Change
              </LoadingButton>
            }
          />
        </CardContent>
      </form>
    </>
  );
}
