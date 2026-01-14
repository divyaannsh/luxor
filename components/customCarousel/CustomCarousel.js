// Carousel.js
import React, { useState } from "react";
import styles from "./Carousel.module.css";

const CustomCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className={styles.carousel}>
      <button
        className={`${styles.navButton} ${styles.prev}`}
        onClick={goToPrev}
      >
        Previous
      </button>
      <div
        className={styles.carouselInner}
        style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles.carouselItem} ${
              index >= currentIndex && index < currentIndex + 3
                ? styles.active
                : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <button
        className={`${styles.navButton} ${styles.next}`}
        onClick={goToNext}
      >
        Next
      </button>
    </div>
  );
};

export default CustomCarousel;
