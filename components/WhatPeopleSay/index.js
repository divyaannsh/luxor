import React, { Component, createRef, useRef } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import style from "./style.module.css";
import image1 from "public/assets/whatpeoplesay/images1.jpg";
// import image2 from "public/assets/whatpeoplesay/images2.jpg";
import image3 from "public/assets/whatpeoplesay/images3.jpg";
import image4 from "public/assets/whatpeoplesay/images4.jpg";
import image5 from "public/assets/whatpeoplesay/images5.jpg";
import image6 from "public/assets/whatpeoplesay/images6.jpg";
// import image7 from "public/assets/whatpeoplesay/images7.jpg";
import image8 from "public/assets/whatpeoplesay/images8.jpg";
import image9 from "public/assets/whatpeoplesay/images9.jpg";
import image10 from "public/assets/whatpeoplesay/images10.jpg";
import image11 from "public/assets/whatpeoplesay/images11.jpg";
import image12 from "public/assets/whatpeoplesay/images12.jpg";
import image13 from "public/assets/whatpeoplesay/images13.jpg";
import image14 from "public/assets/whatpeoplesay/images14.jpg";
import image15 from "public/assets/whatpeoplesay/images15.jpg";
// import image16 from "public/assets/whatpeoplesay/images16.jpg";
import image17 from "public/assets/whatpeoplesay/images17.jpg";
import image18 from "public/assets/whatpeoplesay/images18.jpg";
import image19 from "public/assets/whatpeoplesay/images19.jpg";
// import image20 from "public/assets/whatpeoplesay/images20.jpg";
import image21 from "public/assets/whatpeoplesay/images21.jpg";
import image22 from "public/assets/whatpeoplesay/images22.jpg";
import image23 from "public/assets/whatpeoplesay/images23.jpg";
import image24 from "public/assets/whatpeoplesay/images24.jpg";
import image25 from "public/assets/whatpeoplesay/images25.jpg";

const sliderImgSize = {
  width: 380,
  height: 400,
};

export default class WhatPeopleSayCarosel extends Component {
  constructor(props) {
    super(props);
    const ref = createRef();
  }

  render() {
    return (
      <div className={style.body}>
        {/* <h1 className={style.htext}>UGC</h1> */}

        <div className={style.imgcontainer}>
          <h1 className="fs-40 text-center my-5 fw-600">Social Impact Initiatives</h1>
          <div className={style.slideContainer} ref={this.ref}>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={image1.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* <div className={style.slideImage}>
              <img
                className={style.img}
                src={image2.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
                style={{ objectFit: "cover" }}
              />
            </div> */}
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={image3.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* <div className={style.slideImage}>
              <img
                className={style.img}
                src={image4.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
                style={{ objectFit: "cover" }}
              />
            </div> */}
            {/* <div className={style.slideImage}>
              <img
                className={style.img}
                src={image4.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
                style={{ objectFit: "cover" }}
              />
            </div> */}
            {/* <div className={style.slideImage}>
              <img
                className={style.img}
                src={image5.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
                style={{ objectFit: "cover" }}
              />
            </div> */}
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={image6.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* <div className={style.slideImage}>
              <img
                className={style.img}
                src={image7.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
                style={{ objectFit: "cover" }}
              />
            </div> */}
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={image8.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={image9.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={image10.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={image11.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={image12.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={image13.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={image14.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* <div className={style.slideImage}>
              <img
                className={style.img}
                src={image15.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
                style={{ objectFit: "cover" }}
              />
            </div> */}
            {/* <div className={style.slideImage}>
              <img
                className={style.img}
                src={image16.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
                style={{ objectFit: "cover" }}
              />
            </div> */}
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={image17.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={image18.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* <div className={style.slideImage}>
              <img
                className={style.img}
                src={image19.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
                style={{ objectFit: "cover" }}
              />
            </div> */}
            {/* <div className={style.slideImage}>
              <img
                className={style.img}
                src={image20.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
                style={{ objectFit: "cover" }}
              />
            </div> */}
            {/* <div className={style.slideImage}>
              <img
                className={style.img}
                src={image21.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
                style={{ objectFit: "cover" }}
              />
            </div> */}
             
            <div className={style.slideImage}>
              <img
                className={style.img}
                src={image22.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className={style.slideImage}>
              <img
                className={style.img}
                src={image23.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className={style.slideImage}>
              <img
                className={style.img}
                src={image24.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className={style.slideImage}>
              <img
                className={style.img}
                src={image25.src}
                width={sliderImgSize.width}
                height={sliderImgSize.height}
                style={{ objectFit: "cover" }}
              />
            </div>

          </div>
        </div>
      </div>
    );
  }
}
