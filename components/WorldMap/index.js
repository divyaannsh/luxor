import React from "react";
import usa from "public/assets/images/usa.webp";
import egypt from "public/assets/egypt.png";
import india from "public/assets/india.png";
import china from "public/assets/china.png";
import russia from "public/assets/russia.png";
import brazil from "public/assets/brazil.png";
import uae from "public/assets/uae.png";

import Worldmap from "public/assets/World_Map.png";
import Image from "next/image";
import styles from "./worldMap.module.css";

export default function WorldMap() {
  const imageStyle = {
    height: "100vh",
    width: "100vw",
    objectFit: "contain",
    marginBottom: "2rem",
  };

  return (
    <React.Fragment>
      <div className="position-relative">
        <div className="f1">
          <Image src={usa} className={styles.imageStyle} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">USA</p>
            <h1 className="text-light c1"></h1>
          </div>
        </div>
        <div className="f2">
          <Image className="" src={usa} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">USA</p>
            <h1 className="text-light c1"></h1>
          </div>
        </div>
        <div className="f3">
          <Image className="" src={usa} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">USA</p>
            <h1 className="text-light c1"></h1>
          </div>
        </div>
        <div className="f4">
          <Image className="" src={brazil} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">BRAZIL</p>
            <h1 className="text-light c1"></h1>
          </div>
        </div>
        <div className="f5">
          <Image className="" src={brazil} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">BRAZIL</p>
            <h1 className="text-light c1"></h1>
          </div>
        </div>
        <div className="f6">
          <Image className="" src={egypt} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">EGYPT</p>
            <h1 className="text-light c1"></h1>
          </div>
        </div>
        <div className="f7">
          <Image className="" src={egypt} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">EGYPT</p>
            <h1 className="text-light c1"></h1>
          </div>
        </div>
        <div className="f8">
          <Image className="" src={egypt} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">EGYPT</p>
          </div>
        </div>
        <div className="f9">
          <Image className="" src={egypt} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">EGYPT</p>
            <h1 className="text-light c1"></h1>
          </div>
        </div>
        <div className="f10">
          <Image className="" src={egypt} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">EGYPT</p>
            <h1 className="text-light c1"></h1>
          </div>
        </div>
        <div className="f11">
          <Image className="" src={uae} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">UAE</p>
            <h1 className="text-light c1"></h1>
          </div>
        </div>
        <div className="f12">
          <Image className="" src={uae} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">UAE</p>
            <h1 className="text-light c1"></h1>
          </div>
        </div>
        <div className="f13">
          <Image className="" src={uae} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">UAE</p>
            <h1 className="text-light c1"></h1>
          </div>
        </div>
        <div className="f14">
          <Image className="" src={uae} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">UAE</p>
            <h1 className="text-light c1"></h1>
          </div>
        </div>
        <div className="f15">
          <Image className="" src={uae} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">UAE</p>
            <h1 className="text-light c1"></h1>
          </div>
        </div>
        <div className="f16">
          <Image className="" src={russia} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">RUSSIA</p>
            <h1 className="text-light c1"></h1>
          </div>
        </div>
        <div className="f17">
          <Image className="" src={russia} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">RUSSIA</p>
            <h1 className="text-light c1"></h1>
          </div>
        </div>
        <div className="f18">
          <Image className="" src={russia} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">RUSSIA</p>
            <h1 className="text-light c1"></h1>
          </div>
        </div>
        <div className="f19">
          <Image className="" src={china} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">CHINA</p>
          </div>
        </div>
        <div className="f20">
          <Image className="" src={china} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">CHINA</p>
            <h1 className="text-light c1"></h1>
          </div>
        </div>

        <div className="f21">
          <Image className="" src={china} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">CHINA</p>
          </div>
        </div>
        <div className="f22">
          <Image className="" src={india} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">INDIA</p>
            <h1 className="text-light c1"></h1>
          </div>
        </div>
        <div className="f23">
          <Image className="" src={india} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">INDIA</p>
            <h1 className="text-light c1"></h1>
          </div>
        </div>
        <div className="f24">
          <Image className="" src={usa} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">USA</p>
            <h1 className="text-light c1"></h1>
          </div>
        </div>
        <div className="f25">
          <Image className="" src={usa} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">USA</p>
            <h1 className="text-light c1"></h1>
          </div>
        </div>
        <div className="f26">
          <Image className="" src={usa} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">USA</p>
            <h1 className="text-light c1"></h1>
          </div>
        </div>
        <div className="f27">
          <Image className="" src={usa} />
          <div>
            <h3 className="text-light c1"></h3>
            <p className="text-light c1">USA</p>
            <h1 className="text-light c1"></h1>
          </div>
        </div>
        <div className="world-map-section">
          <img src={Worldmap.src} className={styles.imageStyle} />
        </div>
      </div>
    </React.Fragment>
  );
}
