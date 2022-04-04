import { Box, Grid } from "@mui/material";
import { Carousel } from "antd";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import ModalVideo from "../../_components/ModalVideo/ModalVideo";
import "./style.css";

const styleArrow = {
  background: " #fff",
  borderRadius: "50%",
  display: "flex!important",
  alignItem: "center",
  width: "48px",
  height: "48px",
  zIndex: "50",
  // top: "50%",
  position: "absolute",
  boxShadow: "0 2px 5px 0 rgb(0 0 0 / 15%)",
  textAlign: "center",
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        ...styleArrow,
        // right: "-1.8%!important",
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        ...styleArrow,
        // left: "-1.8%!important",
      }}
      onClick={onClick}
    />
  );
};

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
};

export default function Testimonial() {
  const dataTestimonials = useSelector(
    (state) => state.homePageReducer.dataTestimonials
  );
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dataVideo = useRef({});
  const handleDataVideo = (dataItem) => {
    dataVideo.current = dataItem;
  };
  const renderItemTestimonal = () => {
    return dataTestimonials?.map((item, index) => {
      return (
        <Grid
          container
          sx={{
            display: "flex!important",
          }}
          key={index}
        >
          <Grid
            sx={{
              pl: 3.5,
              pr: { md: 0, lg: 3.5, sm: 3.5, xs: 3.5 },
            }}
            pb={4}
            item
            xs={12}
            sm={12}
            md={5}
            lg={5}
          >
            <div
              className="picture__wrapper"
              role="button"
              aria-label="Play video"
              onClick={() => {
                handleOpen();
                handleDataVideo(item);
              }}
            >
              <img alt="Videoteaserimage" src={item?.urlImage} loading="lazy" />
            </div>
          </Grid>
          <Grid px={3.5} item xs={12} sm={12} lg={7} md={7}>
            <div className="text-content">
              <h5>
                {item?.name}
                <span className="testimonial-logo">
                  <img alt="Company logo" src={item?.logo} loading="lazy" />
                </span>
              </h5>
              <blockquote className="font-domaine">
                <i>{item?.description}</i>
              </blockquote>
            </div>
          </Grid>
        </Grid>
      );
    });
  };

  return (
    <Box
      className="testimonial"
      sx={{
        pb: { md: "64px", xs: "10px", sm: "36px" },
        px: { md: 3, sx: 0, sm: 1 },
      }}
    >
      <Carousel arrows {...settings}>
        {renderItemTestimonal()}
      </Carousel>
      <ModalVideo open={open} onClose={handleClose} data={dataVideo.current} />
    </Box>
  );
}
