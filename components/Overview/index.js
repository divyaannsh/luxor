import React from "react";
import Link from "next/link";

import LuxorGroupbrandsinindia from "public/assets/images/Overview/connectlogo.png";
import banner from "public/assets/images/Overview/Overview Section Banner.jpg";
import revamped from "public/assets/images/Overview/about-us-revamped.png";
import success from "public/assets/images/Overview/OurInfra Structure.png";
import luor from "public/assets/images/Overview/Building & Pen Element.png";
import datetat from "public/assets/images/Overview/bwlow.png";
import pen from "public/assets/images/Overview/pen.png";
import plexconsil from "public/assets/images/aboutpage/webp/plexconsil.webp";
import wim from "public/assets/images/aboutpage/webp/wim.webp";
import luxor1 from "public/assets/images/Overview/luxor1.png";
import luxor2 from "public/assets/images/Overview/luxor2.png";
import luxor3 from "public/assets/images/Overview/luxor3.png";
import luxor4 from "public/assets/images/Overview/luxor4.png";
import Ap from "public/assets/images/certificates/Ap.jpg";
import Ce from "public/assets/images/certificates/Ce.jpg";
import Eco from "public/assets/images/certificates/Eco.jpg";
import EN71 from "public/assets/images/certificates/EN71.jpg";
import ISo9001 from "public/assets/images/certificates/ISo9001.jpg";
import ISO14001 from "public/assets/images/certificates/ISO14001.jpg";
import OHS from "public/assets/images/certificates/OHS.jpg";
import ORK from "public/assets/images/certificates/ORK.jpg";
import Reach from "public/assets/images/certificates/Reach.jpg";
import Recycled from "public/assets/images/certificates/Recycled.jpg";
import Tpat from "public/assets/images/certificates/Tpat.jpg";
import feo from "public/assets/images/aboutpage/webp/feo.webp";
import style from "../../components/HomePage/style.module.css";
import fortyyearsImg from "public/assets/images/aboutpage/Over 60 Year.png";
import birthofluxor from "public/assets/images/aboutpage/birth-of-luxor.jpg";
import Sustainable from "public/assets/images/Overview/Sustainable.jpg";
import Image from "next/image";
function scrollLeft() {
    document.querySelector("div").scrollLeft -= 100;
}

function scrollRight() {
    document.querySelector("div").scrollLeft += 100;
}
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
                            <h2 className="fs-50 fw-700 text-center pt-5">
                                Luxor For Every Stage Of Life
                            </h2>
                            <h5 className="text-center fs-20 fw-500">
                                Luxor pioneered the Writing Instruments industry in India fifty nine years ago and                              {`today it is India's leading Premium fine Writing Brand, since its inception it has added many laurels to its credit`}
                            </h5>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <div className="row mt-5">
                        <div
                            className="col-md-2 mb-2 px-md-1"
                        >
                        </div>
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
                        <div
                            className="col-md-2 mb-2 px-md-1"
                        >
                        </div>
                        {/* <div className="col-md-4 mb-4 px-md-1">
              <Image
                src={exportingImg}
                alt="Exporting"
                className="img-fluid w-100"
              />
                    </div> */}
                    </div>
                </div>
            </section>
            <section className="pt-2">
                <h2
                    className="fs-40 text-center mt-5 fw-600"
                // style={{ marginBottom: "7rem" }}
                >
                    Our Presence
                </h2>
                <div >
                    <video
                        autoPlay={true}
                        muted
                        className={style["video-img1"]}
                        loop
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}/dotnew.mp4`}
                    />
                </div>
            </section>
            {/* <section className="py-5">
                <div className="container">
                    <div className="partner-cont">
                        <Image src={revamped} alt="homepage" />
                    </div>
                </div>
            </section> */}
            <section className="py-5">
                <div className="container">
                    <div >
                        <div className="partner-cont">
                            <Image src={success} alt="homepage" />
                        </div>
                    </div>
                </div>
            </section>
            <div class="achievements">
                <div class="achievement">
                    <div class="icon"><Image height={90} width={90} src={luxor1} alt="Pen icon" /></div>
                    <div class="description">Pioneer of writing<br /> instruments<br /> industry in India</div>
                </div>
                <div class="achievement">
                    <div class="icon"><Image height={90} width={90} src={luxor2} alt="Pen icon" /></div>
                    <div class="description">Celebrating<br /> <b>60 years</b> <br /> of innovation</div>
                </div>
                <div class="achievement">
                    <div class="icon"><Image height={90} width={90} src={luxor3} alt="Pen icon" /></div>
                    <div class="description">Winner of <br /> <b>"SUPERBRAND"</b> <br /> award for 4 <br />consecutive years</div>
                </div>
                <div class="achievement">
                    <div class="icon"><Image height={90} width={90} src={luxor4} alt="Pen icon" /></div>
                    <div class="description">'Highest Exporter <br />of the Year Award'<br /> for 12 consecutive<br /> years</div>
                </div>
            </div>

            {/* <section className="bg_grey">
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
            </section> */}
            {/* <section className="py-5">
                <div className="container">
                    <h3 className="fs-18 mb-1 text_justify lh_1  text_darkgrey">
                        {`Pioneer in Writing Instruments manufacturing; the industry major has re-invented Brand Luxor and brought  world-famous brands like Parker, Schneider, and Waterman under the Group's umbrella to serve the Indian consumer  market.`}
                    </h3>
                    <h3 className="fs-18 mt-1 text_justify lh_1  text_darkgrey">{` Luxor pioneered the Writing Instruments industry in India fifty Four years ago and today it is India's leading Premium  fine Writing Brand, since its inception it has added many laurels to its credit, "Best Exporter Award" for twelve  consecutive years, Selected Super brand India award, Parker trusted brand award are some of the awards bagged  by Luxor. Today we are one of the largest companies in South Asia in our category of writing instruments having a  large share of the industry in India.
                        Our aim has been to drive customer satisfaction. We are a company that adapts and grows by upholding some  lasting principles.`}</h3>
                </div>
            </section> */}
            <div>
                {/* <div style="display: flex; justify-content: space-between; align-items: center;">
                    <button >&lt;</button>
                    <div style="flex: 1; display: flex; overflow-x: scroll; scroll-behavior: smooth;">
                        <Image height={90} width={90} src={luxor1} alt="Pen icon" />
                        <Image height={90} width={90} src={luxor1} alt="Pen icon" />
                        <Image height={90} width={90} src={luxor1} alt="Pen icon" />
                    </div>
                    <button>&gt;</button>
                </div> */}
                {/* <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <button onClick={scrollLeft}>&lt;</button>
                    <div style={{ flex: 1, display: 'flex', overflowX: 'scroll', scrollBehavior: 'smooth' }}>
                        <Image style={{ height: '100px', width:"10px", margin: '0 10px 0 10px 0' }} alt="Writing Instruments Logo"src={Plex1}  />
                        <Image style={{ height: '100px', margin: '0 10px' }} alt="Writing Instruments Logo"src={Plex2}  />
                        <Image style={{ height: '100px', margin: '0 10px' }} alt="Writing Instruments Logo"src={Plex3}  />
                    </div>

                    <button onClick={scrollRight}>&gt;</button>
                </div> */}
            </div>
            <section className="py-5">
                <div className="container">
                    <h2
                        className="fs-40 text-center my-5 fw-600"
                    // style={{ marginBottom: "7rem" }}
                    >
                        Our Infrastructure
                    </h2>
                    <div >
                        <div className="partner-cont">
                            <Image src={luor} alt="homepage" />
                        </div>

                    </div>
                    <div >
                        <div className="partner-cont1">
                            <Image className="ml-5 w-100" src={pen} alt="homepage" />
                        </div>
                    </div>
                    <div>
                        <div className="partner-cont1">
                            <Image className="ml-5 w-100" src={datetat} alt="homepage" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                    <h2 className="fs-40 text-center my-5 fw-600">Initiatives</h2>
                    <div className="row mt-4">
                        <div className="col-md-12 mb-6 px-lg-0">
                            <Image
                                id="eco-write"
                                src={Sustainable}
                                alt="ecowrite"
                                className="img-fluid"
                            />
                        </div>
                        {/* <div className="col-md-6 mb-3 px-lg-0">
                            <Image
                                src={pcw}
                                id="pcw-ecologo"
                                alt="pwc"
                                className="img-fluid w-100"
                            />
                        </div> */}
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                    <h2 className="fs-40 text-center my-5 fw-600">Awards & Recognition</h2>

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



            {/* <h2
                className="mt-5 mb-5 text-center fs-50 fw-700"
            >
                certificates
            </h2>
            <div class="certifications pb-5">
                <Image style={{ height: '100px', width: "20px", margin: '0 10px 0 10px 0' }} alt="CTAT Logo" src={ctat} />

                <Image style={{ height: '100px', width: "20px", margin: '0 10px 0 10px 0' }} alt="Global Recycled Standard Logo" src={globalRecycledStandard} />

                <Image style={{ height: '100px', width: "20px", margin: '0 10px 0 10px 0' }} alt="REACH Compliance Logo" src={reachCompliance} />

                <Image style={{ height: '100px', width: "20px", margin: '0 10px 0 10px 0' }} alt="WCA Conditions Assessment Logo" src={wcaConditionsAssessment} />

                <Image style={{ height: '100px', width: "20px", margin: '0 10px 0 10px 0' }} alt="OHSAS 18001 Logo" src={ohsas18001} />

                <Image style={{ height: '100px', width: "20px", margin: '0 10px 0 10px 0' }} alt="ISO 9001 Logo" src={iso9001} />

                <Image style={{ height: '100px', width: "20px", margin: '0 10px 0 10px 0' }} alt="ISO 14001 Logo" src={iso14001} />

                <Image style={{ height: '100px', width: "20px", margin: '0 10px 0 10px 0' }} alt="EN71 European Safety Approval Logo" src={en71} />

                <Image style={{ height: '100px', width: "20px", margin: '0 10px 0 10px 0' }} alt="EcoLogo Certified Logo" src={ecoLogo} />

                <Image style={{ height: '100px', width: "20px", margin: '0 10px 0 10px 0' }} alt="CE Logo" src={ce} />

                <Image style={{ height: '100px', width: "20px", margin: '0 10px 0 10px 0' }} alt="AP Certified Materials Institute Logo" src={ap} />
            </div> */}
            <section className="certifications pb-5">
                <div className="container">
                    <h2 class="fs-40 text-center my-5 fw-600" text_black id="award">
                    Certificates
                    </h2>
                    <div className="row">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col">
                                            <Image src={Recycled} alt="Recycled" />
                                        </div>
                                        <div className="col">
                                            <Image src={Reach} alt="ap" />
                                        </div>
                                        <div className="col">
                                            <Image src={ORK} alt="ap" />
                                        </div>
                                        <div className="col">
                                            <Image src={OHS} alt="ap" />
                                        </div>
                                        <div className="col">
                                            <Image src={ISO14001} alt="ap" />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col">
                                            <Image src={ISo9001} alt="ap" />
                                        </div>
                                        <div className="col">
                                            <Image src={EN71} alt="ap" />
                                        </div>
                                        <div className="col">
                                            <Image src={Eco} alt="Eco" />
                                        </div>
                                        <div className="col">
                                            <Image src={Ce} alt="Ce" />
                                        </div>
                                        <div className="col">
                                            <Image src={Ap} alt="ap" />
                                        </div>
                                        <div className="col">
                                            <Image src={Tpat} alt="ap" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev button_left" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next button_right" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
                                <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                            <ol className="carousel-indicators">
                                <li data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" className="active"></li>
                                <li data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1"></li>
                            </ol>
                        </div>

                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                    <h2
                        className="fs-40 text-center my-5 fw-600"
                    // style={{ marginBottom: "7rem" }}
                    >
                        Luxor Group Brands In India
                    </h2>
                    <div>
                        <Image src={LuxorGroupbrandsinindia} alt="Luxor Group brands in india"
                            className="img-fluid-group img-fluid pb-5" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default index;
