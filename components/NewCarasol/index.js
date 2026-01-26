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
    
    // Different videos for each timeline item
    // Add your video files to public/assets/videos/ with these names
    this.videoSources = [
      "/assets/videos/journey.mp4",      // Slide 1 - Default/2005
      "/assets/videos/journey-2006.mp4", // Slide 2 - 2006 (fallback to journey.mp4 if not exists)
      "/assets/videos/journey-2004.mp4", // Slide 3 - 2004 (fallback to journey.mp4 if not exists)
      "/assets/videos/journey-2002.mp4", // Slide 4 - 2002 (fallback to journey.mp4 if not exists)
    ];
  }

  handleVideoError = (index, e) => {
    console.error(`Video ${index + 1} failed to load:`, this.videoSources[index]);
    // Fallback to journey.mp4 if specific video doesn't exist
    if (e.target.src !== "/assets/videos/journey.mp4") {
      console.log(`Falling back to journey.mp4 for slide ${index + 1}`);
      e.target.src = "/assets/videos/journey.mp4";
    } else {
      e.target.style.display = 'none';
    }
  };

  handleVideoLoad = (index) => {
    console.log(`✅ Video ${index + 1} loaded successfully:`, this.videoSources[index]);
  };

  render() {
    return (
      <Carousel
        autoPlay={true}
        showThumbs={false}
        renderStatus={<></>}
        infiniteLoop={true}
        interval={15000}
      >
        {this.videoSources.map((videoSrc, index) => (
          <div key={`journey-video-${index}`} className="carousel_banner" style={this.state.imageStyle}>
            <video
              autoPlay={true}
              muted
              className={style["video-img1"]}
              loop
              src={videoSrc}
              onError={(e) => this.handleVideoError(index, e)}
              onLoadedData={() => this.handleVideoLoad(index)}
            />
          </div>
        ))}
      </Carousel>
    );
  }
}