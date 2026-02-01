import React, { useState, useEffect } from "react";
import Image from "next/image";
import style from "./style.module.css";
import image1 from "public/assets/whatpeoplesay/images1.jpg";
import image3 from "public/assets/whatpeoplesay/images3.jpg";
import image4 from "public/assets/whatpeoplesay/images4.jpg";
import image5 from "public/assets/whatpeoplesay/images5.jpg";
import image6 from "public/assets/whatpeoplesay/images6.jpg";
import image8 from "public/assets/whatpeoplesay/images8.jpg";
import image9 from "public/assets/whatpeoplesay/images9.jpg";
import image10 from "public/assets/whatpeoplesay/images10.jpg";
import image11 from "public/assets/whatpeoplesay/images11.jpg";
import image12 from "public/assets/whatpeoplesay/images12.jpg";
import image13 from "public/assets/whatpeoplesay/images13.jpg";
import image14 from "public/assets/whatpeoplesay/images14.jpg";
import image15 from "public/assets/whatpeoplesay/images15.jpg";
import image17 from "public/assets/whatpeoplesay/images17.jpg";
import image18 from "public/assets/whatpeoplesay/images18.jpg";
import image21 from "public/assets/whatpeoplesay/images21.jpg";
import image22 from "public/assets/whatpeoplesay/images22.jpg";
import image23 from "public/assets/whatpeoplesay/images23.jpg";
import image24 from "public/assets/whatpeoplesay/images24.jpg";
import image25 from "public/assets/whatpeoplesay/images25.jpg";

const availableImages = [
  { src: image1, alt: "Social Impact 1" },
  { src: image3, alt: "Social Impact 3" },
  { src: image4, alt: "Social Impact 4" },
  { src: image5, alt: "Social Impact 5" },
  { src: image6, alt: "Social Impact 6" },
  { src: image8, alt: "Social Impact 8" },
  { src: image9, alt: "Social Impact 9" },
  { src: image10, alt: "Social Impact 10" },
  { src: image11, alt: "Social Impact 11" },
  { src: image12, alt: "Social Impact 12" },
  { src: image13, alt: "Social Impact 13" },
  { src: image14, alt: "Social Impact 14" },
  { src: image15, alt: "Social Impact 15" },
  { src: image17, alt: "Social Impact 17" },
  { src: image18, alt: "Social Impact 18" },
  { src: image21, alt: "Social Impact 21" },
  { src: image22, alt: "Social Impact 22" },
  { src: image23, alt: "Social Impact 23" },
  { src: image24, alt: "Social Impact 24" },
  { src: image25, alt: "Social Impact 25" },
];

export default function WhatPeopleSayCarosel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % availableImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.body}>
      <h1 className="fs-40 text-center my-5 fw-600">Social Impact Initiatives</h1>
      <div className={style.fullWidthCarousel}>
        <div className={style.carouselTrack}>
          {availableImages.map((image, index) => (
            <div
              key={`slide-${index}`}
              className={`${style.fullWidthSlide} ${index === currentIndex ? style.activeSlide : ''}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
        <div className={style.carouselDots}>
          {availableImages.map((_, index) => (
            <button
              key={index}
              className={`${style.dot} ${index === currentIndex ? style.activeDot : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
