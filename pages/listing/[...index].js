import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";

import Header from "@components/header";
import Parker from "public/assets/parker.jpg";
import {
  allProductsCategory,
  getAllGlobalProducts,
  getCategoryWiseProducts,
  getProductByOnlyId,
} from "Actions/action";
import styles from "styles/productbar.module.css";
import Logo from "public/assets/luxorlogo.png";
import { convertToLocalPath, getLocalAssetPath } from "@utils/imageUtils";

import { useRouter } from "next/router";

const index = (props) => {
  let router = useRouter();

  console.log(props.all_prd);

  const [data, setData] = useState({
    page_no: props.page_no,
    total_prd: props.total,
    cat_name: props.cat_name,
    list: props.all_prd,
  });

  console.log("listing-->", data);
  console.log();

  useEffect(() => {
    const pop_picks_data = props.all_prd.map((item) => {
      return {
        name: item.name,
        root_folder_name: item.root_folder_name,
        file_name: item.file_name,
      };
    });

    if (typeof sessionStorage != undefined) {
      sessionStorage.setItem("pop_picks", JSON.stringify(pop_picks_data));
    }
  }, []);

  const { cat_name: category_name } = data;

  const getSelectedItem = async (model) => {
    try {
      // let final_redirect_uri =
      //   "/product/" + model.cat_info._id + "/" + model.prd_id;

      console.log("model-->", model);
      let final_redirect_uri;
      if (model.cat_info.main_category_type) {
        final_redirect_uri =
          "/product/" +
          model.cat_info._id +
          "/" +
          model.cat_info.main_category_type;
      } else {
        final_redirect_uri = "/product/" + model.cat_info._id;
      }
      console.log(final_redirect_uri);
      // router.push(final_redirect_uri);
      router.push(final_redirect_uri);
    } catch (err) {}
  };

  const paginate = (p_n) => {
    const [cat_name, _id] = router.query.index;
    let final_url = "/listing/" + cat_name + "/" + _id + "/" + p_n;
    console.log(final_url);
    if (final_url) router.push(final_url);

    // (async function(){
    //   try{
    //     const [cat_name, _id ] = router.query.index
    //     let { result, status } = await getCategoryWiseProducts(_id, cat_name,p_n);
    //      setData({
    //        ...data , page_no:p_n , list:result.cat_wise_products
    //     })
    //   }catch(err){

    //     alert("some erro occured")
    //   }

    // })()
  };

  const [cat_name, _id, p_n] = router.query.index;

  return (
    <>
      <section className="py-5">
        <div className="">
          {" "}
          {/* removed bootstrap container */}
          <h3 className="mt-2 pb-5 text_black text-center fs-30">
            {props.cat_name}
          </h3>
          <div className="row mt-5">
            <div className="col-md-3 col-lg-2 mb-3">
              <div className="mt-5 p-3">
                <h3>Categories</h3>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        style={{ color: "#fff" }}
                      >
                        Pens
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <a
                          href={
                            "/listing/metal%20pens/6537d22343346433a3754325"
                          }
                        >
                          Metal Pens
                        </a>
                      </div>
                      <div className="accordion-body">
                        <a href="/listing/everyday%20writing/6537d24c6c7d38d8e947c8fa">
                          Everyday Writing
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-body">
                    <a
                      href="/listing/Highlighters/653911ba8e6902ca42c1d6e9"
                      style={{ color: "#000000" }}
                    >
                      Highlighters
                    </a>
                  </div>
                  <div className="accordion-body">
                    <a
                      href="/listing/Art%20&%20Hobby/653911ce6d8ae7473f9325a7"
                      style={{ color: "#000000" }}
                    >
                      Art & Hobby
                    </a>
                  </div>
                  <div className="accordion-body">
                    <a
                      href="/listing/Sustainable/653911eb04804c4985fe52bb"
                      style={{ color: "#000000" }}
                    >
                      Sustainable
                    </a>
                  </div>
                  <div className="accordion-body">
                    <a
                      href="/listing/Notebook%20and%20Stationery/653911fdeb3253e94826bcac"
                      style={{ color: "#000000" }}
                    >
                      Notebook and Stationery
                    </a>
                  </div>
                  <div className="accordion-body">
                    <a
                      href="/listing/Value%20Packs/6539120edb6bdba29040cb2c"
                      style={{ color: "#000000" }}
                    >
                      Value Packs
                    </a>
                  </div>

                  <div className="accordion-item border">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                        style={{ color: "#fff" }}
                      >
                        Markers
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                      style={{ color: "#fff" }}
                    >
                      <div className="accordion-body">
                        <a href="/listing/Permanent%20Markers/65397016d2ea5f856977cf94">
                          Permanent Markers
                        </a>
                      </div>
                      <div className="accordion-body">
                        <a href="/listing/WHITEBOARD%20MARKERS/65397048d7b96ccee7f63082">
                        Whiteboard Markers
                        </a>
                      </div>
                      <div className="accordion-body">
                        <a href="/listing/Whiteboard%20Care%20Kits/65397066f05601bf5d55de41">
                          Whiteboard Care Kits
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-body">
                    <a
                      href="/listing/Kids%20Colouring/653912399a126cb9bb92f68c"
                      style={{ color: "#000000" }}
                    >
                      Kids Colouring
                    </a>
                  </div>
                  {/* <div className="accordion-body">
                    <a
                      href="/listing/PCW/653917908eef3ad8ecb0d295"
                      style={{ color: "#000000" }}
                    >
                      PCW
                    </a>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-md-8 col-lg-9 mb-3 px-md-4 px-lg-5">
              <ul
                className="nav nav-pills mb-3 border-bottom_black pb-1"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active border bg-transparent rounded-0"
                    id="pills-grid-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-grid"
                    type="button"
                    role="tab"
                    aria-controls="pills-grid"
                    aria-selected="true"
                  >
                    <i className="fa-solid fa-grip text_lightgrey"></i>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link border bg-transparent rounded-0"
                    id="pills-list-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-list"
                    type="button"
                    role="tab"
                    aria-controls="pills-list"
                    aria-selected="false"
                  >
                    <i className="fa-solid fa-list-ol text_lightgrey"></i>
                  </button>
                </li>

                {/* navigation  */}

                {p_n && p_n > 1 ? (
                  <ul className="pagination justify-content-center mx-2">
                    <li
                      className="page-item disabled "
                      style={{ cursor: "pointer" }}
                    >
                      <a className="page-link " href="#" tabindex="-1">
                        Previous
                      </a>
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {props.total
                  ? new Array(Math.ceil(props.total / 20))
                      .fill(undefined)
                      .map((item, i) => {
                        return (
                          <React.Fragment key={`page-${i}`}>
                            <ul
                              className="pagination justify-content-center mx-2 "
                              style={{ cursor: "pointer" }}
                            >
                              <li
                                className="page-item"
                                onClick={(e) => paginate(i + 1)}
                              >
                                <a
                                  className={` page-link text-center fs-18 fw-600 rounded-0 button_pagination ${
                                    p_n == i + 1 || (p_n == undefined && i == 0)
                                      ? "active"
                                      : ""
                                  } `}
                                >
                                  {i + 1}
                                </a>
                              </li>
                            </ul>
                          </React.Fragment>
                        );
                      })
                  : ""}

                {/* {
          p_n && p_n==Math.ceil(props.total/20) ?"": 
          <ul className="pagination justify-content-center mx-1">
          <li className="page-item" style={{cursor:"pointer"}}  > 
      <a className="page-link" onClick={()=> paginate(props.page_no?props.page_no+1:2 )   } >Next</a>
    </li>
    </ul>  
        }
                 */}

                {/* <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabindex="-1">Previous</a>
                  </li>
                 
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                  </li>
                </ul> */}
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-grid"
                  role="tabpanel"
                  aria-labelledby="pills-grid-tab"
                >
                  <div className="row mt-4 ">
                    <div className="d-flex flex-wrap m-2">
                      {props.all_prd && props.all_prd.length > 0
                        ? props.all_prd.map((ele, index) => {
                            let image_file = "";
                            
                            // Priority 1: Use image field if available (complete path)
                            if (ele.image) {
                              image_file = convertToLocalPath(ele.image);
                            } 
                            // Priority 2: Construct from root_folder_name and file_name
                            else if (ele.root_folder_name && ele.file_name) {
                              image_file = getLocalAssetPath(ele.root_folder_name, ele.file_name) || Logo.src || "/assets/luxorlogo.png";
                            } 
                            // Priority 3: Fallback to logo
                            else {
                              image_file = Logo.src || "/assets/luxorlogo.png";
                            }
                            
                            // Debug logging
                            if (process.env.NODE_ENV === 'development') {
                              console.log(`Product: ${ele.name}, Image: ${image_file}`);
                            }
                            return (
                              <React.Fragment key={`prd-frag-${index}-${ele._id}`}>
                                <div
                                  className={`col-lg-3 col-md-4 mb-3  ${styles["main_prd"]} ${styles["product-list"]} `}
                                  onClick={() => {
                                    // console.log(ele)
                                    //   getSelectedItem({
                                    //     cat_info: {
                                    //       _id: ele._id,
                                    //       category: ele.category_type
                                    //         ? ele.category_type.category
                                    //         : ele.marker_category_type
                                    //         ? ele.marker_category_type
                                    //             .marker_category
                                    //         : ele.product_cat_type.name,
                                    //     },
                                    //     prd_id: ele.category_type
                                    //       ? ele.category_type._id
                                    //       : ele.marker_category_type
                                    //       ? ele.marker_category_type._id
                                    //       : ele.product_cat_type._id,
                                    //   });
                                    // }}
                                    getSelectedItem(
                                      ele.category_type
                                        ? {
                                            cat_info: {
                                              _id: ele._id,
                                            },
                                          }
                                        : {
                                            cat_info: {
                                              _id: ele._id,
                                              main_category_type:
                                                ele.main_category_type,
                                            },
                                          }
                                    );
                                  }}
                                >
                                  <div className="card shadow border-0 h-100 bg-transparent">
                                    <div className=" card-header border-0 bg-transparent p-3">
                                      <h3 className="fs-20 text_black fw-500">
                                        {" "}
                                        {ele.name}
                                      </h3>
                                    </div>
                                    <div className="card-body  d-flex flex-column justify-content-evenly">
                                      <div className="">
                                        {image_file && image_file !== "" ? (
                                          <Image
                                            width={300}
                                            height={300}
                                            style={{ mixBlendMode: "multiply", objectFit: "contain" }}
                                            className="img-fluid min_height  h-100 position_static"
                                            src={image_file}
                                            alt={ele.name || "Products"}
                                            priority={index < 6}
                                            onError={(e) => {
                                              // Fallback to logo if image fails to load
                                              if (e && e.target) {
                                                e.target.src = Logo.src || "/assets/luxorlogo.png";
                                              }
                                            }}
                                          />
                                        ) : (
                                          <Image
                                            width={300}
                                            height={70}
                                            style={{ mixBlendMode: "multiply" }}
                                            className="img-fluid min_height  h-100 position_static"
                                            objectFit="contain"
                                            src={Logo}
                                            alt={ele.name || "Products"}
                                          />
                                        )}
                                      </div>
                                    </div>
                                    <div className="card-footer bg-transparent border-0">
                                      <p className="fs-14 text_black text-center">
                                        {ele.description.slice(0, 50) + "..."}
                                      </p>

                                      <div className="d-flex my-4 justify-content-center gap-4">
                                        {/* <button className="btn border-0">
                                          <i className=" fa-regular fa-bookmark fs-16 text_lightgrey"></i>
                                        </button>
                                        <button className="btn border-0">
                                          <i className=" fa-solid fa-cart-shopping fs-16 text_lightgrey"></i>
                                        </button> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </React.Fragment>
                            );
                          })
                        : " No record found "}
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-list"
                  role="tabpanel"
                  aria-labelledby="pills-list-tab"
                >
                  <div className="row mt-4">
                    <div className="col-lg-12 col-md-12 mb-3">
                      <div className="card shadow border-0 h-100 bg-transparent">
                        <div className="card-body d-flex flex-row">
                          <div className="">
                            <Image
                              width={450}
                              height={350}
                              className="img-fluid"
                              src={Parker}
                              alt="Parker Pen"
                              priority
                            />
                          </div>
                          <div className="">
                            <p className="fs-24 text_black ">
                              Parker Jotter Standard Ball Pen Blue Body Color...
                            </p>
                            <p className="fs-18 text_black  fw-600">₹300.00</p>
                            <p className="d-flex my-4 justify-content-start gap-4">
                              <button className="btn border-0">
                                <i className=" fa-regular fa-bookmark fs-18 text_lightgrey"></i>
                              </button>
                              <button className="btn border-0">
                                <i className=" fa-solid fa-cart-shopping fs-18 text_lightgrey"></i>
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  let {
    query,
    params: {
      index: [cat_name, _id, page_no],
    },
  } = context;

  try {
    let { result, status } = await getAllGlobalProducts(
      _id,
      page_no ? page_no : 1
    );

    if (status && result && result.cat_wise_products && result.cat_wise_products.length > 0) {
      return {
        props: {
          total: result.total || result.cat_wise_products.length,
          all_prd: result.cat_wise_products,
          page_no: page_no ? parseInt(page_no) : 1,
          cat_name: cat_name || "All Products",
        },
      };
    }
  } catch (e) {
    console.warn("Error fetching products, using fallback:", e);
    // Return fallback with local products
    const { localProducts } = await import("Actions/localData");
    const fallbackProducts = localProducts.map(product => ({
      ...product,
      root_folder_name: product.root_folder_name || (product.image ? product.image.substring(0, product.image.lastIndexOf('/') + 1) : 'assets/new_launches/'),
      file_name: product.file_name || (product.image ? product.image.substring(product.image.lastIndexOf('/') + 1) : ''),
    }));
    
    return {
      props: {
        total: fallbackProducts.length,
        all_prd: fallbackProducts,
        page_no: page_no ? parseInt(page_no) : 1,
        cat_name: cat_name || "All Products",
      },
    };
  }

  // Final fallback - return empty array with defaults
  return {
    props: {
      total: 0,
      all_prd: [],
      page_no: 1,
      cat_name: cat_name || "All Products",
    },
  };
}

export default index;
