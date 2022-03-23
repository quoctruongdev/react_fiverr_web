// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Row, Col, Carousel } from "antd";
// import "./style.css";

// const contentStyle = {
//   width: "500px",
//   color: "red",
//   lineHeight: "160px",
//   textAlign: "center",
//   padding: "2px 16px",
// };

// //
// export default function PopularCarousel() {
//   return (
//     <div>
//       <Row justify="center">
//         <Col>
//           <Carousel
//             arrows
//             {...settings}
//             responsive={[
//               {
//                 breakpoint: 1192,
//                 settings: {
//                   slidesToShow: 4,
//                   slidesToScroll: 2,
//                   infinite: true,
//                 },
//               },
//               {
//                 breakpoint: 1024,
//                 settings: {
//                   slidesToShow: 3,
//                   slidesToScroll: 1,
//                   infinite: true,
//                 },
//               },
//               {
//                 breakpoint: 792,
//                 settings: {
//                   slidesToShow: 2,
//                   slidesToScroll: 1,
//                   infinite: true,
//                 },
//               },
//               {
//                 breakpoint: 600,
//                 settings: {
//                   slidesToShow: 1,
//                   slidesToScroll: 1,
//                   initialSlide: 2,
//                 },
//               },
//               {
//                 breakpoint: 480,
//                 settings: {
//                   slidesToShow: 1,
//                   slidesToScroll: 1,
//                 },
//               },
//             ]}
//           >
//             <div>
//               <h3 style={contentStyle}>1</h3>
//             </div>
//             <div>
//               <h3 style={contentStyle}>2</h3>
//             </div>
//             <div>
//               <h3 style={contentStyle}>3</h3>
//             </div>
//             <div>
//               <h3 style={contentStyle}>4</h3>
//             </div>
//           </Carousel>
//         </Col>
//       </Row>
//     </div>
//   );
// }
import { Carousel } from "antd";
import React from "react";
import "./style.css";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const styleArrow = {
  display: "block",
  background: " #fff",
  borderRadius: "50%",
  width: "32px",
  height: "32px",
  border: " 1px solid #e4e5e7",
  zIndex: "50",
  top: "50%",
  boxShadow: "0 2px 5px 0 rgb(0 0 0 / 15%)",
  right: "-0.5%",
  textAlign: "center",
  // position: "absolute",
  top: 0,
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        ...styleArrow,
        right: 0,
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
        right: 50,
      }}
      onClick={onClick}
    />
  );
};

export default function PopularCarousel() {
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
  };

  return (
    <>
      <Carousel {...settings} autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
  );
}
