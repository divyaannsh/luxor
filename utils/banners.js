import metal_pens from "public/assets/Home Page Main Banner/Luxor Banner 5.png";
import highlighters from "public/assets/Home Page Main Banner/Banner-3.jpg";
import whiteboard_markers from "public/assets/Home Page Main Banner/Luxor Banner 6.png";
import arthobby from "public/assets/Home Page Main Banner/art & hobby.jpg";
import pcw from "public/assets/Home Page Main Banner/Post-Consumer-waste.jpg";
import sustainable from "public/assets/Home Page Main Banner/sustainable.jpg";
import notebook from "public/assets/Home Page Main Banner/Luxor Banner 2.jpg";
import valuepack from "public/assets/Home Page Main Banner/Luxor Banner 1.jpg";
import kids from "public/assets/Home Page Main Banner/kids-page-banner.jpg";
import Image from "next/image";

export const productBanners = [
  {
    uid: "6537d24c6c7d38d8e947c8fa",
    img: <Image className="img-fluid" alt="img-fluid" src={metal_pens} />,
  },
  {
    uid: "6537d22343346433a3754325",
    img: <Image className="img-fluid" alt="img-fluid" src={metal_pens} />,
  },
  {
    uid: "653911ba8e6902ca42c1d6e9",
    img: <Image className="img-fluid" alt="img-fluid" src={highlighters} />,
  },
  {
    uid: "653911ce6d8ae7473f9325a7",
    img: <Image className="img-fluid" alt="img-fluid" src={arthobby} />,
  },
  {
    uid: "653911eb04804c4985fe52bb",
    img: (
      <Image
        className="img-fluid"
        alt="img-fluid"
        src={sustainable}
        width={1536}
        height={600}
      />
    ), //eco-write
  },
  {
    uid: "653911fdeb3253e94826bcac",
    img: <Image className="img-fluid" alt="img-fluid" src={notebook} />, //notebook
  },
  {
    uid: "6539120edb6bdba29040cb2c",
    img: <Image className="img-fluid" alt="img-fluid" src={valuepack} />, //value-pack
  },
  {
    uid: "653912399a126cb9bb92f68c",
    img: (
      <Image
        className="img-fluid"
        alt="img-fluid"
        src={kids}
        width={1536}
        height={600}
      />
    ), //kids-colouring
  },
  {
    uid: "653917908eef3ad8ecb0d295",
    img: <Image className="img-fluid" alt="img-fluid" src={pcw} />, //PCW
  },
  {
    uid: "65397048d7b96ccee7f63082",
    img: (
      <Image className="img-fluid" alt="img-fluid" src={whiteboard_markers} />
    ), //white-board markers
  },
  {
    uid: "65397066f05601bf5d55de41",
    img: (
      <Image className="img-fluid" alt="img-fluid" src={whiteboard_markers} />
    ), //white board carekits
  },
  {
    uid: "65397016d2ea5f856977cf94",
    img: (
      <Image className="img-fluid" alt="img-fluid" src={whiteboard_markers} />
    ), // permanent markers
  },
];
