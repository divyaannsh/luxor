import React, { useState } from 'react'

import Image5 from "public/assets/journey/road_journey.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";
import Draggable from "gsap/Draggable";
import jr_one from 'public/assets/journey_images/jr_one_old.png'
import jr_two from 'public/assets/journey_images/jr_two.png'
import jr_three from 'public/assets/journey_images/jr__three.png'
import jr_four from 'public/assets/journey_images/jr_four.jpg'
import jr_five from 'public/assets/journey_images/jr_five.jpg'
// or all tools are exported from the "all" file (excluding members-only plugins):
import { MotionPathPlugin } from "gsap/all";
import Image from 'next/image';

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);


function index() {



    const Visible = (boxid, bannerImage) => {


        let img1 = document.getElementById(boxid)
        img1.style.cursor = "pointer"
        let image_visible = document.getElementById(bannerImage)
        console.log("bannerImagebannerImage", bannerImage)



        if (bannerImage == "jr_circle") {
            let dynamicImage = document.createElement('img');
            dynamicImage.src = jr_one.src
            dynamicImage.width = 180
            dynamicImage.height = 180
            dynamicImage.alt = "intorduced fiber tip"
            dynamicImage.style.display = "block"
            image_visible.innerHTML = ""
            image_visible.append(dynamicImage)
            //  image_visible.append(p)
        }

        if (bannerImage == "jr_circle2") {
            let dynamicImage = document.createElement('img');
            dynamicImage.src = jr_two.src
            dynamicImage.width = 180
            dynamicImage.height = 180
            dynamicImage.alt = "intorduced fiber tip"
            dynamicImage.style.display = "block"
            image_visible.innerHTML = ""
            image_visible.append(dynamicImage)
            //  image_visible.append(p)
        }


        if (bannerImage == "jr_circle3") {
            let dynamicImage = document.createElement('img');
            dynamicImage.src = jr_three.src
            dynamicImage.width = 80
            dynamicImage.height = 80
            dynamicImage.style.display = "block"

            dynamicImage.alt = "intorduced fiber tip"
            image_visible.innerHTML = ""
            image_visible.append(dynamicImage)
            //  image_visible.append(p)
        }


        if (bannerImage == "jr_circle4") {
            let dynamicImage = document.createElement('img');
            dynamicImage.src = jr_four.src
            dynamicImage.width = 30
            dynamicImage.height = 30
            dynamicImage.style.display = "block"
            dynamicImage.alt = "intorduced fiber tip"
            image_visible.innerHTML = ""
            image_visible.append(dynamicImage)
            //  image_visible.append(p)
        }

        if (bannerImage == "jr_circle5") {
            let dynamicImage = document.createElement('img');
            dynamicImage.src = jr_five.src
            dynamicImage.width = 50
            dynamicImage.height = 50
            dynamicImage.style.display = "block"
            dynamicImage.alt = "intorduced fiber tip"
            image_visible.innerHTML = ""
            image_visible.append(dynamicImage)
            //  image_visible.append(p)
        }




        gsap.to(image_visible, {
            cursor: "pointer",
            duration: 0.5,
            width: bannerImage == 'jr_circle3' ? 70 :
                bannerImage == 'jr_circle4' ? 60 :
                    bannerImage == 'jr_circle5' ? 90 :
                        150,
            height: bannerImage == 'jr_circle3' ? 70 : bannerImage == 'jr_circle4' ? 60 :
                bannerImage == 'jr_circle5' ? 90 :
                    150,
            top: bannerImage == 'jr_circle4' ? -6 : 20,
            right: bannerImage == 'jr_circle4' ? -6 : 20,
            border: "5px solid hsla(14, 100%, 53%, 0.2)",
            scale: 2,
            opacity: 1,
            textAlign: "center",
            fontSize: "10px",
            verticalSlign: "middle",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center"
        })

    }


    const Unhide = (boxid, bannerImage) => {
        let image_visible = document.getElementById(bannerImage)



        if (bannerImage == "jr_circle" || bannerImage == "jr_circle2" || bannerImage == "jr_circle3" || bannerImage == "jr_circle4") {
            image_visible.innerHTML = ""

        }




        gsap.to(image_visible, {
            duration: 0.5,
            width: 0,
            height: 0,
            top: 150,
            scale: 2,
            opacity: 0,
        })
    }



    return (

        <div style={{
            position: "relative",

        }}>
            <div style={{
                position: "absolute",
                zIndex: 1,
                width: 800,
                height: 600,
            }}>
                <div id="jr_img1" onMouseEnter={() => Visible('jr_img1', "jr_circle")} onMouseLeave={() => Unhide('jr_img1', "jr_circle")}   >
                    <div id='jr_circle' > </div>  </div>
                <div id="jr_img2" onMouseEnter={() => Visible("jr_img2", "jr_circle2")} onMouseLeave={() => Unhide('jr_img2', "jr_circle2")}     >
                    <div id='jr_circle2' > </div>  </div>
                <div id="jr_img3" onMouseEnter={() => Visible("jr_img3", "jr_circle3")} onMouseLeave={() => Unhide('jr_img3', "jr_circle3")}     >
                    <div id='jr_circle3' > </div>  </div>
                <div id="jr_img4" onMouseEnter={() => Visible("jr_img4", "jr_circle4")} onMouseLeave={() => Unhide('jr_ig4', "jr_circle4")}     >
                    <div id='jr_circle4' > </div>  </div>
                <div id="jr_img5" onMouseEnter={() => Visible("jr_img5", "jr_circle5")} onMouseLeave={() => Unhide('jr_ig5', "jr_circle5")}     >
                    <div id='jr_circle5' > </div>  </div>
            </div>
    //  <Image src={Image5}
                style={{
                    position: "absolute"
                }}

            />
        </div>
    )

}

export default index
