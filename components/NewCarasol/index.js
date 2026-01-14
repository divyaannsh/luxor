import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import style from "../HomePage/style.module.css";

export default class NewCarasol extends Component {
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
        showThumbs={true}
        renderStatus={<></>}
        infiniteLoop={true}
        interval={15000}
      >
        <div className="carousel_banner" style={this.state.imageStyle}>
          <video
            autoPlay={true}
            muted
            className={style["video-img1"]}
            loop
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/1.mp4`}
          />
        </div>
        <div className="carousel_banner" style={this.state.imageStyle}>
          <video
            autoPlay={true}
            preload="none"
            muted
            className={style["video-img1"]}
            loop
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/2.mp4`}
          />
        </div>
        <div className="carousel_banner" style={this.state.imageStyle}>
          <video
            autoPlay={true}
            preload="none"
            muted
            className={style["video-img1"]}
            loop
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/3.mp4`}
          />
        </div>
        <div className="carousel_banner" style={this.state.imageStyle}>
          <video
            autoPlay={true}
            preload="none"
            muted
            className={style["video-img1"]}
            loop
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/4.mp4`}
          />
        </div>
      </Carousel>
    );
  }
}