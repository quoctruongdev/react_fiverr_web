import React, { useEffect, useState, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "./Carousel/Carousel";
import SliderShow from "./PopularJob/PopularJob";
import Feature from "./Feature/Feature";
import ModalVideo from "../_components/ModalVideo/ModalVideo";
import MarketPlace from "./MarketPlace/MarketPlace";
import Testimonial from "./Testimonials/Testimonial";
import "./style.css";

export default function HomePage() {
  // let CategoriesMenu = document.getElementById("CategoriesMenu").classList;
  // let MainNavbar = document.getElementById("MainNavbar").classList;
  // let SearchNavbar = document.getElementById("SearchNavbar").classList;
  // let listItemNav = document.getElementById("listItemNav").classList;

  // let location = useLocation();
  // const defaultSubNavbar = () => {
  //   if (location.pathname === "/") {
  //     CategoriesMenu.add("hidden");
  //     MainNavbar.add("hiddenMainNav");
  //     SearchNavbar.add("hiddenSearchNav");
  //   } else {
  //     CategoriesMenu.remove("hidden");
  //   }
  // };
  // const controlSubNavbar = () => {
  //   if (window.scrollY > 200) {
  //     CategoriesMenu.add("show");
  //     CategoriesMenu.remove("hidden");
  //     SearchNavbar.add("showSearchNav");
  //     SearchNavbar.remove("hiddenSearchNav");
  //   } else {
  //     CategoriesMenu.remove("show");
  //     CategoriesMenu.add("hidden");
  //     SearchNavbar.remove("showSearchNav");
  //     SearchNavbar.add("hiddenSearchNav");
  //   }
  // };
  const controlMainNavbar = () => {
    if (window.scrollY > 30) {
      document.getElementById("MainNavbar").classList.add("showNavbar");
      document.getElementById("MainNavbar").classList.remove("Navbar__header");
    } else {
      document.getElementById("MainNavbar").classList.add("Navbar__header");
      document.getElementById("MainNavbar").classList.remove("showNavbar");
    }
  };
  const controlSearchNavbar = () => {
    if (window.scrollY > 300) {
      document.getElementById("CategoriesMenu").classList.add("show_subnav");
      document
        .getElementById("CategoriesMenu")
        .classList.remove("hidden_subnav");

      document.getElementById("SearchNavbar").classList.add("show_search");
      document.getElementById("SearchNavbar").classList.remove("hidden_search");
    } else {
      document.getElementById("SearchNavbar").classList.add("hidden_search");
      document.getElementById("SearchNavbar").classList.remove("show_search");

      document.getElementById("CategoriesMenu").classList.add("hidden_subnav");
      document.getElementById("CategoriesMenu").classList.remove("show_subnav");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlSearchNavbar);
    window.addEventListener("scroll", controlMainNavbar);
    return () => {
      window.removeEventListener("scroll", controlMainNavbar);
      window.removeEventListener("scroll", controlSearchNavbar);
    };
  }, []);

  return (
    <>
      <section id="HomePage">
        <Carousel />
        <SliderShow />
        <Feature />
        <ModalVideo />
        <MarketPlace />
        <Testimonial />
      </section>
    </>
  );
}
