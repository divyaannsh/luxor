import React, { useState } from "react";
import Image14 from "public/assets/org11.png";
import Image15 from "public/assets/org12.png";
import Image16 from "public/assets/org3.png";
import Image from "next/image";

export default function () {
  const [selected, setSelected] = useState("PHOTOS");

  return (
    <React.Fragment>
      <section className="py-5">
        <div className="container">
          <h1 className="fs-40 text-center mb-5 fw-600 ">
            A Woman-Led Organization
          </h1>
          {/* <div className="d-flex justify-content-center mb-2">
            <button
              onClick={() => {
                setSelected("PHOTOS");
              }}
              className={`btn btn_secondary${selected=='PHOTOS' ? '' : '-outline' } me-3 mb-2 fs-16 fw-600 ${selected=='PHOTOS' ? 'text-white':'tetx_lightred'} `}      >
              Photos
            </button>
            <button
              onClick={() => {
                setSelected("VIDEOS");
              }}
              className={`btn btn_secondary${selected=='VIDEOS' ? '' : '-outline' } me-3 mb-2 fs-16 fw-600 ${selected=='VIDEOS' ? 'text-white':'tetx_lightred'} `}
            >
              Videos
            </button>
          </div> */}
          {selected == "PHOTOS" ? (
            <div className="row mt-5">
              <div className="col-md-4 mb-2">
                <Image className="img-fluid" src={Image14} alt="homepage" />
              </div>

              <div className="col-md-4 mb-2">
                <Image className="img-fluid" src={Image15} alt="homepage" />
              </div>

              <div className="col-md-4 mb-2">
                <Image className="img-fluid" src={Image16} alt="homepage" />
              </div>
            </div>
          ) : (
            <div className="row mt-5">
              <div className="col-md-4 mb-2">
                <iframe
                  width="100%"
                  className="rounded"
                  height="300"
                  src="https://www.youtube.com/embed/Sla-7sRFFPg"
                  title="Luxor Video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="col-md-4 mb-2">
                <iframe
                  width="100%"
                  className="rounded"
                  height="300"
                  src="https://www.youtube.com/embed/wUmn96nAnkU"
                  title="Luxor Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="col-md-4 mb-2">
                <iframe
                  width="100%"
                  className="rounded"
                  height="300"
                  src="https://www.youtube.com/embed/zLN-B8qg7FA"
                  title="Luxor Video 3"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </React.Fragment>
  );
}
