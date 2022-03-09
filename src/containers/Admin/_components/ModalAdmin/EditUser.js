import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";
import "./edit.css";
import { Box, CardHeader, Select, Grid, MenuItem } from "@mui/material";
import { CardContent, TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { actFetchAddUser } from "../../UserManagement/AddUser/modules/actions";
import { actFetchEditUser } from "../../UserManagement/UpdateUser/Edit/_modules/actions";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import { useFormik } from "formik";
import moment from "moment";
import { Divider } from "antd";

import LoadingButton from "@mui/lab/LoadingButton";
import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";

export default function EditUserNew({ dataGender }) {
  const loadingBtn = useSelector((state) => state.editUserReducer.loading);
  const data = useSelector((state) => state.editUserReducer.data);
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: data?.name,
      email: data?.email,
      phone: data?.phone,
      skill: data?.skill,
      certification: data?.certification,
      birthday: data?.birthday,
      gender: data?.gender,
      role: data?.role,
    },
    onSubmit: (values) => {
      console.log("value", values);
      let formData = new FormData();
      dispatch(actFetchEditUser(formData));
    },
  });

  console.log(formik.values);

  const handlechangeDatePicker = (valueDate) => {
    let birthday = moment(valueDate).format("YYYY-MM-DD");
    formik.setFieldValue("birthday", birthday);
  };

  return (
    <>
      <form autoComplete="off">
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
                required
                onChange={formik.handleChange}
                value={formik.values.name}
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
                required
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                type="Password"
                disabled
                fullWidth
                label="Password"
                name="password"
                // onChange={formik.handleChange}
                value={data?.password}
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
                  defaultValue={dataGender}
                  // value={formik.values.gender}
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
                {/* <Select
                  style={{ width: "100%" }}
                  variant="outlined"
                  // value={value}
                  // onChange={(e) => setValue(e.target.value)}
                  onChange={formik.handleChange}
                  // value={formik.values.gender}
                  value={data?.gender}
                  labelId="test-select-label"
                  label={"Label1233333"}
                  open
                >
                  <MenuItem key={1} value="true">
                    Male
                  </MenuItem>
                  <MenuItem key={2} value="false">
                    Female
                  </MenuItem>
                </Select> */}
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
                required
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
                // value={formik.values.role}
                value={data?.role}
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
                required
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
                Update User
              </LoadingButton>
            }
          />
        </CardContent>
      </form>
    </>
  );
}
