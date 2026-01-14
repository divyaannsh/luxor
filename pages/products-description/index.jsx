import React from "react";

import products_description_Banner from "public/assets/Home Page Main Banner/banner1.png";
import PensCategoryImage from "public/assets/Product Categories/Pen.png";
import NotebookCategoryImage from "public/assets/Product Categories/Notebook.png";
import SustainableImg from "public/assets/Product Categories/Sustainable.jpg";
import MarkersImg from "public/assets/Product Categories/Markers.png";
import ArtHobbyImg from "public/assets/Product Categories/Art & Hobby.png";
import HighlighterImg from "public/assets/Product Categories/Highlighter.png";
import KidsColouringImg from "public/assets/Product Categories/Kids Colouring.png";
import ValuePackImg from "public/assets/Product Categories/Value Pack.png";
import Image from "next/image";
import { productCategoryDescriptionUrls } from "products-category-description-urls";

import styles from "../../styles/products-description.module.css";
import { useRouter } from "next/router";

const ProductsCategory = [
  {
    url: PensCategoryImage,
    description: `The epitome of elegance and precision, Luxor Pens unveil a world where every stroke
narrates sophistication. Crafted with meticulous detail and a legacy of excellence, each
pen echoes timeless luxury.`,
    number: "odd",
    link: productCategoryDescriptionUrls.pens,
  },
  {
    url: NotebookCategoryImage,
    description: `The cherished companion of every inspired mind, our notebooks embody excellence on
every page. Crafted with pristine paper and bound with finesse, these notebooks are a
canvas for creativity and learning.`,
    number: "even",
    link: productCategoryDescriptionUrls.notebook,
  },
  {
    url: SustainableImg,
    description: `Luxor's Sustainable Collection heralds a new era of conscious creativity, where innovation
meets eco-consciousness. Our Ecowrite markers embody the spirit of renewal, crafted
from recycled materials and designed for reuse, perpetuating a cycle of sustainability.`,
    number: "odd",
    link: "/",
  },
  {
    url: MarkersImg,
    description: `A realm of artistic precision and versatility, Luxor's range of Markers redefine creative
expression with an exquisite range. From sleek metal markers to vibrant twin markers, each
stroke unveils an unrivaled blend of innovation and finesse.`,
    number: "even",
    link: productCategoryDescriptionUrls.markers,
  },
  {
    url: ArtHobbyImg,
    description: `Introducing a world of Luxor Kids Colouring products, a vibrant haven where imagination
takes flight with a spectrum of creative wonders. From the rich hues of oil pastels to the
playful strokes of wax crayons, each medium invites children into a world of boundless
possibilities.`,
    number: "odd",
    link: productCategoryDescriptionUrls.artHobby,
  },
  {
    url: HighlighterImg,
    description: `Explore a spectrum of creativity with our innovative range of Luxor Highlighters, from the
soft hues of pastel brush to the metallic brilliance of our textliter. Dive into a world of vivid
expression with our fluorescent textliter and pasteliter, designed to make every detail pop.`,
    number: "even",
    link: productCategoryDescriptionUrls.highlighters,
  },
  {
    url: KidsColouringImg,
    description: `Welcome to Luxor Doodles, where creativity knows no bounds and every child's
imagination takes center stage. Our vibrant collection features an array of artistic tools –
from the colourful strokes of wax and plastic crayons to the limitless possibilities of
watercolour cakes.`,
    number: "odd",
    link: productCategoryDescriptionUrls.kidsColoring,
  },
  {
    url: ValuePackImg,
    description: `The treasure trove for every workspace, school, and home, Luxor Value Packs have been
curated with care for your and your kids' diverse needs. Our collection features an
ensemble of pens, pencils, markers, colours, and highlighters—crafted to elevate every
creative pursuit.`,
    number: "even",
    link: productCategoryDescriptionUrls.valuePack,
  },
];

const ProductsDescription = () => {
  const router = useRouter();
  return (
    <div>
      {/* Hero section */}
      <div style={{ width: "100%" }}>
        <Image
          src={products_description_Banner}
          style={{ width: "100%" }}
          width={2000}
          height={650}
          objectFit="fill"
        />
      </div>

      {/* Product-category description section */}
      <div className={styles.product_des_container}>
        {ProductsCategory.map((product) => (
          <div className={styles[product.number]}>
            <div className={styles.descriptionBody}>
              <h6 className="text_justify">{product.description}</h6>
              <div className={styles.btn}>
                <button onClick={() => router.push(product.link)}>
                  Discover
                </button>
              </div>
            </div>
            <div className={styles.imageBody}>
              <Image
                src={product.url}
                width={400}
                height={400}
                objectFit="contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsDescription;
