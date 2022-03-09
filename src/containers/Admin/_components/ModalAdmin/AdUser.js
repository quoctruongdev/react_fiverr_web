import React, { useState } from "react";
import { CardHeader, Grid, MenuItem } from "@mui/material";
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
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import moment from "moment";
import LoadingButton from "@mui/lab/LoadingButton";
import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
import { Divider } from "antd";

export default function AdUser() {
  const loadingBtn = useSelector((state) => state.addUserReducer.loading);
  // const [loadingBtn, setLoadingBtn] = useState(false);
  // function handleClickLoadingBtn() {
  //   setLoadingBtn(true);
  // }
  const dispatch = useDispatch();
  const [dataAddUser, setdataAddUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    skill: "",
    certification: "",
    birthday: null,
    gender: false,
    role: "CLIENT",
  });

  const handleOnChangeDate = (valueDate) => {
    setdataAddUser({
      ...dataAddUser,
      birthday: moment(valueDate).format("YYYY-MM-DD"),
    });
    console.log(dataAddUser);
  };
  const handleAddUser = (e) => {
    e.preventDefault();
    dispatch(actFetchAddUser(dataAddUser));
  };
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setdataAddUser({
      ...dataAddUser,
      [name]: value,
    });
  };

  return (
    <>
      <form id="formAddUser" onSubmit={handleAddUser} autoComplete="off">
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
                onChange={handleOnchange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleOnchange}
                type="number"
                //   value={values.phone}
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
                onChange={handleOnchange}
                required
                //   value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                type="Password"
                fullWidth
                label="Password"
                name="password"
                onChange={handleOnchange}
                //   value={values.phone}
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
                  value={dataAddUser.birthday || new Date()}
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
                  value={dataAddUser?.gender}
                  onChange={handleOnchange}
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
                onChange={handleOnchange}
                required
                //   value={values.country}
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
                value={dataAddUser?.role}
                onChange={handleOnchange}
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
                onChange={handleOnchange}
                required
                variant="outlined"
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
                Add User
              </LoadingButton>
            }
          />
        </CardContent>
      </form>
    </>
  );
}
