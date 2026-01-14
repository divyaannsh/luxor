import Image from "next/image";
import React from "react";
import EventBanner from "public/assets/images/events/event-banner.jpg";
import gallery1 from "public/assets/images/events/1.jpg";
import gallery2 from "public/assets/images/events/2.jpg";
import gallery3 from "public/assets/images/events/3.jpg";
import gallery4 from "public/assets/images/events/4.jpeg";
import gallery5 from "public/assets/images/events/5.jpeg";
import gallery6 from "public/assets/images/events/6.jpeg";
import gallery7 from "public/assets/images/events/7.jpeg";
import gallery8 from "public/assets/images/events/8.jpeg";
import gallery9 from "public/assets/images/events/9.jpeg";


const index = () => {
  return (
    <div className="events-container">
      <section>
        <div>
          <Image src={EventBanner} alt="banner" className="w-100 img-fluid" />
        </div>
      </section>
      <section className="container">
        <div className="event-content-container">
          <div className="event-title">
            <h1>Exhibition Around The World</h1>
          </div>
          {/* <div className="event-sub-heading text_black">
            <h3>
              Paperworld, the biggest trade fair for the Stationery, Back to
              School Supplies, and Writing Instruments Industry.
            </h3>
          </div> */}
          <div className="event-description text_black">
            <p>
              Luxor's presence at exhibitions around the globe is a testament to its leadership in the stationery industry. As a global trendsetter, Luxor continually redefines innovation and excellence in writing instruments and office supplies. From India's dynamic trade shows to international platforms like Paperworld and EScloar, Luxor consistently captures the attention of industry leaders and professionals, offering a comprehensive solution for all stationery needs. Each exhibition is not just a showcase but a celebration of Luxor's commitment to quality and its influence on the future of stationery worldwide.
            </p>
          </div>
        </div>
        <div className="event-gallery-container row">
        <h1 className="event-title text_black event-content-container">Paper World Exhibition        </h1>
          <div className="col-sm">
            <Image src={gallery1} />
          </div>
          <div className="col-sm">
            <Image src={gallery2} />
          </div>
          <div className="col-sm">
            <Image src={gallery3} />
          </div>
        </div>
        <div className="event-gallery-container row">
        <h1 className="event-title text_black event-content-container">EScolar</h1>
          <div className="col-sm">
            <Image height={'900px'} src={gallery4} />
          </div>
          <div className="col-sm">
            <Image height={70} src={gallery5} />
          </div>
          <div className="col-sm">
            <Image height={70} src={gallery6} />
          </div>
        </div>
        <div className="event-gallery-container row">
          <div className="col-sm">
            <Image height={'1150px'} src={gallery7} />
          </div>
          <div className="col-sm">
            <Image height={70} src={gallery8} />
          </div>
          <div className="col-sm">
            <Image height={70} src={gallery9} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
