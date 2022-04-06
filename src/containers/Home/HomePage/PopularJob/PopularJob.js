import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Carousel } from "antd";
import "./style.css";
import { actFetchListJobPopular } from "./modules/actions";
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";

const contentStyle = {
  color: "red",
  lineHeight: "160px",
  textAlign: "center",
  padding: "2px 16px",
};
const styleArrow = {
  display: "block",
  background: " #fff",
  borderRadius: "50%",
  width: "48px",
  height: "48px",
  zIndex: "50",
  top: "50%",
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
        right: "-0.5%",
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
        left: "-0.5%",
      }}
      onClick={onClick}
    />
  );
};

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  slidesToShow: 5,
  slidesToScroll: 5,
  dots: false,
};

export default function PopularJob() {
  const data = useSelector((state) => state.homePageReducer.dataPopular);
  // const loading = useSelector((state) => state.listJobPopularReducer.loading);

  function renderListsServicePopular() {
    return data?.map((item, index) => {
      return (
        <div className="item__slider" key={index}>
          <NavLink to={item?.link} className="subcategory ">
            <h4>
              <small>{item.title.sub}</small>
              {item.title.main}
            </h4>
          </NavLink>
          <NavLink to={item?.link}>
            <picture>
              <img style={contentStyle} srcSet={item.url} alt="" />
            </picture>
          </NavLink>
        </div>
      );
    });
  }

  return (
    <div className=" Popular__service slider__show">
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { md: 36, xs: 28 },
          px: { xs: 2 },
          color: " #404145",
          mb: 2,
        }}
      >
        Popular professional services
      </Typography>
      <Row justify="center">
        <Col span={25}>
          <Carousel
            arrows
            {...settings}
            responsive={[
              {
                breakpoint: 1192,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 2,
                  infinite: true,
                },
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                },
              },
              {
                breakpoint: 792,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 2,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            {renderListsServicePopular()}
          </Carousel>
        </Col>
      </Row>
    </div>
  );
}
