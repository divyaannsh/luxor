import React, { useEffect, useState, useMemo } from "react";
// import './../assets/'
// import './.assets./css./hp.css'
import { AiOutlineSearch } from "react-icons/ai";
import Image1 from "public/assets/Products School.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { convertToLocalPath, getLocalAssetPath } from "@utils/imageUtils";

import productimg1 from "public/assets/product1.png";
import broadmarker from "public/assets/broadline-marker.png";
import popular1 from "public/assets/popular1.png";
import popular2 from "public/assets/popular2.png";
// import Marker1 from 'public/assets/1'
// import Marker2 from 'public/assets/10.png'
import Mark from "public/assets/mark-wash.webp";
import jarcolour from "public/assets/proImg.png";
import coloring6 from "public/assets/Coloring 6.png";
import coloring24 from "public/assets/Coloring 24.png";

import coloring12 from "public/assets/Coloring 12.png";
// import MarkerT from "public/assets/Non Toxic.png";
import toxic from "public/assets/non-toxic.webp";

import Marker7 from "public/assets/0.png";
import Background from "public/assets/Lineart.png";
import Didyouknow from "public/assets/did you know.webp";
import {
  getCategoryWiseProducts,
  getProductByOnlyId,
  getProductDetail,
} from "../../Actions/action";
import { useRouter } from "next/router";
import styles from "../../styles/product.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productBanners } from "@utils/banners";
import { BASE_URL } from "@utils/api";
import Logo from "public/assets/luxorlogo.png";

// import Products from './Products'

const settings = {
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },

    // Add more breakpoints as needed
  ],
};
const ProductPage = (props) => {
  let router = useRouter();

  // const data = router.query;
  console.log("prod data-->", props.selected_prd_data);

  // Initialize color variants and other images (safe for SSR)
  const color_variants = useMemo(() => {
    if (props.selected_prd_data && props.selected_prd_data.color_variant && Array.isArray(props.selected_prd_data.color_variant)) {
      return props.selected_prd_data.color_variant.filter(
        (item) => !item.hasOwnProperty("isOtherImage")
      );
    }
    return [];
  }, [props.selected_prd_data]);

  const other_images = useMemo(() => {
    if (props.selected_prd_data && props.selected_prd_data.color_variant && Array.isArray(props.selected_prd_data.color_variant)) {
      return props.selected_prd_data.color_variant.filter((item) =>
        item.hasOwnProperty("isOtherImage")
      );
    }
    return [];
  }, [props.selected_prd_data]);

  const [cat_prdcts, setPrd] = useState(props.cat_prd || []);
  const [selected_prd, set_selected_prd] = useState(props.selected_prd_data || {
    root_folder_name: "",
    file_name: "",
    color_variant: [],
  });
  
  // Initialize with server props only to avoid hydration mismatch
  const [pop_picks_array, setPop_picks_array] = useState(props.popular_picks || []);
  const [selectedVariant, setSelectedVariant] = useState(
    color_variants && color_variants.length > 0 ? color_variants[0] : null
  );
  const [isClient, setIsClient] = useState(false);

  // Load sessionStorage data only on client side after hydration
  useEffect(() => {
    setIsClient(true);
    try {
      const sessionStoreData = typeof window !== "undefined" 
        ? JSON.parse(sessionStorage.getItem("pop_picks") || "null")
        : null;
      if (sessionStoreData && Array.isArray(sessionStoreData) && sessionStoreData.length > 0) {
        setPop_picks_array(sessionStoreData.slice(0, 3));
      }
    } catch (e) {
      // Ignore sessionStorage errors
      console.warn("Failed to load sessionStorage data:", e);
    }
  }, []);
  console.log("pop pics-->", pop_picks_array);
  console.log("color-variant==>", selectedVariant);
  const bannerObj = props?.selected_prd_data ? productBanners.find(
    (item) =>
      item.uid == props.selected_prd_data?.category_type ||
      item.uid == props.selected_prd_data?.main_category_type
  ) : null;

  console.log("selected product-->", selected_prd);

  // useEffect(() => {
  //   if (typeof sessionStorage != undefined) {
  //     setPop_picks_array(
  //       JSON.parse(sessionStorage?.getItem("pop_picks")) || []
  //     );
  //   }
  // }, []);

  const getSelectedItems = async (...args) => {
    const [selected_prod_id, main_cat_id] = args;

    let dataModel = {
      selected_prd: {
        _id: selected_prod_id,
      },
      prd_id: main_cat_id,
    };

    getProductByOnlyId(dataModel)
      .then((res) => {
        if (res.status) {
          set_selected_prd(res.result);
        }
      })
      .catch((err) => {
        console.log("some error occured ");
      });
  };

  console.log("product props-->", props);

  // let product_image_files =
  //   props.selected_prd_data.product_root_folder_name &&
  //   Array.isArray(props.selected_prd_data.product_file_names)
  //     ? props.selected_prd_data.product_file_names.map(
  //         (i) =>
  //           process.env.NEXT_PUBLIC_BASE_URL +
  //           "/" +
  //           props.selected_prd_data.product_root_folder_name +
  //           "/" +
  //           i
  //       )
  //     : "";

  let product_image_files = "";
  if (props.selected_prd_data) {
    // Priority 1: Use image field if available (complete path)
    if (props.selected_prd_data.image) {
      product_image_files = convertToLocalPath(props.selected_prd_data.image);
    }
    // Priority 2: Construct from root_folder_name and file_name
    else if (props.selected_prd_data.root_folder_name && props.selected_prd_data.file_name) {
      product_image_files = getLocalAssetPath(
        props.selected_prd_data.root_folder_name,
        props.selected_prd_data.file_name
      ) || "/assets/luxorlogo.png";
    }
  }
  
  // Debug logging
  if (process.env.NODE_ENV === 'development') {
    console.log("Product image path:", product_image_files, "Product:", props.selected_prd_data?.name);
  }

  console.log("product-images-->", product_image_files);
  console.log("selected variant-->", selectedVariant);

  const carouselImgStyle = {
    width: "100%",
  };

  return (
    <>
     

      {/* <div className="prd_container">
        {cat_prdcts.length > 0 &&
          cat_prdcts.map((ele, index) => {
            return (
              <React.Fragment key={`cat-prd-${index}-${ele._id}`}>
                <div
                  className="product-box  prd_card "
                  onClick={() => router.push("product/" + ele._id)}
                >
                  <h3>{ele.name}</h3>
                  <div className="product-img">
                    <Image src={Image1} alt={ele.name} />
                  </div>
                </div>
              </React.Fragment>
            );
          })}
      </div> */}

      {/* 
      <section className="py-5">
        <div className="row flex-nowrap overflow-auto px-4 ">
          {cat_prdcts.length > 0 &&
            cat_prdcts.map((ele) => {
              let image_file = (ele.root_folder_name && ele.file_name) ? process.env.NEXT_PUBLIC_BASE_URL+"/"+ele.root_folder_name+ele.file_name :""

              return (
                <React.Fragment>
                  <div
                    className="col-12 col-sm-6 my-3 col-md-4 col-lg-3  "
                    onClick={() => getSelectedItems(ele._id , ele.product_cat_type._id) }
                  >
                    <div className="card  shadow h-100 border-0 cards_hover">
                      <div className="card-header bg-transparent border-0 p-3">
                      <h3 className="fs-24 text-center">{ele.name}</h3>

                      </div>
                      <div className="card-body d-flex justify-content-center">
                        <div className="align-self-center">
                          <Image src={image_file!=""?image_file:Image1}
                           width={300}
                           
                           height={70}
                           className="img-fluid  position_static min_height h-100"
                           alt={ele.name} />
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
        </div>
      </section>


       */}
      {/* <Products /> */}

      {/* -----------------------------------broadline marker--------------------------------------- */}

      <section className="main-broad-container">
        {/* ---------------------------------------container 1st---------- */}
        <div className="container-fluid">
          <div className="row">
            <div style={{position:"relative"}} className="col-md-3 mb-3 text-center">
              <Image
                className="img-fluid  position_static mt-lg-5 h-100"
                style={{
                  maxHeight: "70vh",
                  objectFit: "contain",
                  width: "90%",
                  marginTop: "-40%"
                }}
                src={
                  selectedVariant && selectedVariant.root_folder_name && selectedVariant.file_name
                    ? getLocalAssetPath(selectedVariant.root_folder_name, selectedVariant.file_name) || "/assets/luxorlogo.png"
                    : product_image_files && product_image_files !== "" && !product_image_files.includes("undefined")
                    ? product_image_files
                    : (props.selected_prd_data?.image 
                        ? convertToLocalPath(props.selected_prd_data.image)
                        : "/assets/luxorlogo.png")
                }
                width={800}
                height={800}
                priority={true}
                alt="Marker"
                loading="eager"
              />
            </div>

            {/* -------------------------container 2nd------------------------ */}
            <div className="col-md-9 mb-3">
              {/* ----------------part 1----- */}
              <div className=" rounded-0">
                <div className="">
                  <h2
                    className="fs-30 fw-700"
                    style={{ textTransform: "uppercase" }}
                  >
                    {selected_prd.name}
                  </h2>

                  <p className="fs-18 text_justify">
                    {selected_prd.description}
                  </p>
                </div>

                {/* ----------------part 2----- */}
                {selected_prd.root_folder_name !==
                  "master_prd_icons/pens/metal_pens/products/" && (
                  <div className="color-cont">
                    <div className="">
                      {props.selected_prd_data.color_variant &&
                      props.selected_prd_data.color_variant.length > 0 ? (
                        <h3 className="fs-24 mt-4">Available Colors</h3>
                      ) : (
                        <h3 className="fs-24 mt-4">No available colors</h3>
                      )}
                    </div>
                    <div className="color-section">
                      <div className="color-shade">
                        {color_variants && color_variants.length > 0 ? (
                          color_variants.map((color) => (
                            <div
                              style={
                                selectedVariant.id === color.id
                                  ? {
                                      padding: "0.1rem",
                                      border: "3px solid black",
                                      borderRadius: "50%",
                                      margin: 0,
                                    }
                                  : { borderWidth: 0 }
                              }
                            >
                              <div
                                className="color-shade2"
                                onClick={() => setSelectedVariant(color)}
                                style={{
                                  backgroundColor: color.hexcode,
                                }}
                              ></div>
                            </div>
                          ))
                        ) : (
                          <></>
                          // <div className="color-section">
                          //   <div className="color-shade">
                          //     <div className="color-shade1"></div>
                          //     <div className="color-shade2"></div>
                          //     <div className="color-shade3"></div>
                          //     <div className="color-shade4"></div>
                          //     <div className="color-shade5"></div>
                          //     <div className="color-shade6"></div>
                          //   </div>
                          //   <div className="para-shade">
                          //     <p>+5 Shades</p>
                          //   </div>
                          // </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* ----------------part 3----- */}
              <div className="row">
                {selected_prd?.stamps && selected_prd?.stamps.length > 0 ? (
                  selected_prd?.stamps.map((stamp) => (
                    <div className="col-md-2 mb-3 " key={`stamp-${stamp}`}>
                      <Image
                        className="img-fluid image_stamp"
                        src={convertToLocalPath(`/stamps/${stamp}`)}
                        alt="images detail"
                        width={200}
                        height={200}
                      />
                    </div>
                  ))
                ) : (
                  <>
                    <div className="col-md-2 mb-3 ">
                      <Image
                        className="img-fluid "
                        src={toxic}
                        alt="images detail"
                      />
                    </div>
                    <div className="col-md-2 mb-3">
                      <Image
                        className="img-fluid"
                        src={Mark}
                        alt="images detail"
                      />
                    </div>
                  </>
                )}

                {/* <div className="col-md-2 mb-3 ">
                  <Image
                    className="img-fluid "
                    src={toxic}
                    alt="images detail"
                  />
                </div>
                <div className="col-md-2 mb-3">
                  <Image className="img-fluid" src={Mark} alt="images detail" />
                </div> */}
              </div>
              {/* ----------------part 4----- */}
              <div style={{ width: "100%", margin: "auto" }}>
                {other_images && other_images.length > 0 ? (
                  <Slider {...settings}>
                    {other_images.map((item, index) => {
                      const otherImageSrc = getLocalAssetPath(item.root_folder_name, item.file_name) || "/assets/luxorlogo.png";
                      return (
                        <div key={`other-img-${index}`}>
                          <Image
                            width={200}
                            height={200}
                            style={{ objectFit: "contain" }}
                            className="img-fluid"
                            src={otherImageSrc}
                            alt={item.file_name || "Product image"}
                            loading="lazy"
                          />
                        </div>
                      );
                    })}
                  </Slider>
                ) : null}

                {/* <Carousel
                  autoPlay={true}
                  showThumbs={false}
                  infiniteLoop={true}
                  interval={2000}
                >
                  <div className="carousel_banner" style={carouselImgStyle}>
                    <div
                      style={{ marginBottom: 10 }}
                      className="row container "
                    >
                      <div
                        className={`col-md-3 text-center mb-4  ${styles.productImgSlider}`}
                      >
                        <img
                          src={jarcolour.src}
                          className="img-fluid"
                          alt="homepage"
                          style={{ width: "100%", height: "222px" }}
                        />
                        <p className="fs-30 fw-600 mt-1">Color Jar</p>
                      </div>
                      <div
                        className={`col-md-3 text-center mb-4 ${styles.productImgSlider}`}
                      >
                        <img
                          src={jarcolour.src}
                          className="img-fluid"
                          alt="homepage"
                          style={{ width: "100%", height: "200px" }}
                        />
                        <p className="fs-30 fw-600 mt-1">Color Jar</p>
                      </div>
                      <div
                        className={`col-md-3 text-center mb-4 ${styles.productImgSlider}`}
                      >
                        <img
                          src={jarcolour.src}
                          className="img-fluid"
                          alt="homepage"
                          style={{ width: "100%", height: "200px" }}
                        />
                        <p className="fs-30 fw-600 mt-1">Color Jar</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel_banner" style={carouselImgStyle}>
                    <div
                      style={{ marginBottom: 10 }}
                      className="row container "
                    >
                      <div
                        className={`col-md-3 text-center mb-4  ${styles.productImgSlider}`}
                      >
                        <img
                          src={jarcolour.src}
                          className="img-fluid"
                          alt="homepage"
                          style={{ width: "100%", height: "222px" }}
                        />
                        <p className="fs-30 fw-600 mt-1">Color Jar</p>
                      </div>
                      <div
                        className={`col-md-3 text-center mb-4 ${styles.productImgSlider}`}
                      >
                        <img
                          src={jarcolour.src}
                          className="img-fluid"
                          alt="homepage"
                          style={{ width: "100%", height: "200px" }}
                        />
                        <p className="fs-30 fw-600 mt-1">Color Jar</p>
                      </div>
                      <div
                        className={`col-md-3 text-center mb-4 ${styles.productImgSlider}`}
                      >
                        <img
                          src={jarcolour.src}
                          className="img-fluid"
                          alt="homepage"
                          style={{ width: "100%", height: "200px" }}
                        />
                        <p className="fs-30 fw-600 mt-1">Color Jar</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel_banner" style={carouselImgStyle}>
                    <div
                      style={{ marginBottom: 10 }}
                      className="row container "
                    >
                      <div
                        className={`col-md-3 text-center mb-4  ${styles.productImgSlider}`}
                      >
                        <img
                          src={jarcolour.src}
                          className="img-fluid"
                          alt="homepage"
                          style={{ width: "100%", height: "222px" }}
                        />
                        <p className="fs-30 fw-600 mt-1">Color Jar</p>
                      </div>
                      <div
                        className={`col-md-3 text-center mb-4 ${styles.productImgSlider}`}
                      >
                        <img
                          src={jarcolour.src}
                          className="img-fluid"
                          alt="homepage"
                          style={{ width: "100%", height: "200px" }}
                        />
                        <p className="fs-30 fw-600 mt-1">Color Jar</p>
                      </div>
                      <div
                        className={`col-md-3 text-center mb-4 ${styles.productImgSlider}`}
                      >
                        <img
                          src={jarcolour.src}
                          className="img-fluid"
                          alt="homepage"
                          style={{ width: "100%", height: "200px" }}
                        />
                        <p className="fs-30 fw-600 mt-1">Color Jar</p>
                      </div>
                    </div>
                  </div>
                </Carousel> */}
                {/*     <div className="row ">
                  <div className="col-md-3 text-center mb-4 ">
                    <Image
                      src={jarcolour}
                      className="img-fluid"
                      alt="homepage"
                    />
                    <p className="fs-12 mt-1">Color Jar</p>
                  </div>
                  <div className="col-md-3 text-center mb-4">
                    <Image
                      className="img-fluid"
                      src={coloring6}
                      alt="homepage"
                    />
                    <p className="fs-12 mt-1">6 Colors</p>
                  </div>
                  <div className="col-md-3 text-center mb-4">
                    <Image
                      className="img-fluid"
                      src={coloring12}
                      alt="homepage"
                    />
                    <p className="fs-12 mt-1">12 Colors</p>
                  </div>
                  <div className="col-md-3 text-center mb-4">
                    <Image
                      className="img-fluid"
                      src={coloring24}
                      alt="homepage"
                    />
                    <p className="fs-12 mt-1">24 Colors</p>
                  </div>
                </div> */}
              </div>
              {/* ----------------part 5-----  */}
              <div className="dyn-cont  flex-column flex-sm-row gap-3">
                <div className="mt-3">
                  <Image
                    className="img-fluid w-30"
                    src={Didyouknow}
                    alt="homepage"
                    width={240}
                    height={200}
                  />
                </div>

                <div className="mt-3">
                  <p
                    style={{ width: "80%", padding: "5px" }}
                    className="fs-16 text_justify"
                  >
                    {selected_prd.did_you_know}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------------- */}

      {/* <section>
        <div className="products">
          <div className="prodBackground">
            <div class="heading1">
              <h2>Popular Picks</h2>
            </div>
          </div>
          <div class="product-container">
            <div class="product-box">
              <div className="product-img">
                <Image src={popular1} alt="homepage" />
              </div>
            </div>
            <div class="product-box">
              <div className="product-img">
                <Image src={popular1} alt="homepage" />
              </div>
            </div>
            <div class="product-box">
              <div className="product-img">
                <Image src={popular2} alt="homepage" />
              </div>
            </div>
          </div>
        </div>

       
      </section> */}
      {pop_picks_array && (
        <section className="">
          <div className="">
            <div className="prodBackground d-none d-md-block mb-md-5">
              <div class=" mt-4">
                <h2
                  className="text-white fs-50 text-center"
                  style={{ fontFamily: "Blackadder ITC Std" }}
                >
                  Popular Picks
                </h2>
              </div>
            </div>
            <div className="color_red py-5 mb-5 mb-md-0 py-md-0">
              <div className="container" style={{ paddingTop: "1rem" }}>
                <h2 className="text-white mb-5 text-center d-md-none ">
                  Popular Picks
                </h2>

                <div className="popular_picks mb-5">
                  {pop_picks_array.map((item) => (
                    <div className="card p-2 border-1">
                      <div className="card-body">
                        <div className="product-img">
                          <Image
                            className="img-fluid"
                            src={
                              item.root_folder_name !== undefined &&
                              item.file_name !== undefined
                                ? getLocalAssetPath(item.root_folder_name, item.file_name) || "/assets/luxorlogo.png"
                                : "/assets/luxorlogo.png"
                            }
                            alt="homepage"
                            width={300}
                            height={300}
                            objectFit="contain"
                            loading="lazy"
                          />
                        </div>
                        <h6 style={{ textAlign: "center", marginTop: 6 }}>
                          {item.name.toUpperCase()}
                        </h6>
                      </div>
                      <p
                        className={styles.popularFont}
                        style={{ textTransform: "uppercase" }}
                      >
                        {item.title}
                      </p>
                    </div>
                  ))}
                  {/* <div className="card p-2 border-0">
                  <div className="card-body">
                    <div className="product-img">
                      <Image
                        className="img-fluid"
                        src={
                          pop_picks_array[1]?.imageURL
                            ? pop_picks_array[1].imageURL
                            : popular2
                        }
                        alt="homepage"
                        width={300}
                        height={300}
                        objectFit="contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <p className={styles.popularFont}>
                    Color by
                    <br />
                    Number
                  </p>
                </div> */}
                  {/* <div className="card p-2 border-0">
                  <div className="card-body">
                    <div className="product-img">
                      <Image
                        className="img-fluid"
                        src={
                          pop_picks_array[2]?.imageURL
                            ? pop_picks_array[2].imageURL
                            : popular1
                        }
                        alt="homepage"
                        width={300}
                        height={300}
                        objectFit="contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <p className={styles.popularFont}>
                    Color by
                    <br />
                    Number
                  </p>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export async function getServerSideProps(context) {
  let { params } = context;

  // let dataModel = {
  //   selected_prd: {
  //     _id: selected_prod_id,
  //   },
  //   prd_id: main_cat_id,
  // };

  // except pen , heighligher and  marker

  // let { status, result } = await getProductByOnlyId(dataModel);
  // console.log(selected_prd_data)

  // let sub_cat_product = await getCategoryWiseProducts(main_cat_id);
  // console.log("_id-->", main_cat_id);
  try {
    console.log("products params-->", params);
    let sub_cat_product = await getProductDetail(params.index[0]);

    return {
      props: {
        selected_prd_data: sub_cat_product.result.product,
        popular_picks: sub_cat_product.result.popular_pics
          ? sub_cat_product.result.popular_pics
          : null,
      },
    };
  } catch (e) {
    return {
      props: {
        selected_prd_data: {
          root_folder_name: "",
          file_name: "",
          color_variant: [],
        },
        popular_picks: null,
      },
    };
  }
  // if (sub_cat_product.status) {
  //   return {
  //     props: {
  //       // cat_prd: sub_cat_product.result
  //       //   ? sub_cat_product.result.cat_wise_products
  //       //   : [],
  //       selected_prd_data: sub_cat_product.result.product,
  //     },
  //   };
  // } else {
  //   return {
  //     redirect: {
  //       destination: "/",
  //       permanent: false,
  //     },
  //   };
  // }
}

export default ProductPage;
