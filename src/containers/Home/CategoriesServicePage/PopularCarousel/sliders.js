import React from "react";
import Slider from "react-slick";
import ProductCard from "./productCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Paper } from "@mui/material";
import "./stylesss.css";

export default function ProductSlider() {
  const state = {
    slides: [
      {
        img: "https://dummyimage.com/600x400/000/7CFC00",
      },
      {
        img: "https://dummyimage.com/600x400/000/ccccc",
      },
      {
        img: "https://dummyimage.com/600x400/000/dddddd",
      },
      {
        img: "https://dummyimage.com/600x400/000/fff",
      },
      {
        img: "https://dummyimage.com/600x400/000/B22222",
      },
      {
        img: "https://dummyimage.com/600x400/000/7CFC00",
      },
      {
        img: "https://dummyimage.com/600x400/000/ccccc",
      },
      {
        img: "https://dummyimage.com/600x400/000/dddddd",
      },
      {
        img: "https://dummyimage.com/600x400/000/B22222",
      },
      {
        img: "https://dummyimage.com/600x400/000/7CFC00",
      },
    ],
  };
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Box px={5}>
      <h2> Responsive Product Carousel</h2>
      <Slider {...settings}>
        {state.slides.map((slide, index) => {
          return (
            <div key={index}>
              <ProductCard imgSrc={slide.img} />
            </div>
          );
        })}
      </Slider>
    </Box>
  );
}
