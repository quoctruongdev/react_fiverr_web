import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
import LoadingButton from "@mui/lab/LoadingButton";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  CircularProgress,
  FormGroup,
  Grid,
  Paper,
  Skeleton,
  TextField,
} from "@mui/material";
import { Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Divider, Form } from "antd";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { actFetchUpdateService } from "../Update/modules/actions";
import { styled } from "@mui/material/styles";
import { actFetchUploadImageService } from "../UploadImage/modules/actions";
import Progress from "../../_components/Progress";
import { useEffect } from "react";
import Loader from "../../../../components/Loader/Loader";

const Input = styled("input")({
  display: "none",
});

export default function EditService({ dataEdit }) {
  const noImg = "/asset/noImage.png";
  const data = useSelector((state) => state.detailServiceReducer.data);
  const loading = useSelector((state) => state.updateServiceReducer?.loading);
  const loadings = useSelector(
    (state) => state.uploadImageServiceReducer.loading
  );
  const [imageService, setImageService] = useState("");
  const dispatch = useDispatch();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: data?.name,
      rating: data?.rating,
      price: data?.price,
      proServices: data?.proServices,
      deliveryTime: data?.deliveryTime,
      localSellers: data?.localSellers,
      onlineSellers: data?.onlineSellers,
      image: data?.image,
      type: data?.type,
      subType: data?.subType,
    },
    onSubmit: (values) => {
      dispatch(actFetchUpdateService(data?._id, values));
    },
  });

  const handleOnchangeCheckBox = (name) => (event) => {
    formik.setFieldValue(name, event.target.checked);
  };

  console.log(formik.values);
  const handleChangeImage = async (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    let reader = new FileReader();
    const formData = new FormData();
    if (file) {
      await formik.setFieldValue("job", file);
      await formData.append("job", file);
      reader.readAsDataURL(file);
      dispatch(actFetchUploadImageService(data?._id, formData));
      reader.onload = (e) => {
        setImageService(e.target.result);
      };
    }
  };
  return (
    <>
      {loading ? (
        <div style={{ minWidth: "700px" }}>
          <Progress />
        </div>
      ) : (
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
                  value={formik.values.name}
                  required
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
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
                  value={formik.values.price}
                  InputLabelProps={{ shrink: true }}
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
                  InputLabelProps={{ shrink: true }}
                  onChange={formik.handleChange}
                  value={formik.values.rating}
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
                    value={true}
                    control={
                      <Checkbox
                        onChange={handleOnchangeCheckBox("proServices")}
                        defaultChecked={dataEdit?.pro}
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
                    control={
                      <Checkbox
                        onChange={handleOnchangeCheckBox("deliveryTime")}
                        defaultChecked={dataEdit?.delivery}
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
                    control={
                      <Checkbox
                        onChange={handleOnchangeCheckBox("localSellers")}
                        defaultChecked={dataEdit?.local}
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
                    control={
                      <Checkbox
                        onChange={handleOnchangeCheckBox("onlineSellers")}
                        defaultChecked={dataEdit?.online}
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
              <Grid item md={12} xs={12}>
                <Typography paddingBottom={1}>
                  Upload Image (image.png)
                </Typography>

                <Box>
                  <label htmlFor="icon-button-file">
                    <Input
                      accept="image/png"
                      id="icon-button-file"
                      type="file"
                      onChange={handleChangeImage}
                    />
                    <Card
                      raised
                      elevation={1}
                      sx={{
                        ":hover": {
                          opacity: 0.5,
                          overflow: "hidden",
                          position: "relative",
                        },
                      }}
                    >
                      <CardActionArea
                        sx={{
                          overflow: "hidden",
                          width: "350px",
                          height: "230px",
                        }}
                        component="span"
                      >
                        <CardMedia
                          component="img"
                          image={
                            imageService === "" ? data?.image : imageService
                          }
                          alt={data?.name}
                          srcSet={
                            imageService === ""
                              ? data?.image
                              : imageService || noImg
                          }
                        />
                        {imageService === "" && data?.image === undefined && (
                          <CardMedia
                            component="img"
                            image={noImg}
                            srcSet={noImg}
                          />
                        )}
                        <AddPhotoAlternateIcon
                          sx={{
                            fontSize: 40,
                            position: "absolute",
                            right: 0,
                            top: 0,
                            color: "#fff",
                            zIndex: 909,
                            cursor: "pointer",
                          }}
                        />
                      </CardActionArea>
                    </Card>
                  </label>
                </Box>
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
                  loading={loading ? loading : loadings}
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
      )}
    </>
  );
}
