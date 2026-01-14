import React from "react";
import Link from "next/link";

import banner from "../../components/Quality/quality_sustainability.jpg";
import quality_assurance from "../../components/Quality/quality_assurance.jpg";
import ctat from "../../components/Overview/certi/Ap.jpg";
import globalRecycledStandard from "../../components/Overview/certi/Ce.jpg";
import reachCompliance from "../../components/Overview/certi/Eco.jpg";
import wcaConditionsAssessment from "../../components/Overview/certi/EN71.jpg";
import ohsas18001 from "../../components/Overview/certi/ISo9001.jpg";
import iso9001 from "../../components/Overview/certi/ISO14001.jpg";
import iso14001 from "../../components/Overview/certi/OHS.jpg";
import en71 from "../../components/Overview/certi/ORK.jpg";
import ecoLogo from "../../components/Overview/certi/Reach.jpg";
import ce from "../../components/Overview/certi/Recycled.jpg";
import ap from "../../components/Overview/certi/Tpat.jpg";
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
            {/* <div class="quality-sust">
                <Image src={banner} class="w-100" alt="" />
            </div> */}
            <section>
                <div>
                    <Image src={banner} alt="banner" className="w-100 img-fluid" />
                </div>
                <div>
                    <Image src={quality_assurance} alt="banner" className="w-100 img-fluid pt-5" />
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 ps-lg-4 mt-4 mt-md-0 align-self-center pt-5">
                            <p className="text_justify fs-18 text_darkgrey line-hight text_justify">
                                <b>Luxor is a global leader and trendsetter in the writing and coloring instrument space. An obsessive focus on quality, design and suitability ensures that every consumer has maximum writing comfort. Our wide range of products caters to a variety of needs from students to working executives to artists. In the last fifty-four years, this owner-managed-family-run business has grown manifold, responsibility and the resultant experience and expertise has made us more aware towards our share of the, for our customers and partners.
                                </b> </p>
                            <p className="text_justify fs-18 text_darkgrey line-hight pt-3 text_justify">
                                <b>Quality that you can rely on - that forms the foundation of our manufacturing processes and marketing strategies. It is this relentless pursuit of excellence that has earned us one of the world's most exacting certifications.
                                </b> </p>
                            <p className="text_justify fs-18 text_darkgrey line-hight pt-3 text_justify">
                                <b> Dependability, active partnership with our customers, unparalleled and impressive product quality and timely delivery are principles on which our ideas and actions are based.
                                </b>  </p>
                        </div>
                    </div>
                </div>
            </section >
            <h2
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
            </div>
        </>
    );
};

export default index;
