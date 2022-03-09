import { BackTop } from "antd";
import React from "react";
import { VerticalAlignTopOutlined } from "@ant-design/icons";
import "./style.css";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function BackToTop() {
  const style = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    color: "#fff",
    textAlign: "center",
    fontSize: 24,
    overflow: "hidden",
    backgroundColor: "#00000073",
    borderRadius: 20,
    transition: "all .3s",
    zIndex: "100",
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <BackTop>
        <div style={style}>
          <VerticalAlignTopOutlined />
        </div>
      </BackTop>
    </div>
  );
}
