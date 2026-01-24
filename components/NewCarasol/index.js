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
        showThumbs={false}
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
            src="/assets/videos/journey.mp4"
            onError={(e) => {
              console.error("Video failed to load:", e);
              e.target.style.display = 'none';
            }}
            onLoad={() => {
              console.log("Video loaded successfully");
            }}
          />
        </div>
        <div className="carousel_banner" style={this.state.imageStyle}>
          <video
            autoPlay={true}
            preload="none"
            muted
            className={style["video-img1"]}
            loop
            src="/assets/videos/journey.mp4"
            onError={(e) => {
              console.error("Map video failed to load:", e);
              e.target.style.display = 'none';
            }}
            onLoad={() => {
              console.log("Map video loaded successfully");
            }}
          />
        </div>
        <div className="carousel_banner" style={this.state.imageStyle}>
          <video
            autoPlay={true}
            preload="none"
            muted
            className={style["video-img1"]}
            loop
            src="/assets/videos/journey.mp4"
            onError={(e) => {
              console.error("Video 3 failed to load:", e);
              e.target.style.display = 'none';
            }}
            onLoad={() => {
              console.log("Video 3 loaded successfully");
            }}
          />
        </div>
        <div className="carousel_banner" style={this.state.imageStyle}>
          <video
            autoPlay={true}
            preload="none"
            muted
            className={style["video-img1"]}
            loop
            src="/assets/videos/journey.mp4"
            onError={(e) => {
              console.error("Video 4 failed to load:", e);
              e.target.style.display = 'none';
            }}
            onLoad={() => {
              console.log("Video 4 loaded successfully");
            }}
          />
        </div>
        <div className="carousel_banner" style={this.state.imageStyle}>
          <div 
            style={{
              width: '100%',
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold'
            }}
          >
            🎨 Luxor Writing Instruments
          </div>
        </div>
      </Carousel>
    );
  }
}