import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Home_Page_Banner from "public/assets/Home Page Main Banner/Banner-1.jpg";
import Home_Page_Banner2 from "public/assets/Home Page Main Banner/Banner-2.jpg";
import Home_Page_Banner3 from "public/assets/Home Page Main Banner/Banner-3.jpg";
import Home_Page_Banner4 from "public/assets/Home Page Main Banner/Luxor Banner 2.jpg";
import Home_Page_Banner5 from "public/assets/Home Page Main Banner/Luxor Banner 3.png";
import Home_Page_Banner6 from "public/assets/Home Page Main Banner/Luxor Banner 5.png";
import Home_Page_Banner7 from "public/assets/Home Page Main Banner/Luxor Banner 6.png";
import Image from "next/image";
import style from "../HomePage/style.module.css";

export default class Carasol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageStyle: {
        width: "100%",
      },
    };
  }

  render() {
    return (
      <Carousel
        autoPlay={true}
        showThumbs={false}
        renderStatus={<></>}
        infiniteLoop={true}
        interval={10000}
      >
        {/* <div className="carousel_banner" style={this.state.imageStyle}>
          <video
            autoPlay={true}
            muted
            className={style["video-img1"]}
            loop
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/Banner_change_final.mp4`}
          />
        </div> */}
        <div className="carousel_banner" style={this.state.imageStyle}>
          <Image alt="banner1" className="img-fluid" src={Home_Page_Banner2} />
        </div>
        <div className="carousel_banner" style={this.state.imageStyle}>
          <Image alt="banner2" className="img-fluid" src={Home_Page_Banner3} />
        </div>
        <div className="carousel_banner" style={this.state.imageStyle}>
          <Image className="img-fluid" src={Home_Page_Banner} />
        </div>
        <div className="carousel_banner" style={this.state.imageStyle}>
          <Image alt="banner2" className="img-fluid" src={Home_Page_Banner4} />
        </div>
        <div className="carousel_banner" style={this.state.imageStyle}>
          <Image alt="banner2" className="img-fluid" src={Home_Page_Banner5} />
        </div>
        <div className="carousel_banner" style={this.state.imageStyle}>
          <Image alt="banner2" className="img-fluid" src={Home_Page_Banner6} />
        </div>
        <div className="carousel_banner" style={this.state.imageStyle}>
          <Image alt="banner2" className="img-fluid" src={Home_Page_Banner7} />
        </div>
      </Carousel>
    );
  }
}
