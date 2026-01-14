import React from "react";

import dk_jain from "public/assets/images/leadership/dk-jain.jpg";
import usha_jain from "public/assets/images/leadership/usha-jain.jpg";
import md_profile from "public/assets/images/leadership/pooja-jain.jpg"
import Image from "next/image";

const index = () => {
    return (

        <section className="">
            <div className="container">
                <div className="row">
                    <div className="pt-5 col-md-10 col-lg-10 ps-lg-4 mt-4 mt-md-0 align-self-center">
                        <h3 className="fs-50 text_red fw-600">
                            Founder’s Message
                        </h3>
                        <p className="fs-30 text_darkgrey">
                            <b>Mr. D.K. Jain</b>
                        </p>
                        <p className="text_justify fs-18 text_darkgrey line-hight">
                            We know that as every word takes shape, an emotion is being
                            expressed & a Story is being told.
                            We know that colors come together to form images, dreams are
                            being shared & hopes are being formed. Luxor's writing and
                            coloring instruments put the power in your hands to write your
                            destiny every single day of your life.
                            I thank all our consumers, business associates and each one at
                            the Luxor's family for making the last fifty-four years iconic.
                        </p>
                    </div>
                    <div className="col-md-2 col-lg-2 pe-lg-2 pt-5 mt-5">
                        <Image
                            src={dk_jain}
                            // className="img-fluid"
                            alt="Pooja Gupta Profile"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 col-lg-2 pe-lg-2 mt-2 pt-5">
                        <Image
                            src={usha_jain}
                            // className="img-fluid"
                            alt="Pooja Gupta Profile"
                        />
                    </div>
                    <div className="col-md-10 col-lg-10 ps-lg-4 mt-4 mt-md-0 align-self-center">
                        <h3 className="fs-50 text_red fw-600">
                            Chairperson & President
                        </h3>
                        <p className="fs-30 text_darkgrey">
                            <b>Mrs. Usha Jain</b>
                        </p>
                        <p className="text_justify fs-18 text_darkgrey line-hight">
                            Luxor, synonymous for exciting writing for over 60 years, has followed lasting values
                            such as business integrity, consumer understanding, quality and innovation.
                            Our uncompromising standards on design, materials and workmanship have been
                            reflected in our entire product range.
                            I thank all our customers, consumers,business associates and each one at the Luxor
                            family for making this journey iconic.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 col-lg-10 ps-lg-4 mt-4 mt-md-0 align-self-center pt-5">
                        <h3 className="fs-50 text_red fw-600">
                            Managing Director
                        </h3>
                        <p className="fs-30 text_darkgrey">
                            <b>Pooja Jain Gupta</b>
                        </p>
                        <p className="text_justify fs-18 text_darkgrey line-hight">
                            Pooja Jain is a prominent name amongst the young
                            successful Indians in business. As the Managing Director of
                            the Luxor Group; which is a diversified group having business
                            interests in Writing Instruments, stationery products, Real
                            Estate, Hospitality, Fiber Optics, Nano Technology cleaning
                            products for all types of coating surfaces in B2B businesses for
                            glass, solar panels, metal, leather and textile- successfully
                            marked in India as a pioneer, Tablets and Digital office
                            products, with her astounding corporate capabilities, Pooja’s
                            corporate and social work has earned her plenty of laurels.
                        </p>
                    </div>
                    <div className="col-md-2 col-lg-2 pe-lg-2 mt-5 pt-5">
                        <Image
                            src={md_profile}
                            className="img-fluid"
                            alt="Pooja Gupta Profile"
                        />
                    </div>
                </div>

                {/* <div className="row">
                    <div className="col-md-12 col-lg-12 ps-lg-4 mt-4 mt-md-0 align-self-center pt-5 pb-5">
                        <p className="text_justify fs-18 text_darkgrey line-hight">
                            A pioneer in Writing Instruments manufacturing; the industry major has re-invented Brand
                            Luxor and brought world-famous brands like Parker, Schneider, and Waterman under the
                            Group's umbrella to serve the Indian consumer market..<br />
                            Luxor pioneered the Writing Instruments industry in India fifty Four years ago and today it is
                            India's leading Premium fine Writing Brand, since its inception it has added many laurels to
                            its credit, "Best Exporter Award" for twelve consecutive years, Selected Super brand India
                            award, Parker trusted brand award are some of the awards bagged by Luxor. Today we are
                            one of the largest companies in South Asia in our category of writing instruments having a
                            large share of the industry in India.<br />
                            Our aim has been to drive customer satisfaction. We are a company that adapts and grows
                            by upholding some lasting principles
                        </p>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default index;
