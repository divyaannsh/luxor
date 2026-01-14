import React from 'react';
import Image from 'next/image'
import qualitysustainabilityImg from "public/assets/images/quality-page/quality-sustainability.jpg";
import qualityassuranceImg from "public/assets/images/quality-page/quality-assurance.png";
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

function index() {
  return (
    <>
    <div className="quality-sust">
        <Image
          src={qualitysustainabilityImg}
          alt="quality sustainability"
          className="w-100"
        />
    </div>

    <section className="quality-assurance">
        <div className="container">
            <Image
                 src={qualityassuranceImg}  
                 alt="quality sustainability" 
                 className="w-100"
            />
        <p className="mt-3">Luxor is a global leader and trendsetter in the writing and coloring instrument
            space. An obsessive focus on quality, design and suitability ensures that every
            consumer has maximum writing comfort. Our wide range of products caters to a
            variety of needs from students to working executives to artists. In the last fifty-four
            years, this owner-managed-family-run business has grown manifold,
            responsibility and the resultant experience and expertise has made us more
            aware towards our share of the, for our customers and partners.
            </p>
        <p>Quality that you can rely on - that forms the foundation of our manufacturing
            processes and marketing strategies. It is this relentless pursuit of excellence that
            has earned us one of the world's most exacting certifications.</p>
        <p>Dependability, active partnership with our customers, unparalleled and
            impressive product quality and timely delivery are principles on which our ideas
            and actions are based.</p>
        </div>
    </section>

    <section className="certifications pb-5">
        <div className="container">
        <h2 class="fs-40 text-center my-5 fw-600" text_black id="award">Certificates</h2>
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

    </>
  );
}

export default index;