import Image from "next/image";
import Ugcslider from "components/Ugcslider";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import pcw from "public/assets/new_launches/PCW.jpg";
import kids from "public/assets/new_launches/kids.png";
import nl_green from "public/assets/new_launches/li_green.png";
import carnivalnew from "public/assets/new_launches/carnivalnew.png"
import revamped from "public/assets/images/Overview/about-us-revamped.png";
import neronew from "public/assets/new_launches/neronew.png"
import vistanew from "public/assets/new_launches/vistanew.png"
import AneliaBlack from "public/assets/new_launches/AneliaBlack.png"
import marker_blue from "public/assets/new_launches/marker_blue.png";
import OutlineMarkerPurple from "public/assets/new_launches/Outline-Marker-Purple.png";
import BroadtipMarker from "public/assets/new_launches/Broadtip Marker.png";
import Fineliner from "public/assets/new_launches/Fineliner.png";
import Elan from "public/assets/new_launches/Elan.png";
import Ikon from 'public/assets/new_launches/ikon_6.png'
import Fluorescent from "public/assets/new_launches/Fluorescent.png";
import trendypaintMarkerProject1 from "public/assets/new_launches/trendypaintMarkerProject1.png"
import trendypaintMarkerProject2 from "public/assets/new_launches/trendypaintMarkerProject2.png"
import trendypaintMarkerProject3 from "public/assets/new_launches/trendypaintMarkerProject3.png"
import WBM_120 from "public/assets/new_launches/WBM 120 Red.png";
import MetallicMarkerGold11 from 'public/assets/new_launches/MetallicMarkerGold11.png'
import Pastel from "public/assets/new_launches/Pastel.png";
import metal_pens from "public/assets/new_launches/metal_pens.png";
import React, { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { gsap } from "gsap";
import Carasol from "components/carasoul";
import ReuseImage from "public/assets/env_1.gif";
import ReuseImage1 from "public/assets/High_Quality.png";
import ReuseImage2 from "public/assets/Eco_Friendly.png";
import ReuseImage3 from "public/assets/Smooth.png";
import ReuseImage4 from "public/assets/100_Quality.png";
import ReuseImage5 from "public/assets/100_Cust.png";
import ReuseImage6 from "public/assets/3r.png";
import worldMap from "public/assets/map.avif";
import style from "./style.module.css";
import { useRouter } from "next/router";
import Image23 from "public/assets/award1.png";
import Image24 from "public/assets/award2.png";
import Image25 from "public/assets/award3.png";
import Ap from "public/assets/images/certificates/Ap.jpg";
import Ce from "public/assets/images/certificates/Ce.jpg";
import Eco from "public/assets/images/certificates/Eco.jpg";
import EN71 from "public/assets/images/certificates/EN71.jpg";
import ISo9001 from "public/assets/images/certificates/ISo9001.jpg";
import ISO14001 from "public/assets/images/certificates/ISO14001.jpg";
import OHS from "public/assets/images/certificates/OHS.jpg";
import ORK from "public/assets/images/certificates/ORK.jpg";
import Reach from "public/assets/images/certificates/Reach.jpg";
import Recycled from "public/assets/images/certificates/Recycled.jpg";
import Tpat from "public/assets/images/certificates/Tpat.jpg";
import I1 from "public/assets/images/Look_Book_Section_1.jpg";
import I2 from "public/assets/images/Look_Book_Section_2.jpg";
import I3 from "public/assets/images/Look_Book_Section_3.jpg";
import Image18 from "public/assets/images/Partner.png";
import WhatPeopleSayCarosel from "@components/WhatPeopleSay";
import WomanLed from "@components/WomanLed";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Modal from "../Model";
// NewCarasol removed - using single video for Our Journey section
gsap.registerPlugin(ScrollTrigger);

function App(props) {
  const [scrollX, setScrollX] = useState(0);
  const carouselRef = useRef(null);
  const [productScrollX, setProductScrollX] = useState(0);
  const productCarouselRef = useRef(null);
  const [all_prdcts] = useState(props.all_prdcts);
  let router = useRouter();
  const [gallery, setGallery] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [certSlide, setCertSlide] = useState(0);
  const certSlidesTotal = 2;
  useEffect(() => {
    newLaumch();
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current && scrollX > 0) {
      const newScrollX = scrollX - 200; // Adjust the scroll amount as needed
      setScrollX(newScrollX);
      carouselRef.current.scrollTo({
        left: newScrollX,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current && scrollX < 100000) {
      const newScrollX = scrollX + 550; // Adjust the scroll amount as needed
      setScrollX(newScrollX);
      carouselRef.current.scrollTo({
        left: newScrollX,
        behavior: "smooth",
      });
    }
  };

  const productScrollLeft = () => {
    if (productCarouselRef.current && productScrollX > 0) {
      const newScrollX = productScrollX - 380; // Adjust the scroll amount as needed
      setProductScrollX(newScrollX);
      productCarouselRef.current.scrollTo({
        left: newScrollX,
        behavior: "smooth",
      });
    }
  };

  const productScrollRight = () => {
    if (productCarouselRef.current && productScrollX < 1900) {
      const newScrollX = productScrollX + 380; // Adjust the scroll amount as needed
      setProductScrollX(newScrollX);
      productCarouselRef.current.scrollTo({
        left: newScrollX,
        behavior: "smooth",
      });
    }
  };



  function newLaumch() {
    let pen_marker_line = document.querySelectorAll(".pen_marker_line");
    let marker_marks = document.querySelectorAll(".new_launch_marker img");

    // Only run GSAP animations if elements exist
    if (marker_marks && marker_marks.length > 0) {
      gsap.to(marker_marks, {
        duration: 2,
        x: 400,
        scrollTrigger: {
          trigger: marker_marks,
          toggleActions: "restart pause resume reset",
          onToggle: (self) => console.log("toggled, isActive:", self.isActive),
          start: "top 70%",
          end: "bottom 20%",
        },
      });
    }

    if (pen_marker_line && pen_marker_line.length > 0) {
      gsap.fromTo(
        pen_marker_line,
        {
          duration: 2,
          width: 0,
          opacity: 5,
        },

        {
          duration: 2,
          width: 400,
          height: "100%",
          opacity: 0,
          borderRadius: "0 0 50% 50% ",
          height: "fit-content",
          backgroundColor: "rgba(99, 97, 7, 0.8)",
          zIndex: -2,
          scrollTrigger: {
            trigger: pen_marker_line,
            toggleActions: "restart pause resume restart",

            onToggle: (self) => console.log("toggled, isActive:", self.isActive),
            start: "top 70%",
            end: "bottom 50%",
          },
        }
      );
    }
  }
  function drawPen(pen_div, pen_image_div, pen_draw_div, pen_colour, card_div, size_div) {
    let penDiv = document.querySelectorAll(pen_div);
    let Image = document.querySelectorAll(pen_image_div);
    let marker_line = document.querySelectorAll(pen_draw_div);
    let card = document.querySelectorAll(card_div);

    // Only run GSAP animations if elements exist
    if (penDiv && penDiv.length > 0) {
      gsap.to(penDiv, {
        //  backgroundColor:"red",
        // width: 300,
        // scale: 1,
        // dirat1ion: 2,
        translateY: -40,
        duration: 2,
      });

      gsap.to(card, {
        backgroundColor: "#da3131",
      });

      gsap.to(Image, {
        //  backgroundColor:"red",
        x: 100,
        // width: 300,
        // height: "86%",
        scale: 1,
        // dirat1ion: 2,
        duration: 2,
      });

      gsap.to(marker_line, {
        //  backgroundColor:"red",
        borderTop: `${size_div} solid ${pen_colour}`,
        width: 100,
        scale: 1,
        // dirat1ion: 2,
        duration: 2,
      });
    }
  }
  function removeDrawPen(
    pen_div,
    pen_image_div,
    pen_draw_div,
    pen_colour,
    card_div,
    size_div
  ) {
    let penDiv = document.querySelectorAll(pen_div);
    let Image = document.querySelectorAll(pen_image_div);
    let marker_line = document.querySelectorAll(pen_draw_div);
    let card = document.querySelectorAll(card_div);

    gsap.to(penDiv, {
      // backgroundColor: "white",
      // scale: 1,
      translateY: 0,
      duration: 2,
      // width: 245,
    });

    gsap.to(card, {
      backgroundColor: "#ececec",
    });

    gsap.to(Image, {
      //  backgroundColor:"red",
      x: 0,
      // width: 245,
      // height: "86%",
      scale: 1,
      duration: 2,
      yoyo: true,
    });

    gsap.to(marker_line, {
      //  backgroundColor:"red",
      borderTop: `${size_div} solid ${pen_colour}`,
      x: 0,
      width: 0,
      scale: 1,
      duration: 2,
    });
  }

  return (
    <>
      {/* Banner Components */}
      <Carasol />
      {/* END Banner Components */}

      {/* Legacy Of Luxor Components*/}
      <section className="py-5 overflow-hidden main_homepage">
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="row mt-4"
          >
            <div className="col-md-6 mb-3 wow animate__fadeInLeft animate__animated home-text">
              <div className="home-text-head">
                <h1><b>Legacy of Luxor</b></h1>
              </div>
              <div className="home-text-patra">
                <p>
                  Luxor is a pioneer and a brand leader in the writing
                  instrument industry with a significant presence in the
                  international market. Luxor is exporting products to more than
                  106 countries across the globe including USA, Australia,
                  Russia, UK, Europe, UAE and many other markets. Our range of
                  products include - Kids Markers, Highlighters  sustainable
                  Stationeries, once & Personal Stationery.
                </p>
              </div>

              <div>
                <a href="/overview" className="btn-bg Explore">
                  Explore
                </a>
              </div>
            </div>
            <div className="col-md-6 home1-img wow animate__fadeInRight animate__animated  ">
              <LazyLoadImage
                src={worldMap.src}
                className="ms-md-5"
                style={{ maxWidth: '100%', height: 'auto' }}
                alt="Map"
                effect="blur"
                placeholderSrc="/assets/placeholder.png"
              />
            </div>
          </div>
        </div>
      </section>
      {/*END Legacy Of Luxor Components*/}

      {/* New Launches Components*/}
      <section className="launch">
        <div className="heading">
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3 className="fs-50 fw-700 text-black">New Launches</h3>
          </div>
        </div>
        <button
          onClick={scrollLeft}
          className="homepage-new-launches-carousel new-launches-left-arrow"
        >
          {"<"}
        </button>
        <div className="carouselItem" ref={carouselRef}>
          {/* 1 */}
          <div
            className="posterBlock8"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock8",
                ".posterBlock8 img",
                ".marker_line8",
                "black",
                ".posterBlock8-card",
                "2px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock8",
                ".posterBlock8 img",
                ".marker_line8",
                "white",
                ".posterBlock8-card",
                "2px"
              )
            }
          >
            <div
              className="posterBlock8-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={carnivalnew.src}
              />
              <div className="marker_line8" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Carnival</span>
            </div>
          </div>
          {/* end 1 */}
          {/* 2 */}
          <div
            className="posterBlock9"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock9",
                ".posterBlock9 img",
                ".marker_line9",
                "black",
                ".posterBlock9-card",
                "2px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock9",
                ".posterBlock9 img",
                ".marker_line9",
                "white",
                ".posterBlock9-card",
                "2px"
              )
            }
          >
            <div
              className="posterBlock9-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={neronew.src}
              />
              <div className="marker_line9" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Nero</span>
            </div>
          </div>
          {/* end of 2 */}
          {/* 3 */}
          <div
            className="posterBlock10"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock10",
                ".posterBlock10 img",
                ".marker_line10",
                "black",
                ".posterBlock10-card",
                "2px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock10",
                ".posterBlock10 img",
                ".marker_line10",
                "white",
                ".posterBlock10-card",
                "2px"
              )
            }
          >
            <div
              className="posterBlock10-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={vistanew.src}
              />
              <div className="marker_line10" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Vista</span>
            </div>
          </div>
          {/* end of 3 */}
          {/* 4 */}
          <div
            className="posterBlock11"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock11",
                ".posterBlock11 img",
                ".marker_line11",
                "black",
                ".posterBlock11-card",
                "2px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock11",
                ".posterBlock11 img",
                ".marker_line11",
                "white",
                ".posterBlock11-card",
                "2px"
              )
            }
          >
            <div
              className="posterBlock11-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={AneliaBlack.src}
              />
              <div className="marker_line11" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Anelia Black</span>
            </div>
          </div>
          {/* end of 4 */}
          {/* 5 */}
          <div
            className="posterBlock12"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock12",
                ".posterBlock12 img",
                ".marker_line12",
                "black",
                ".posterBlock12-card",
                "2px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock12",
                ".posterBlock12 img",
                ".marker_line12",
                "white",
                ".posterBlock12-card",
                "2px"
              )
            }
          >
            <div
              className="posterBlock12-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={Elan.src}
              />
              <div className="marker_line12" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Elan</span>
            </div>
          </div>
          {/* END OF 5 */}
          {/* 6 */}
          <div
            className="posterBlock6new"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock6new",
                ".posterBlock6new img",
                ".marker_line6new",
                "black",
                ".posterBlock6new-card",
                "2px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock6new",
                ".posterBlock6new img",
                ".marker_line6new",
                "white",
                ".posterBlock6new-card",
                "2px"
              )
            }
          >
            <div
              className="posterBlock6new-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={Ikon.src}
              />
              <div className="marker_line6new" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Ikon</span>
            </div>
          </div>
          {/* end of 6 */}
          <div
            className="posterBlock5"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock5",
                ".posterBlock5 img",
                ".marker_line5",
                "black",
                ".posterBlock5-card",
                "1.5px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock5",
                ".posterBlock5 img",
                ".marker_line5",
                "white",
                ".posterBlock5-card",
                "1.5px"
              )
            }
          >
            <div
              className="posterBlock5-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={237}
                height={"80%"}
                alt="homepage"
                src={metal_pens.src}
              />
              <div className="marker_line5" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Dunes Set</span>
            </div>
          </div>
          {/* 7  */}
          <div
            className="posterBlock13"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock13",
                ".posterBlock13 img",
                ".marker_line13",
                "pink",
                ".posterBlock13-card",
                "8px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock13",
                ".posterBlock13 img",
                ".marker_line13",
                "white",
                ".posterBlock13-card",
                "8px"
              )
            }
          >
            <div
              className="posterBlock13-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={Fluorescent.src}
              />
              <div className="marker_line13" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Highlighter Fluorescent Neo</span>
            </div>
          </div>
          {/* end of 7 */}
          {/* 8 */}
          <div
            className="posterBlock14"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock14",
                ".posterBlock14 img",
                ".marker_line14",
                "#add8e6",
                ".posterBlock14-card",
                "8px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock14",
                ".posterBlock14 img",
                ".marker_line14",
                "#add8e6",
                ".posterBlock14-card",
                "8px"
              )
            }
          >
            <div
              className="posterBlock14-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={Pastel.src}
              />
              <div className="marker_line14" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Highlighter Pastel Neo</span>
            </div>
          </div>
          {/* end of 8 */}
          {/* 9 */}
          <div
            className="posterBlock15"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock15",
                ".posterBlock15 img",
                ".marker_line15",
                "red",
                ".posterBlock15-card",
                "8px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock15",
                ".posterBlock15 img",
                ".marker_line15",
                "white",
                ".posterBlock15-card",
                "8px"
              )
            }
          >
            <div
              className="posterBlock15-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={WBM_120.src}
              />
              <div className="marker_line15" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Whiteboard Marker 120 Neo</span>
            </div>
          </div>
          {/* end of 9 */}
          {/* 10 */}
          <div
            className="posterBlock16"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock16",
                ".posterBlock16 img",
                ".marker_line16",
                "#A020F0",
                ".posterBlock16-card",
                "6px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock16",
                ".posterBlock16 img",
                ".marker_line16",
                "#A020F0",
                ".posterBlock16-card",
                "6px"
              )
            }
          >
            <div
              className="posterBlock16-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={OutlineMarkerPurple.src}
              />
              <div className="marker_line16" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Outline Marker</span>
            </div>
          </div>
          {/* end of 10 */}
          {/* 11 */}
          <div
            className="posterBlock11new"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock11new",
                ".posterBlock11new img",
                ".marker_line11new",
                "#B68D40",
                ".posterBlock11new-card",
                "6px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock11new",
                ".posterBlock11new img",
                ".marker_line11new",
                "#B68D40",
                ".posterBlock11new-card",
                "6px"
              )
            }
          >
            <div
              className="posterBlock11new-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={MetallicMarkerGold11.src}
              />
              <div className="marker_line11new" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Metallic Paint Marker</span>
            </div>
          </div>
          {/* end of 11 */}
          {/* 12 */}
          <div
            className="posterBlock12new"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock12new",
                ".posterBlock12new img",
                ".marker_line12new",
                "black",
                ".posterBlock12new-card",
                "12px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock12new",
                ".posterBlock12new img",
                ".marker_line12new",
                "white",
                ".posterBlock12new-card",
                "12px"
              )
            }
          >
            <div
              className="posterBlock12new-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={trendypaintMarkerProject1.src}
              />
              <div className="marker_line12new" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Trendy paint Marker Project 1</span>
            </div>
          </div>
          {/* end of 12 */}
          {/* 13 */}
          <div
            className="posterBlock13new"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock13new",
                ".posterBlock13new img",
                ".marker_line13new",
                "white",
                ".posterBlock13new-card",
                "12px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock13new",
                ".posterBlock13new img",
                ".marker_line13new",
                "white",
                ".posterBlock13new-card",
                "12px"
              )
            }
          >
            <div
              className="posterBlock13new-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={trendypaintMarkerProject2.src}
              />
              <div className="marker_line13new" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Trendy paint Marker Project 2</span>
            </div>
          </div>
          {/* end of 13 */}
          {/* 14 */}
          {/* <div
            className="posterBlock14new"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock14new",
                ".posterBlock14new img",
                ".marker_line14new",
                "#FFD700",
                ".posterBlock14new-card",
                "12px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock14new",
                ".posterBlock14new img",
                ".marker_line14new",
                "#FFD700",
                ".posterBlock14new-card",
                "12px"
              )
            }
          >
            <div
              className="posterBlock14new-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={trendypaintMarkerProject3.src}
              />
              <div className="marker_line14new" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Trendy paint Marker Project 3</span>
            </div>
          </div> */}
          {/* end of 14 */}


          <div
            className="posterBlock2"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock2",
                ".posterBlock2 img",
                ".marker_line2",
                "green",
                ".posterBlock2-card",
                "6px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock2",
                ".posterBlock2 img",
                ".marker_line2",
                "white",
                ".posterBlock2-card",
                "6px"
              )
            }
          >
            <div
              className="posterBlock2-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={245}
                height={"80%"}
                id="img2"
                alt="Image Alt"
                src={nl_green.src}
              />

              <div className="marker_line2" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>

            <div className="textBlock pt-3">
              <span className="title">Highliter</span>
            </div>
          </div>
          <div
            className="posterBlock3"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock3",
                ".posterBlock3 img",
                ".marker_line3",
                "blue",
                ".posterBlock3-card",
                "6px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock3",
                ".posterBlock3 img",
                ".marker_line3",
                "white",
                ".posterBlock3-card",
                "6px"
              )
            }
          >
            <div
              className="posterBlock3-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={245}
                height={"80%"}
                alt="homepage"
                src={marker_blue.src}
              />
              <div className="marker_line3" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">White Board Marker 450</span>
            </div>
          </div>
          <div
            className="posterBlock6"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock6",
                ".posterBlock6 img",
                ".marker_line6",
                "black",
                ".posterBlock6-card",
                "5px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock6",
                ".posterBlock6 img",
                ".marker_line6",
                "white",
                ".posterBlock6-card",
                "5px"
              )
            }
          >
            <div
              className="posterBlock6-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={230}
                height={"80%"}
                alt="homepage"
                src={pcw.src}

              />
              <div className="marker_line6" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Fine Point Permanent Markers</span>
            </div>
          </div>

          <div
            className="posterBlock7"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock7",
                ".posterBlock7 img",
                ".marker_line7",
                "#B68D40",
                ".posterBlock7-card",
                "2px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock7",
                ".posterBlock7 img",
                ".marker_line7",
                "#B68D40",
                ".posterBlock7-card",
                "2px"
              )
            }
          >
            <div
              className="posterBlock7-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={kids.src}
              />
              <div className="marker_line7" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Conical Tip Marker</span>
            </div>
          </div>







          <div
            className="posterBlock21"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock21",
                ".posterBlock21 img",
                ".marker_line21",
                "black",
                ".posterBlock21-card",
                "6px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock21",
                ".posterBlock21 img",
                ".marker_line21",
                "white",
                ".posterBlock21-card",
                "6px"
              )
            }
          >
            <div
              className="posterBlock21-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={BroadtipMarker.src}
              />
              <div className="marker_line21" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Broadtip Marker</span>
            </div>
          </div>
          <div
            className="posterBlock20"
            onMouseEnter={(e) =>
              drawPen(
                ".posterBlock20",
                ".posterBlock20 img",
                ".marker_line20",
                "#82EEFD",
                ".posterBlock20-card",
                "2px"
              )
            }
            onMouseLeave={() =>
              removeDrawPen(
                ".posterBlock20",
                ".posterBlock20 img",
                ".marker_line20",
                "#82EEFD",
                ".posterBlock20-card",
                "2px"
              )
            }
          >
            <div
              className="posterBlock20-card"
              style={{
                borderRadius: 15,
                backgroundColor: "#ececec",
                padding: 15,
              }}
            >
              <LazyLoadImage
                width={257}
                height={"80%"}
                alt="homepage"
                src={Fineliner.src}
              />
              <div className="marker_line20" style={{ width: 0, border: "8px" }}>
                {" "}
              </div>
            </div>
            <div className="textBlock pt-3">
              <span className="title">Fineliner</span>
            </div>
          </div>
        </div>
        <button
          onClick={scrollRight}
          className="homepage-new-launches-carousel new-launches-right-arrow"
        >
          {">"}
        </button>
      </section>
      {/* END New Launches Components*/}

      {/* World of LuxerComponents*/}
      {/* <section>
        <div className="products mt-5">
          <div className="prodBackground">
            <div className="">
              <h2 className="fs-50 fw-600 text-center mt-4 mt-md-2 text-white pb-2">
                World of Luxor
              </h2>
            </div>
          </div>
          <section className="py-5">
            <div className="products_list">
              <button
                className="product-carousel-btn product-carousel-left"
                onClick={productScrollLeft}
              >
                {"<"}
              </button>
              <div
                className="row flex-nowrap overflow-auto px-4 products-cont"
                ref={productCarouselRef}
              >
                {all_prdcts.length > 0 &&
                  all_prdcts.map((ele, index) => {
                    // Use local images instead of API-based ones
                    const localImages = [
                      pcw, kids, neronew, vistanew, AneliaBlack, 
                      marker_blue, OutlineMarkerPurple, BroadtipMarker,
                      Fineliner, Elan, Ikon, Fluorescent, WBM_120,
                      MetallicMarkerGold11, Pastel, metal_pens
                    ];
                    
                    const imageSrc = localImages[index % localImages.length];
                    
                    return (
                      <>
                        {[0, 1, 2].map((index) => (
                    <div
                      key={`slide-${index}`}
                      className="col-lg-3 col-md-4 mb-3"
                      onClick={() => {
                        // console.log(ele)
                        // getSelectedItem({
                        //   cat_info: {
                        //     _id: ele._id,
                        //     category: ele.category_type
                        //       ? ele.category_type.category
                        //       : ele.marker_category_type
                        //         ? ele.marker_category_type
                        //             .marker_category
                        //         : ele.category,
                        //   },
                        //   prd_id: ele._id,
                        // });
                        // router.push("/product/" + ele._id);
                      }}
                    >
                      <Image
                        src={imageSrc}
                        alt={ele.name}
                        width={300}
                        height={300}
                        className="img-fluid"
                        priority={index < 4}
                        onError={(e) => {
                          e.target.src = Logo;
                        }}
                      />
                      <h6 className="text-center mt-2">{ele.name}</h6>
                    </div>
                  ))}
                      </>
                    );
                  })}
              </div>
              <button
                className="product-carousel-btn product-carousel-right"
                onClick={productScrollRight}
              >
                {">"}
              </button>
            </div>
          </section>
        </div>
      </section> */}
      {/* END New Launches Components*/}

      {/* creating Impresive World Wide Component */}
      <section className="">
        <div className="container-fluid p-0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="partner-cont">
                  <LazyLoadImage
                    src={revamped}
                    alt="homepage"
                    className="img-fluid"
                    effect="blur"
                    placeholderSrc="/assets/placeholder.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END creating Impresive World Wide Component */}

      {/* Our Journey Component - Single Video */}
      <section className="py-5 pt-1 p-0">
        <div className="container-fluid p-0">
          <h1 className="fs-50 text-center my-5 fw-600">Our Journey</h1>
          <div className="">
            <div className="row">
              <div className="col-12 p-0">
                <video
                  autoPlay
                  muted
                  loop
                  className="w-100"
                  src="/assets/videos/journey.mp4"
                  style={{
                    width: '100vw',
                    height: 'auto',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  onError={(e) => {
                    console.error("Journey video failed to load");
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END Our Journey Component */}

      {/* Video Banner Section */}
      <section className="py-5 p-0">
        <div className="w-100">
          <h1 className="fs-50 text-center my-5 fw-600">Our Presence</h1>
          <div className="w-100">
            <div className="col-12 p-0">
              <div className="position-relative">
                <video
                  id="bannerVideo"
                  className="w-100"
                  style={{
                    width: '100vw',
                    objectFit: 'cover',
                    borderRadius: '0px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                  autoPlay
                  muted
                  loop
                  playsInline
                  src="/Map (2).mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END Video Banner Section */}

      {/* Environment Components */}
      <section className="py-2 pt-1">
        <div className="container">
          <h2 className="fs-50 fw-600 text-center my-5 text_green">
            Let's save the <br /> environment with Luxor
          </h2>
          <p className="text_grey fs-20 text_justify">
            Evolution of humans has done nothing but harm to our planet, the
            number of non-biodegradable dumps we have made is turning our planet
            hostile and non-biodegradable & plastic products are the prime
            reasons behind our planet's vulnerability. Acknowledging the harm we
            have caused to our planet has made everyone quite aware & active
            about following ways to endure a life without causing loss to our
            surroundings and therefore the demand for eco-friendly products is
            on rise, especially in the international market.
            <br />
            Luxor International takes a step ahead with an e‘ort & aim to help
            our planet breathe well, by adding stationeries that are made of
            recycled materials to our range of drawing and writing instruments
          </p>

          <div className="d-flex mt-2 justify-content-between">
            <div className="align-self-center w_20" style={{ width: "18%" }}>
              <span
                data-wow-delay="0.2s"
                className="wow  animate__fadeInLeft  animate__animated"
              >
                <LazyLoadImage
                  className="reuse-image"
                  style={{ maxWidth: '100%', height: 'auto' }}
                  src={ReuseImage1.src}
                  alt="Re Use"
                  effect="blur"
                  placeholderSrc="/assets/placeholder.png"
                />
              </span>
            </div>
            <span className="wow animate__zoomIn animate__animated" style={{ width: "25%" }}>
              <LazyLoadImage
                className="reuse-image"
                style={{ maxWidth: '100%', height: 'auto' }}
                src={ReuseImage.src}
                alt="Re Use"
                effect="blur"
                placeholderSrc="/assets/placeholder.png"
              />
            </span>
            <div className="align-self-center w_20" style={{ width: "18%" }}>
              <span
                data-wow-delay="1.2s"
                className=" wow animate__fadeInRight animate__animated"
              >
                <LazyLoadImage
                  className="reuse-image"
                  style={{ maxWidth: '100%', height: 'auto' }}
                  src={ReuseImage6.src}
                  alt="Re Use"
                  effect="blur"
                  placeholderSrc="/assets/placeholder.png"
                />
              </span>
            </div>
          </div>
          <div className="d-flex mt-0 gap-5 justify-content-between">
            <div style={{ marginLeft: "16%", width: "18%" }} className="w_20">
              <span
                data-wow-delay="0.5s"
                className=" wow animate__fadeInBottomLeft animate__animated"
              >
                <LazyLoadImage
                  className="reuse-image"
                  style={{ maxWidth: '100%', height: 'auto' }}
                  src={ReuseImage2.src}
                  alt="Re Use"
                  effect="blur"
                  placeholderSrc="/assets/placeholder.png"
                />
              </span>
            </div>
            <div style={{ marginRight: "16%", width: "18%" }} className="w_20">
              <span
                data-wow-delay="1s"
                className=" wow animate__fadeInBottomRight animate__animated"
              >
                <LazyLoadImage
                  className="reuse-image"
                  style={{ maxWidth: '100%', height: 'auto' }}
                  src={ReuseImage5.src}
                  alt="Re Use"
                  effect="blur"
                  placeholderSrc="/assets/placeholder.png"
                />
              </span>
            </div>
          </div>
          <div className="d-flex mt-4 gap-5 justify-content-between">
            <div style={{ marginLeft: "16%", width: "18%" }} className="w_20">
              <span
                data-wow-delay="0.7s"
                className=" wow animate__fadeInUp animate__animated"
              >
                <LazyLoadImage
                  className="reuse-image"
                  style={{ maxWidth: '100%', height: 'auto' }}
                  src={ReuseImage3.src}
                  alt="Re Use"
                  effect="blur"
                  placeholderSrc="/assets/placeholder.png"
                />
              </span>
            </div>
            <div style={{ marginRight: "16%", width: "18%" }} className="w_20">
              <span
                data-wow-delay="0.9s"
                className=" wow animate__fadeInUp animate__animated"
              >
                <LazyLoadImage
                  className="reuse-image"
                  style={{ maxWidth: '100%', height: 'auto' }}
                  src={ReuseImage4.src}
                  alt="Re Use"
                  effect="blur"
                  placeholderSrc="/assets/placeholder.png"
                />
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* END Environment Components */}


      {/* Art Gallery Components*/}
      <section className="py-5 position-relative">
        <div className="artGallery-img" style={{ width: "100vw", height: "600px" }}>
          <div className={`side-gallery ${gallery ? "full" : ""}`}>
            <div
              onClick={() => setGallery(!gallery)}
              className="side-curve-left"
              style={{ marginRight: gallery ? '-45%' : '0' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="110"
                height="25"
                fill="#fff"
                className="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                {gallery ? (
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                  />
                )}
              </svg>
            </div>

            {gallery && (
              <div className="container-fluid p-0">
                <div
                  className={`row flex-nowrap overflow-auto ${gallery ? "px-4" : ""}`}
                  style={{ marginLeft: gallery ? "88px" : "0" }}
                >
                  {[
                    "https://www.youtube.com/embed/Sla-7sRFFPg",
                    "https://www.youtube.com/embed/wUmn96nAnkU",
                    "https://www.youtube.com/embed/zLN-B8qg7FA",
                  ].map((embedUrl, index) => (
                    <div key={index} className="col-12 col-md-4 mb-3 d-flex justify-content-center">
                      <iframe
                        width="100%"
                        className="rounded"
                        height="300"
                        src={embedUrl}
                        title={`Luxor Art Gallery Video ${index + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={`side-curve ${gallery ? "full" : ""}`}></div>
          </div>

          <div className="parallax-inner">
            {!gallery && (
              <button
                onClick={() => setGallery(true)}
                className="btn Art_gallery_button text-white"
              >
                Art Gallery
              </button>
            )}
          </div>
        </div>
      </section>
      {/* END Art Gallery Components*/}

      {/* Look Book Components - centered below Art Gallery like reference */}
      <section className="py-4 pt-5">
        <div className="container">
          <h1 className="fs-50 text-center my-4 my-md-5 fw-600">Look Book</h1>

          <div className="row mt-4">
            <div
              className={`col-md-4 mb-3 col-lg-4 px-md-1 position-relative ${style.lookBook1}`}
              onClick={() => router.push("look-book/1")}
            >
              <Image className="img-fluid rounded" src={I3} alt="look Book" />
              <div className="text_lookbook top15">
                <p className={`vw12 fw-600 ${style.blogText1}`}>
                  Up Your <br />Presentation Game
                </p>
              </div>
            </div>
            <div
              className={`col-md-4 mb-3 col-lg-4 px-md-1 position-relative ${style.lookBook2}`}
              onClick={() => router.push("look-book/2")}
            >
              <Image src={I2} className="img-fluid rounded" alt="look Book" />
              <div className="text_lookbook top15">
                <p className={`vw12 fw-600 ${style.blogText2}`}>
                  Spark Your Creativity <br />  With Luxor Pens
                </p>
              </div>
            </div>
            <div
              className={`col-md-4 mb-3 col-lg-4 px-md-1 position-relative ${style.lookBook3}`}
              onClick={() => router.push("look-book/3")}
            >
              <Image className="img-fluid rounded" alt="look Book" src={I1} />
              <div className="text_lookbook top1">
                <p className={`vw12 fw-600 ${style.blogText3}`}>
                  How To Choose The Best Highlighter Pen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*END  Look Book Components */}

      {/* Happy Customer Components */}
      <section
        className="overflow-hidden"
      >
        <div className={`container-fluid`}>
        </div>
        <div>
          <Ugcslider />
        </div>
      </section>
      {/* END Happy Customer Components */}

      <WomanLed />

      <section
        className="py-3 mb-4"
      >
        <div>
          <WhatPeopleSayCarosel />
        </div>
      </section>

      {/* ----------------------------------------footer section------------------------------------------- */}
      {showModal &&
        <Modal onClose={() => setShowModal(false)}>
          Hello from the modal!
        </Modal>
      }
      <section className="footer">
        <h1 className="fs-40 text-center my-5 fw-600" id="Partners">
          Be Our Partner/Reseller
        </h1>
        <div className="partner-cont">
          <Image
            height={450}
            width={1000}
            src={Image18}
            alt="Luxor Partner Program"
            onError={(e) => {
              console.error("Partner image failed to load:", e);
              e.target.src = "/assets/luxorlogo.png";
            }}
          />
        </div>
        <div className="footer-btn">
          <div className="footer-btn2">
            <button onClick={() => setShowModal(true)}>Enquire Now</button>
          </div>
        </div>
        <section className="certifications pb-5">
          <div className="container">
            <h2 className="fs-50 text-center my-5 fw-600 text-black" id="award">
              Certificates
            </h2>
            <div className="row">
              <div id="carouselExampleSlidesOnly" className="carousel slide">
                <div className="carousel-inner">
                  <div className={`carousel-item ${certSlide === 0 ? "active" : ""}`}>
                    <div className="row">
                      <div className="col">
                        <Image
                          src={Recycled}
                          alt="Recycled Certificate"
                          width={200}
                          height={150}
                          onError={(e) => {
                            console.error("Recycled certificate failed to load:", e);
                            e.target.src = "/assets/luxorlogo.png";
                          }}
                        />
                      </div>
                      <div className="col">
                        <Image
                          src={Reach}
                          alt="Reach Certificate"
                          width={200}
                          height={150}
                          onError={(e) => {
                            console.error("Reach certificate failed to load:", e);
                            e.target.src = "/assets/luxorlogo.png";
                          }}
                        />
                      </div>
                      <div className="col">
                        <Image
                          src={ORK}
                          alt="ORK Certificate"
                          width={200}
                          height={150}
                          onError={(e) => {
                            console.error("ORK certificate failed to load:", e);
                            e.target.src = "/assets/luxorlogo.png";
                          }}
                        />
                      </div>
                      <div className="col">
                        <Image
                          src={OHS}
                          alt="OHS Certificate"
                          width={200}
                          height={150}
                          onError={(e) => {
                            console.error("OHS certificate failed to load:", e);
                            e.target.src = "/assets/luxorlogo.png";
                          }}
                        />
                      </div>
                      <div className="col">
                        <Image
                          src={ISO14001}
                          alt="ISO 14001 Certificate"
                          width={200}
                          height={150}
                          onError={(e) => {
                            console.error("ISO 14001 certificate failed to load:", e);
                            e.target.src = "/assets/luxorlogo.png";
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={`carousel-item ${certSlide === 1 ? "active" : ""}`}>
                    <div className="row">
                      <div className="col">
                        <Image
                          src={ISo9001}
                          alt="ISO 9001 Certificate"
                          width={200}
                          height={150}
                          onError={(e) => {
                            console.error("ISO 9001 certificate failed to load:", e);
                            e.target.src = "/assets/luxorlogo.png";
                          }}
                        />
                      </div>
                      <div className="col">
                        <Image
                          src={EN71}
                          alt="EN71 Certificate"
                          width={200}
                          height={150}
                          onError={(e) => {
                            console.error("EN71 certificate failed to load:", e);
                            e.target.src = "/assets/luxorlogo.png";
                          }}
                        />
                      </div>
                      <div className="col">
                        <Image
                          src={Eco}
                          alt="Eco Certificate"
                          width={200}
                          height={150}
                          onError={(e) => {
                            console.error("Eco certificate failed to load:", e);
                            e.target.src = "/assets/luxorlogo.png";
                          }}
                        />
                      </div>
                      <div className="col">
                        <Image
                          src={Ce}
                          alt="CE Certificate"
                          width={200}
                          height={150}
                          onError={(e) => {
                            console.error("CE certificate failed to load:", e);
                            e.target.src = "/assets/luxorlogo.png";
                          }}
                        />
                      </div>
                      <div className="col">
                        <Image
                          src={Ap}
                          alt="AP Certificate"
                          width={200}
                          height={150}
                          onError={(e) => {
                            console.error("AP certificate failed to load:", e);
                            e.target.src = "/assets/luxorlogo.png";
                          }}
                        />
                      </div>
                      <div className="col">
                        <Image
                          src={Tpat}
                          alt="TPAT Certificate"
                          width={200}
                          height={150}
                          onError={(e) => {
                            console.error("TPAT certificate failed to load:", e);
                            e.target.src = "/assets/luxorlogo.png";
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev button_left"
                  type="button"
                  onClick={() => setCertSlide((prev) => (prev === 0 ? certSlidesTotal - 1 : prev - 1))}
                  aria-label="Previous certificates"
                >
                  <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next button_right"
                  type="button"
                  onClick={() => setCertSlide((prev) => (prev + 1) % certSlidesTotal)}
                  aria-label="Next certificates"
                >
                  <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
                <ol className="carousel-indicators">
                  <li
                    role="button"
                    tabIndex={0}
                    className={certSlide === 0 ? "active" : ""}
                    onClick={() => setCertSlide(0)}
                    onKeyDown={(e) => e.key === "Enter" && setCertSlide(0)}
                    aria-label="Go to slide 1"
                  />
                  <li
                    role="button"
                    tabIndex={0}
                    className={certSlide === 1 ? "active" : ""}
                    onClick={() => setCertSlide(1)}
                    onKeyDown={(e) => e.key === "Enter" && setCertSlide(1)}
                    aria-label="Go to slide 2"
                  />
                </ol>
              </div>
            </div>
          </div>
        </section>
        <div className="background">
          <h2 className="fs-50 text-center my-5 fw-600">
            Awards & Recognitions
          </h2>
          <div className="award-img-cont">
            <div className="award-img">
              <Image src={Image23} alt="homepage" />
            </div>

            <div className="award-img">
              <Image src={Image24} alt="homepage" />
            </div>

            <div className="award-img">
              <Image src={Image25} alt="homepage" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
