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
import { actFetchAddUser } from "../../UsersManagement/Add/modules/actions";

export default function AddUser(props) {
  const loadingBtn = useSelector((state) => state.addUserReducer.loading);
  const error = useSelector((state) => state.addUserReducer.error);
  const errorMessage = error?.response?.data.message;
  const dispatch = useDispatch();
  const validationSchema = yup.object({
    name: yup
      .string("Enter your name")
      .max(50, "Name should be of maximum 50 characters length!")
      .required("Name is required"),
    skill: yup
      .string("Enter your skill")
      .min(2, "Too Short!")
      .max(50, "Too Long!"),
    phone: yup
      .string("Enter your phone")
      .min(8, "Too Short!")
      .max(20, "Too Long!")
      .required("phone is required"),

    certification: yup
      .string("Enter your certification")
      .min(2, "Too Short!")
      .max(50, "Too Long!"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      skill: "",
      certification: "",
      birthday: moment(new Date()).format("YYYY-MM-DD"),
      gender: false,
      role: "CLIENT",
    },
    validationSchema: validationSchema,

    onSubmit: (values) => {
      dispatch(actFetchAddUser(values));
      if (!errorMessage) {
        formik.resetForm();
      }
    },
  });

  const handleOnChangeDate = (valueDate) => {
    const date = moment(valueDate).format("YYYY-MM-DD");
    formik.setFieldValue("birthday", date);
  };

  return (
    <>
      <form id="formAddUser" onSubmit={formik.handleSubmit}>
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
                id="name"
                name="name"
                onChange={formik.handleChange}
                variant="outlined"
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={formik.handleChange}
                type="number"
                variant="outlined"
                inputProps={{
                  style: {
                    height: "20px",
                  },
                }}
                value={formik.values.phone}
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
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                type="Password"
                fullWidth
                label="Password"
                name="password"
                onChange={formik.handleChange}
                variant="outlined"
                inputProps={{
                  style: {
                    height: "20px",
                  },
                }}
                value={formik.values.password}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
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
                  value={formik.values.birthday || new Date()}
                  minDate={new Date("1950-01-01")}
                  onChange={handleOnChangeDate}
                  renderInput={(params) => <TextField fullWidth {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl>
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
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  row
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
                variant="outlined"
                type="text"
                error={formik.touched.skill && Boolean(formik.errors.skill)}
                helperText={formik.touched.skill && formik.errors.skill}
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
                value={formik.values.role}
                onChange={formik.handleChange}
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
                error={
                  formik.touched.certification &&
                  Boolean(formik.errors.certification)
                }
                helperText={
                  formik.touched.certification && formik.errors.certification
                }
                variant="outlined"
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
                Create
              </LoadingButton>
            }
          />
        </CardContent>
      </form>
    </>
  );
}
