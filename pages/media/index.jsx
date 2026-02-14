import Image from "next/image";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import MediaBanner from "public/assets/images/media/media-banner.jpg";
import Gallery1 from "public/assets/images/media/1.jpg";
import Gallery2 from "public/assets/images/media/2.jpg";
import Gallery3 from "public/assets/images/media/3.jpg";
import Gallery4 from "public/assets/images/media/4.jpg";
import News1 from "public/assets/images/media/Indian Express.png";
import News2 from "public/assets/images/media/India Forbes.png";
import News3 from "public/assets/images/media/ET.png";
import News4 from "public/assets/images/media/Chronic.png";
import News5 from "public/assets/images/media/DNA.png";
import CustomCarousel from "./../../components/customCarousel/CustomCarousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  className: "media-slider",
  arrows: true,
};

const carouselItems = [
  <Image key={1} src={News1} alt="Image 1" />,
  <Image key={2} src={News2} alt="Image 2" />,
  <Image key={3} src={News3} alt="Image 3" />,
  <Image key={4} src={News4} alt="Image 4" />,
  <Image key={5} src={News5} alt="Image 5" />,
];

const index = () => {
  const [isOpen, setOpen] = useState(false);
  const vidId = "journey";
  return (
    <div className="media-container">
      <section>
        <div>
          <LazyLoadImage
            src={MediaBanner.src}
            alt="banner"
            className="w-100"
            style={{ maxWidth: '100%', height: 'auto' }}
            effect="blur"
            placeholderSrc="/assets/placeholder.png"
          />
        </div>
      </section>
      <section className="media-section-container container">
        <div className="media-gallery-container ">
          <div className="row">
            <div className="col-sm gallery-left">
              <LazyLoadImage
                src={Gallery1.src}
                onClick={() => setOpen(true)}
                style={{ maxWidth: '100%', height: 'auto' }}
                effect="blur"
                placeholderSrc="/assets/placeholder.png"
              />

              <div className="media-gallery-content">
                <h5 className="media-gallery-title">
                  Redefining Face of Future for Women{" "}
                </h5>

                <p className="media-gallery-description">
                  The motto of our lives needs to be to keep trying and to
                  embrace change. We need to have attitude of never giving
                  up, and if we do that, everything can be achieved.
                </p>
              </div>

              {vidId && isOpen && (
                <div
                  style={{
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,0.75)",
                    zIndex: 99999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 16,
                  }}
                  onClick={() => setOpen(false)}
                >
                  <div
                    style={{
                      width: "min(900px, 95vw)",
                      background: "#000",
                      borderRadius: 8,
                      overflow: "hidden",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div style={{ display: "flex", justifyContent: "flex-end", padding: 8 }}>
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        style={{
                          background: "transparent",
                          border: 0,
                          color: "#fff",
                          fontSize: 18,
                          cursor: "pointer",
                        }}
                      >
                        ×
                      </button>
                    </div>
                    <video
                      controls
                      autoPlay
                      style={{ width: "100%", height: "auto", display: "block" }}
                      src={`/assets/videos/${String(vidId).split("?")[0]}.mp4`}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="col-sm gallery-right">
              <LazyLoadImage
                src={Gallery2.src}
                style={{ maxWidth: '100%', height: 'auto' }}
                effect="blur"
                placeholderSrc="/assets/placeholder.png"
              />
              <div className="media-gallery-content">
                <h5 className="media-gallery-title">
                  Tomorrow's Luxor collaboration with Schneider Pen is future-oriented.
                </h5>
                <p className="media-gallery-description">
                  One of India's largest writing instrument brands Luxor has
                  announced its exclusive partnership with Schneider Pen,
                  Germany to launch a new portfolio of innovative and
                  high-performance writing instruments in India.
                </p>
              </div>
            </div>
          </div>
          <div className="row media-gallery-row2">
            <div className="col-sm gallery-left">
              <LazyLoadImage
                src={Gallery3.src}
                style={{ maxWidth: '100%', height: 'auto' }}
                effect="blur"
                placeholderSrc="/assets/placeholder.png"
              />
              <div className="media-gallery-content">
                <h5 className="media-gallery-title">
                  Virat Kohli Announced Brand Ambassador For Luxor
                </h5>
                <p className="media-gallery-description">
                  Luxor has appointed Virat Kohli as new brand ambassador.
                  Luxor, has unveiled a new brand film ahead of ICC Cricket
                  World Cup 2023, featuring their new brand ambassador,
                  cricketer Virat Kohli.The film showcases Luxor Schneider
                  LX MAX pen, first brand launch as part of Luxor
                  Schneider partnership, signed earlier this year.
                </p>
              </div>
            </div>
            <div className="col-sm gallery-right">
              <LazyLoadImage
                src={Gallery4.src}
                style={{ maxWidth: '100%', height: 'auto' }}
                effect="blur"
                placeholderSrc="/assets/placeholder.png"
              />
              <div className="media-gallery-content">
                <h5 className="media-gallery-title">
                  Luxor to be a Rs 1000 crore company in three to five years
                </h5>
                <p className="media-gallery-description">
                  Writing instruments major Luxor aims at becoming a Rs 1000
                  crore company in the next 3-5 years and to grow its market
                  share from current 22 per cent to 30 per cent in its operating
                  industry segments, said Pooja Jain Gupta, Managing Director of
                  company in an interview with Sangeetha G.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default index;
