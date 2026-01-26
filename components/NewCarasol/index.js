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
    
    // 4 different videos for each timeline item
    // UPDATE THESE PATHS to match your actual 4 video file names in public/assets/videos/
    // Example: If your videos are named "video1.mp4", "video2.mp4", etc., update accordingly
    this.videoSources = [
      "/assets/videos/journey.mp4",   // Slide 1 - Update this to your first video filename
      "/assets/videos/journey2.mp4",  // Slide 2 - Update this to your second video filename  
      "/assets/videos/journey3.mp4",  // Slide 3 - Update this to your third video filename
      "/assets/videos/journey4.mp4",  // Slide 4 - Update this to your fourth video filename
    ];
  }

  handleVideoError = (index, e) => {
    const currentSrc = e.target.src;
    const currentPath = currentSrc.replace(window.location.origin, '');
    console.error(`❌ Video ${index + 1} failed to load:`, currentPath);
    
    // Fallback to journey.mp4 if the specific video doesn't exist
    if (currentPath !== "/assets/videos/journey.mp4") {
      console.log(`⚠️ Falling back to journey.mp4 for slide ${index + 1}`);
      e.target.src = "/assets/videos/journey.mp4";
    } else {
      console.error(`❌ Video not found for slide ${index + 1}. Please check video file exists.`);
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