import React from "react";
import Link from "next/link";

import banner from "public/assets/images/aboutpage/webp/banner.webp";
import pcw from "public/assets/images/aboutpage/webp/pcw.webp";
import plexconsil from "public/assets/images/aboutpage/webp/plexconsil.webp";
import wim from "public/assets/images/aboutpage/webp/wim.webp";
import feo from "public/assets/images/aboutpage/webp/feo.webp";

import fortyyearsImg from "public/assets/images/aboutpage/fortyyears-img.jpg";
import birthofluxor from "public/assets/images/aboutpage/birth-of-luxor.jpg";
import exportingImg from "public/assets/images/aboutpage/exporting-over-countries.jpg";
import md_profile from "public/assets/images/aboutpage/md_profile.jpg";
import ecowrite from "public/assets/images/aboutpage/ecowrite.jpg";
import Image from "next/image";
import style from "../HomePage/style.module.css";
const index = () => {
  return (
    <>
      <section>
        <div>
          <Image src={banner} alt="banner" className="w-100 img-fluid" />
        </div>
      </section>
      <section className="pt-3 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <h1 className="fs-40 fw-700 text-center">
                Luxor For Every Stage Of Life
              </h1>
              <p className="text-center fs-20">
                Luxor pioneered the Writing Instruments industry in India fifty
                nine years ago and
                {`today it is India's leading Premium fine Writing Brand, since its inception it has

                                added many laurels to its credit`}
              </p>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 mb-4 px-md-1">
              <Image
                src={birthofluxor}
                alt="birth of luxor"
                className="img-fluid w-100"
              />
            </div>
            <Link href={"/start"}>
              <div
                className="col-md-4 mb-4 px-md-1"
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={fortyyearsImg}
                  alt="40 Years"
                  className="img-fluid mw-100"
                />
              </div>
            </Link>
            <div className="col-md-4 mb-4 px-md-1">
              <Image
                src={exportingImg}
                alt="Exporting"
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 pt-2">
        <div className="container-fluid p-0 vid-section">
          <div className="mt-5">
            {/*          <Image
            className="img-fluid w-100"
            src={Image5}
            alt="Luxor Journey"
            /> */}
            <video
              autoPlay={true}
              muted
              className={style["video-img"]}
              style={{ objectFit: "contain" }}
              loop
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/2.mp4`}
            />
            {/* <JourneyMap /> */}
            {/* <ImageMap /> */}
          </div>
        </div>
      </section>
      <h3 className="fs-40 my-5 fw-700 text-center">LEADERSHIP</h3>

      <section className="bg_grey">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-4 pe-lg-4">
              <Image
                src={md_profile}
                className="img-fluid"
                alt="Pooja Gupta Profile"
              />
            </div>
            <div className="col-md-7 col-lg-8 ps-lg-4 mt-4 mt-md-0 align-self-center">
              <h3 className="fs-50 text-center text_red fw-600">
                Pooja Jain Gupta
              </h3>
              <p className="fs-20 text-center text_darkgrey">
                Managing Director at Luxor Writing Instruments Pvt. Ltd.
              </p>
              <p className="text_justify fs-18 text_darkgrey ">
                Pooja Jain Gupta Managing Director at Luxor Writing Instruments
                Pvt. Ltd. Pooja Jain is a prominent name amongst the young
                successful Indians in business. As the Managing Director of the
                Luxor Group; which is a diversified group having business
                interests in Writing Instruments, stationery products, Real
                Estate, Hospitality, Fiber Optics, Nano Technology cleaning
                products for all types of coating surfaces in B2B businesses for
                glass, solar panels, metal, leather and textile successfully
                marked in India as a pioneer, Tablets and Digital office
                products, with her astounding corporate capabilities, Pooja’s
                corporate and social work has earned her plenty of laurels. She
                is counted amongst the 25 most powerful women in Indian
                Business.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h3 className="fs-18 mb-1 text_justify lh_1  text_darkgrey">
            {`Pioneer in Writing Instruments manufacturing; the industry major has re-invented Brand Luxor and brought  world-famous brands like Parker, Schneider, and Waterman under the Group's umbrella to serve the Indian consumer  market.`}
          </h3>
          <h3 className="fs-18 mt-1 text_justify lh_1  text_darkgrey">{` Luxor pioneered the Writing Instruments industry in India fifty Four years ago and today it is India's leading Premium  fine Writing Brand, since its inception it has added many laurels to its credit, "Best Exporter Award" for twelve  consecutive years, Selected Super brand India award, Parker trusted brand award are some of the awards bagged  by Luxor. Today we are one of the largest companies in South Asia in our category of writing instruments having a  large share of the industry in India.
                        Our aim has been to drive customer satisfaction. We are a company that adapts and grows by upholding some  lasting principles.`}</h3>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h3 className="fs-40 fw-700 text-center">INITIATIVES</h3>
          <div className="row mt-4">
            <div className="col-md-6 mb-3 px-lg-0">
              <Image
                id="eco-write"
                src={ecowrite}
                alt="ecowrite"
                className="img-fluid w-100"
              />
            </div>
            <div className="col-md-6 mb-3 px-lg-0">
              <Image
                src={pcw}
                id="pcw-ecologo"
                alt="pwc"
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h3 className="fs-40 text-center fw-700">AWARDS & RECOGNITION</h3>

          <div className="row mt-3">
            <div className="col-md-4 mb-3">
              <Image src={feo} alt="Awards" className="img-fluid " />
            </div>
            <div className="col-md-4 mb-3">
              <Image src={wim} alt="Awards" className="img-fluid " />
            </div>
            <div className="col-md-4 mb-3">
              <Image src={plexconsil} alt="Awards" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
