import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import {
  Box,
  Card,
  CardMedia,
  Divider,
  Grid,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import * as React from "react";
import { useEffect, useRef, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import ModalVideo from "../_components/ModalVideo/ModalVideo";
import { actFetchSubTypeJob } from "./modules/_modulesSubtypeJob/actions";
import "./style.css";

export default function ListTypeJobPage(props) {
  const defaultImage = "/asset/image_defaut.png";
  const imageBg = `/asset/img/mainCategories/${Math.floor(
    Math.random() * 10
  )}.jpeg`;
  const id = props.match.params.id;
  const data2 = useSelector((state) => state.listSubTypeReducer.data);
  const loading2 = useSelector((state) => state.listSubTypeReducer.loading);
  const dataVideo = useSelector(
    (state) => state.categoriesSubTypeReducer.dataVideo
  );
  const dispatch = useDispatch();
  document.title = `${data2?.name ?? ""} | Fiverr`;
  useEffect(() => {
    dispatch(actFetchSubTypeJob(id));
  }, [id]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderSubTypeJob = () => {
    return data2?.subTypeJobs?.map((job, index) => {
      return (
        <>
          <NavLink
            style={{
              color: "#7a7d85",
            }}
            key={`100${index}`}
            to={`/categories/${data2?.name}/${id}/${job?.name}/${job?._id}`}
          >
            <ListItem
              sx={{
                px: 0,
                py: 2,
                justifyContent: "space-between",
              }}
            >
              {job?.name}
              <KeyboardArrowRightOutlinedIcon
                sx={{
                  display: { sm: "none", md: "none" },
                }}
                color="disabled"
              />
            </ListItem>
          </NavLink>
          <Divider
            sx={{
              display: { xs: "block", sm: "none", md: "none" },
            }}
          />
        </>
      );
    });
  };

  const renderImageSubTypeJob = () => {
    return data2?.subTypeJobs?.map((item, index) => (
      <Grid key={index} item sm={4} md={4}>
        <NavLink
          to={`/categories/${data2?.name}/${id}/${item?.name}/${item?._id}`}
        >
          <Card elevation={0}>
            <CardMedia
              loading="lazy"
              component="img"
              image={!item?.image ? defaultImage : item?.image}
              alt={item?.name}
              srcSet={!item?.image ? defaultImage : item?.image}
            />
          </Card>
        </NavLink>
        <ImageListItemBar title={item.name} position="below" />
      </Grid>
    ));
  };
  if (loading2) return <Loader />;

  return (
    <>
      <Box className="header__title">
        <Box
          sx={{
            backgroundImage: {
              xs: `url(${imageBg})`,
              md: "none",
              sm: "none",
            },
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: { xs: 220, sm: "auto", md: "auto" },
          }}
          className="inner__header"
        >
          <Typography
            sx={{
              fontSize: { xs: 24, sm: 32, md: 36 },
              color: { xs: "#fff", sm: "#222325", md: "#222325" },
            }}
            fontWeight={600}
          >
            {data2?.name}
          </Typography>
          <ListItemText
            sx={{
              flex: "0!important",
            }}
            primaryTypographyProps={{
              textAlign: "center",
              color: { xs: "#fff", sm: "#62646a", md: "#62646a" },
            }}
            primary="A single place, millions of creative talents"
          />
          <Box
            sx={{
              display: { xs: "none", sm: "block", md: "block" },
            }}
            className="explanation-video"
          >
            <button onClick={handleOpen} className=" icon_play">
              <span
                className=" play-icon"
                style={{ width: 14, height: 14, marginRight: "4px" }}
              >
                <svg
                  fill="#4a73e8"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.00017 0.333374C6.48384 0.333374 5.00157 0.783016 3.74079 1.62544C2.48002 2.46786 1.49736 3.66523 0.91709 5.06613C0.336818 6.46703 0.184992 8.00855 0.480812 9.49573C0.776632 10.9829 1.50681 12.349 2.57901 13.4212C3.65122 14.4934 5.01729 15.2236 6.50447 15.5194C7.99166 15.8152 9.53317 15.6634 10.9341 15.0831C12.335 14.5028 13.5323 13.5202 14.3748 12.2594C15.2172 10.9986 15.6668 9.51636 15.6668 8.00004C15.6646 5.96739 14.8562 4.01863 13.4189 2.58132C11.9816 1.14402 10.0328 0.33558 8.00017 0.333374V0.333374ZM11.5025 8.28737L5.83583 11.6207C5.7852 11.6505 5.7276 11.6664 5.66885 11.6667C5.61011 11.6671 5.55232 11.6519 5.50133 11.6227C5.45034 11.5936 5.40796 11.5514 5.37849 11.5006C5.34902 11.4498 5.3335 11.3921 5.3335 11.3334V4.66671C5.3335 4.60796 5.34902 4.55026 5.37849 4.49945C5.40796 4.44864 5.45034 4.40651 5.50133 4.37735C5.55232 4.34818 5.61011 4.33301 5.66885 4.33336C5.7276 4.33372 5.7852 4.34959 5.83583 4.37937L11.5025 7.71271C11.5525 7.74214 11.594 7.78413 11.6229 7.83453C11.6517 7.88493 11.6669 7.94198 11.6669 8.00004C11.6669 8.0581 11.6517 8.11515 11.6229 8.16555C11.594 8.21595 11.5525 8.25794 11.5025 8.28737V8.28737Z" />
                </svg>
              </span>
              How Fiverr Works
            </button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          px: { xs: 3, sm: 4.5, md: 6.5 },
          pb: { xs: 0, sm: 6, md: 8 },
        }}
      >
        <Grid container spacing={5}>
          <Grid
            sx={{
              display: { xs: "block", sm: "none", md: "block" },
            }}
            item
            md={3}
            xs={12}
          >
            <ListItem sx={{ px: 0 }}>
              <Typography
                sx={{
                  display: { xs: "none", md: "block" },
                }}
                color="#222325"
                fontWeight={600}
              >
                {data2?.name}
              </Typography>
            </ListItem>
            {renderSubTypeJob()}
          </Grid>
          <Grid
            sx={{
              display: { xs: "none", sm: "flex", md: "flex" },
              marginTop: 0,
            }}
            spacing={3}
            item
            container
            md={9}
          >
            {renderImageSubTypeJob()}
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#f5f5f5",
          py: 3,
        }}
        className="footer__wrapper"
      >
        <span className="footer__item">
          <h3>
            Your <b>Terms</b>
          </h3>
          Whatever you need to simplify your to do list, no matter your budget.
        </span>
        <span className="footer__item">
          <h3>
            Your <b>Timeline</b>
          </h3>
          Find services based on your goals and deadlines, it’s that simple.
        </span>
        <span className="footer__item">
          <h3>
            Your <b>Safety</b>
          </h3>
          Your payment is always secure, Fiverr is built to protect your peace
          of mind.
        </span>
      </Box>
      <ModalVideo data={dataVideo} open={open} onClose={handleClose} />
    </>
  );
}
