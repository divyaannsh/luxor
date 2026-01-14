import ArtGallImage from "@components/ArtGalleryImage";
import { artGalleryContent } from "@utils/artGallImgContent";
import Image from "next/image";
import art_gallery_Banner from "public/assets/images/art-gallery/art_gallery_Banner.png";

import border from "public/assets/images/border.png";

const ArtGallery = () => {
  return (
    <div className="art-gallery-container">
      {/* Hero section */}
      <div style={{ width: "100%" }}>
        <Image
          src={art_gallery_Banner}
          style={{ width: "100%" }}
          width={1900}
          height={650}
          objectFit="cover"
        />
      </div>
      <div class="container">
        <div className="row">
          {artGalleryContent.map((item) => (
            <ArtGallImage
              imgName={item.img}
              heading={item.heading}
              content={item.content}
              vidId={item.vidId}
            />
          ))}
          {/* <div class="col-sm col-md-6 art-gallery-img">
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                display: "flex",
                position: "relative",
              }}
            >
              <Image
                src={first}
                width={500}
                height={500}
                style={{ position: "relative", zIndex: 99 }}
                objectFit="cover"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-15%",
                  left: "-10%",
                }}
                className="border-img"
              >
                <Image src={border} width={150} height={150} />
              </div>
            </div>
            <div className="art-gallery-text">
              <h5>
                Yellow, Green, Blue, Orange, and Pink. Choose your favourite
                coloured Luxor Highlighter.
              </h5>
            </div>
          </div>
          <div class="col-sm col-md-6 art-gallery-img">
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                display: "flex",
                position: "relative",
              }}
            >
              <Image
                src={second}
                width={500}
                height={500}
                style={{ position: "relative", zIndex: 99 }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-15%",
                  left: "-10%",
                }}
                className="border-img"
              >
                <Image src={border} width={150} height={150} />
              </div>
            </div>
            <div className="art-gallery-text">
              <h5>
                Colours can throw life into anything. Add life to your
                imagination with Luxor Colour Sketch Pens.
              </h5>
            </div>
          </div> */}
        </div>
        {/* <div class="row">
          {artGalleryContent.slice(2, artGalleryContent.length).map((item) => (
            <ArtGallImage
              imgName={item.img}
              heading={item.heading}
              content={item.content}
              vidId={item.vidId}
            />
          ))}
          {/* <div class="col-sm col-md-6 art-gallery-img">
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                display: "flex",
                position: "relative",
              }}
            >
              <Image
                src={third}
                width={500}
                height={500}
                style={{ position: "relative", zIndex: 99 }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-15%",
                  left: "-10%",
                }}
                className="border-img"
              >
                <Image src={border} width={150} height={150} />
              </div>
            </div>
            <div className="art-gallery-text">
              <h5>
                One pack. 12 shades. Choose your shade with Luxor Doodles Sketch
                Pens.
              </h5>
            </div>
          </div>
          <div class="col-sm col-md-6 art-gallery-img">
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                display: "flex",
                position: "relative",
              }}
            >
              <Image
                src={fourth}
                width={500}
                height={500}
                style={{ position: "relative", zIndex: 99 }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-15%",
                  left: "-10%",
                }}
                className="border-img"
              >
                <Image src={border} width={150} height={150} />
              </div>
            </div>
            <div className="art-gallery-text">
              <h5>
                We celebrate your boundless curiosity. Your questions light up
                our world, and your wonder fuels the journey of discovery. Keep
                asking, keep dreaming, and keep being you.
              </h5>
            </div>
          </div> */}
        {/* </div> */} 
      </div>
    </div>
  );
};

export default ArtGallery;
