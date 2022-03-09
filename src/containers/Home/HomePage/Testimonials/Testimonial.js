import React from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { Row, Col, Carousel } from "antd";
import ModalVideo from "../../_components/ModalVideo/ModalVideo";
import "./style.css";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: " #fff",
        borderRadius: "50%",
        width: "48px",
        height: "48px",
        zIndex: "50",
        top: "50%",
        boxShadow: "0 2px 5px 0 rgb(0 0 0 / 15%)",
        right: "-0.5%",
        textAlign: "center",
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
        display: "block",
        background: "#fff",
        borderRadius: "50%",
        width: "48px",
        height: "48px",
        zIndex: "50",
        top: "50%",
        boxShadow: "0 2px 5px 0 rgb(0 0 0 / 15%)",
        textAlign: "center",
        left: "-0.5%",
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
        <div key={index}>
          <div className="testimonial px-4  ">
            <div className="video-modal testimonial-modal">
              <div
                className="picture__wrapper"
                role="button"
                aria-label="Play video"
                onClick={() => {
                  handleOpen();
                  handleDataVideo(item);
                }}
              >
                <picture>
                  <source media="(min-width: 1160px)" srcSet={item?.urlImage} />
                  <source media="(min-width: 900px)" srcSet={item.urlImage} />
                  <source media="(min-width: 600px)" srcSet={item.urlImage} />
                  <source media="(min-width: 361px)" srcSet={item.urlImage} />
                  <source media="(max-width: 360px)" srcSet={item.urlImage} />
                  <img
                    alt="Videoteaserimage"
                    src={item?.urlImage}
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
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
          </div>
        </div>
      );
    });
  };

  return (
    <div className=" slider__show">
      <Row justify="center">
        <Col span={25}>
          <Carousel arrows {...settings}>
            {renderItemTestimonal()}
          </Carousel>
        </Col>
      </Row>
      <ModalVideo
        open={open}
        onClose={handleClose}
        // disableScroll={disableScroll}
        data={dataVideo.current}
      />
    </div>
  );
}
