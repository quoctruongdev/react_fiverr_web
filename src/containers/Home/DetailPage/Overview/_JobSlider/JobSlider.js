import React from "react";
import ImageGallery from "react-image-gallery";
import "./style.css";
export default function JobSlider(props) {
  const data = props.data;
  const defautImg = "/asset/image_defaut.png";

  const images = [
    {
      original: !data?.image ? defautImg : data?.image,
      thumbnail: !data?.image ? defautImg : data?.image,
    },
    {
      original: !data?.image ? defautImg : data?.image,
      thumbnail: !data?.image ? defautImg : data?.image,
    },
  ];
  function renderLeftNav(onClick, disabled) {
    return (
      <button
        type="button"
        className="image-gallery-left-nav"
        aria-label="Prev Slide"
        disabled={disabled}
        onClick={onClick}
      ></button>
    );
  }

  function renderRightNav(onClick, disabled) {
    return (
      <button
        type="button"
        className="image-gallery-right-nav"
        aria-label="Next Slide"
        disabled={disabled}
        onClick={onClick}
      ></button>
    );
  }

  return (
    <div className="Slider__Course ">
      <ImageGallery
        items={images}
        renderLeftNav={renderLeftNav}
        renderRightNav={renderRightNav}
        lazyLoad={true}
      ></ImageGallery>
    </div>
  );
}
