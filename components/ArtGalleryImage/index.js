import React, { useState } from "react";
import border from "/public/assets/images/border.png";
import Image from "next/image";

const ArtGallImage = ({ imgName, content, vidId, heading }) => {
  const [isOpen, setOpen] = useState(false);
  const localVideoId = vidId ? String(vidId).split("?")[0] : "";
  const localVideoSrc = localVideoId ? `/assets/videos/${localVideoId}.mp4` : "";
  return (
    <>
      <div className="row align-items-center" style={{marginTop:"12%"}}>
        <div className="col-lg-6 col-md-12 position-relative" >
          <Image
            src={imgName}
            width={600}
            height={350}
            objectFit="contain"
            style={{ position: "relative", zIndex: 99, cursor: "pointer",objectFit:'contain !important' }}
            onClick={() => setOpen(true)}
          />

          <div
            style={{
              position: "absolute",
              zIndex: 999,
              bottom: "-23%",
              left:"10%"
            }}
            className="border-img"
          >
            <Image src={border} width={150} height={150} />
          </div>

        </div>
        <div className="col-lg-5 col-md-12" style={{alignSelf:"flex-start"}}>
          <h3 className="headingArtgallery">{heading}</h3> 
          <h5 className="text_align">{content}</h5>
        </div>
      </div>
      {vidId && isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
          }}
          onClick={() => setOpen(false)}
        >
          <div
            style={{
              width: "min(900px, 95vw)",
              background: "#000",
              borderRadius: 8,
              overflow: "hidden",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "flex-end", padding: 8 }}>
              <button
                type="button"
                onClick={() => setOpen(false)}
                style={{
                  background: "transparent",
                  border: 0,
                  color: "#fff",
                  fontSize: 18,
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>
            <video
              controls
              autoPlay
              style={{ width: "100%", height: "auto", display: "block" }}
              src={localVideoSrc || "/assets/videos/journey.mp4"}
            />
          </div>
        </div>
      )}

      {/* <div class="col-sm col-md-6 art-gallery-img">
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            display: "flex",
            position: "relative",
          }}
        >
          <Image
            src={imgName}
            width={500}
            height={500}
            style={{ position: "relative", zIndex: 99, cursor: "pointer" }}
            onClick={() => setOpen(true)}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-15%",
              left: "5%",
            }}
            className="border-img"
          >
            <Image src={border} width={150} height={150} />
          </div>
        </div>
          
        <div className="art-gallery-text">
          
        <h3 className="headingArtgallery">{heading}</h3>
          
          <h5>{content}</h5>
        </div>
      </div>
      {vidId && (
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId={vidId}
          youtube={{ mute: 0, autoplay: true }}
          onClose={() => setOpen(false)}
        />
      )} */}
    </>
  );
};

export default ArtGallImage;
