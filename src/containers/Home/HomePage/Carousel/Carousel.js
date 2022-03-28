import React from "react";
import Slider from "react-slick";
import BranchCarousel from "./_Branch";
import SearchCarousel from "./Search /_searchCarousel";
// import "./style.scss";

const contentStyle = {
  height: "680px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: `rgb(51, 53, 69)`,
  backgroundPosition: " center",
  backgroundSize: "auto 100%",
  backgroundRepeat: "no-repeat",
};

export default function Carousel() {
  const dataBanner = [
    {
      id: 1,
      image: "/asset/img/bg-hero-1-1792-x2.jpeg",
      name: "Andrea",
      job: "Fashion Designer",
    },

    {
      id: 2,
      image: "/asset/img/bg-hero-2-1792-x2.jpeg",
      name: "Moon",
      job: "Marketing Expert",
    },
    {
      id: 3,
      image: "/asset/img/bg-hero-3-1792-x2.jpeg",
      name: "Ritika",
      job: "Shoemaker and Designer",
    },
    {
      id: 4,
      image: "/asset/img/bg-hero-4-1792-x2.jpeg",
      name: "Zach",
      job: "Bar Owner",
    },
    {
      id: 5,
      image: "/asset/img/bg-hero-5-1792-x2.jpeg",
      name: "Gabrielle",
      job: "Video Editor",
    },
  ];

  const renderBannerCarousel = () => {
    return dataBanner?.map((item, index) => {
      return (
        <div className="myCarousel" key={index}>
          <div
            className="myBanner"
            style={{ ...contentStyle, backgroundImage: `url( ${item.image})` }}
          >
            <div style={{ opacity: 0.75 }} className="seller-name ">
              <p>
                {item.name}, <b>{item.job}</b>
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Slider arrows={false} {...settings}>
        {renderBannerCarousel()}
      </Slider>
      <SearchCarousel />
      <BranchCarousel />
    </>
  );
}
