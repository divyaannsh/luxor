// import { redirect } from 'next/navigation'
// import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import Image from "next/image";
import {
  allProductsCategory,
  newProductCategory,
  newProductSubCategory,
} from "Actions/action";
import Logo from "public/assets/luxorlogo.png";
import { useRouter } from "next/router";
import styles from "styles/productbar.module.css";

import { SelectPicker } from "rsuite";
import { getCookie, hasCookie, setCookie } from "cookies-next";

const Header = (props) => {
  // let all_prd =props.all_prdcts
  let router = useRouter();
  const [all_prd, set_all_prd] = useState([]);
  const [language, setLanguage] = useState("");
  const [searchedString, setSearchedString] = useState("");
  const [all_main_cat_wise_prods, set_all_main_cat_wise_prods] = useState([]);

  // Removed debug console.log to prevent spam

  const [filtered_main_cat_wise_prods, set_filtered_main_cat_wise_prods] =
    useState([]);

  const [selected, setSelected] = useState("en");

  useEffect(() => {
    // Disable Google Translate to prevent stack overflow
    // var addScript = document.createElement("script");
    // addScript.setAttribute(
    //   "src",
    //   "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    // );
    // document.body.appendChild(addScript);
    // window.googleTranslateElementInit = googleTranslateElementInit;

    if (hasCookie("googtrans")) {
      setSelected(getCookie("googtrans"));
    } else {
      setSelected("/auto/en");
    }
  }, []);

  useEffect(() => {
    if (props.all_main_cat_wise_prods) {
      set_all_main_cat_wise_prods(props.all_main_cat_wise_prods);
    }
  }, [props.all_main_cat_wise_prods]);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "auto",
        autoDisplay: false,
        includedLanguages: "ru,en,es,fr,ja", // If you remove it, by default all google supported language will be included
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };

  
  const langChange = (evt, e) => {
    evt.preventDefault();
    if (hasCookie("googtrans")) {
      setCookie("googtrans", decodeURI(e));
      setSelected(e);
    } else {
      setCookie("googtrans", e);
      setSelected(e);
    }
    window.location.reload();
  };

  useEffect(() => {
    (async function () {
      try {
        // let { result, status } = await allProductsCategory();
        let { result, status } = await newProductCategory();
        let response = await newProductSubCategory();

        const categories = Array.isArray(result) ? result : [];
        const subCategories = Array.isArray(response?.result) ? response.result : [];

        const new_cat_data = categories.map((cat) => {
          const selected_sub_cat = subCategories.filter(
            (sub_cat) => cat._id === sub_cat.product_category_type
          );
          if (selected_sub_cat.length > 0) {
            return { ...cat, _doc: selected_sub_cat };
          } else {
            return cat;
          }
        });

        if (status) set_all_prd(new_cat_data);
      } catch (e) {
        // ignore offline/network errors
      }
    })();
  }, []); // Run only once on mount

  const searchHanlder = () => {
    console.log("SearchString-->", searchedString);
    const filtered_cat_wise_prods = all_main_cat_wise_prods.filter((item) =>
      item.name.toLowerCase().includes(searchedString.toLowerCase())
    );
    set_filtered_main_cat_wise_prods(filtered_cat_wise_prods.slice(0, 5));
  };

  useEffect(() => {
    if (searchedString != "" && searchedString) {
      searchHanlder();
    }
  }, [searchedString]);

  // console.log("filtered_Data-->", filtered_main_cat_wise_prods);

  // console.log("language-->", language);

  const goToProductPage = (item, current_id, sub_category) => {
    let closeButton = document.getElementById("close_button");
    closeButton.addEventListener("click", () => console.log(" clicked "));

    let final_url = "";
    if (item._doc) {
      // pen or marker
      final_url = "/listing/" + sub_category + "/" + current_id;
      if (final_url) router.push(final_url);

      // console.log(final_url)
    } else {
      // except pen and marker
      const { _id, name: category_name } = item;
      final_url = "/listing/" + category_name + "/" + _id;
      router.push(final_url);
    }
  };
  const goToListingPage = (item) => {
    let closeButton = document.getElementById("close_button");
    closeButton.addEventListener("click", () => console.log(" clicked "));

    let final_url = "";
    if (item._doc) {
      // pen or marker
      final_url = "/listing/" + item.name.toLowerCase() + "/" + item._id;
      if (final_url) router.push(final_url);

      // console.log(final_url)
    } else {
      // except pen and marker
      const { _id, name: category_name } = item;
      final_url = "/listing/" + category_name + "/" + _id;
      router.push(final_url);
    }
  };

  const handleSearchButton = () => {
    if (filtered_main_cat_wise_prods.length === 1) {
      router.push(`/product/${filtered_main_cat_wise_prods[0]._id}`);
    }
  };

  const languages = [
    { label: "English", value: "/auto/en" },
    { label: `Russian`, value: "/auto/ru" },
    { label: "Spanish", value: "/auto/es" },
    { label: "French", value: "/auto/fr" },
    { label: "Japanese", value: "/auto/ja" },
  ];

  return (
    <React.Fragment>
      {/* <header className='header'>
                <Link href='/' className='logo'>
                    <img src='https://luxorpen.com/images/logo/logo.png' />
                </Link>
                <div className='search'>
                    <input className='inputData' placeholder='Search' />
                    <AiOutlineSearch className='searchIcon' />
                    <select className='selectData' onChange={(e) => { }}>
                        <option value="">Lang</option>
                        <option value="Enh">English</option>
                        <option value="Hin">Hindi</option>
                    </select>
                </div>
            </header> */}
      <nav className="navbar navbar-light d-none d-lg-block bg_red">
        <div className="container d-block">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <a href="/" className="logo">
                <span className="">
                  <Image src={Logo} alt="Logo" className="img-fluid w-100 " width={250} height={50} objectFit="contain" />
                </span>
              </a>
            </div>
            <div className="d-flex">
              <div className="">
                <form className="d-flex">
                  <input
                    list="filtered_main_cat_wise_prods"
                    className="form-control me-2 input_field"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(e) => setSearchedString(e.target.value)}
                  />
                  {searchedString !== "" && (
                    <datalist id="filtered_main_cat_wise_prods">
                      {filtered_main_cat_wise_prods.map((item, ind) => {
                        return <option value={item._id}>{item.name}</option>;
                      })}
                    </datalist>
                  )}
                  <button
                    className="btn me-2 shadow-none border bg-white"
                    type="button"
                    onClick={handleSearchButton}
                  >
                    <i className="fa-solid  fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
              <div>
                <select
                  value={selected}
                  className="form-select selectData shadow-none input_field notranslate"
                  onChange={(e) => langChange(e, e.target.value)}
                >
                  <option value="en">Select Language</option>
                  {languages.map((t, ind) => {
                    return <option key={`lang-${ind}`} value={t.value}>{t.label}</option>;
                  })}
                </select>
                {/*  <>
                  <div
                    id="google_translate_element"
                    style={{
                      width: "0px",
                      height: "0px",
                      position: "absolute",
                      left: "50%",
                      zIndex: -99999,
                    }}
                  ></div>
                  <SelectPicker
                    data={languages}
                    style={{ width: 100 }}
                    placement="bottomEnd"
                    cleanable={false}
                    value={selected}
                    searchable={false}
                    className={"notranslate"}
                    menuClassName={"notranslate"}
                    onSelect={(e, m, evt) => langChange(e, m, evt)}
                    placeholder="Lang"
                  />
                </> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container ">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav align-self-center pt-2 d-flex justify-content-between w-100 d-flex gap-3">
              <li className="nav-item ">
                <Link href="/" className="fs-16 text_black">
                  <a className="text_black ahover">Home</a>
                </Link>
              </li>
              <div className="dropdown">
                <li
                  className="dropdown nav-item"
                  onClick={() => router.push("/overview")}
                >
                  <a
                    className="ahover btn dropdown-toggle pt-0"
                    type="button"
                    id="dropdownProduct"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Overview
                  </a>
                </li>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li
                    className={`d-block ${styles["main_prd"]}`}
                    onClick={() => router.push("/leadership")}
                  >
                    <a className="dropdown-item fs-16 text_black ahover">
                      {/* {item._doc.name} */}
                      {/* {item.name} */}
                      Leadership
                    </a>
                  </li>
                  <li
                    className={`d-block ${styles["main_prd"]}`}
                    onClick={() => router.push("/quality")}
                  >
                    <a className="dropdown-item fs-16 text_black ahover">
                      {/* {item._doc.name} */}
                      {/* {item.name} */}
                      Quality
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div className="dropdown">
                <Link
                  className="btn dropdown-toggle text_black fs-16 p-0 border-0 shadow-none"
                  type="button"
                  id="dropdownabout"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  role="button"
                  href={"/about"}
                >
                  <p style={{ cursor: "pointer" }}>About Us</p>
                </Link>

                <ul className="dropdown-menu" aria-labelledby="dropdownabout">
                  <li>
                    <a className="dropdown-item fs-16 text_black" href="/about">
                      About Us
                    </a>
                  </li>
                  <hr className="dropdown-divider ms-3 me-3"></hr>
                  <li>
                    <a className="dropdown-item fs-16 text_black" href="#">
                      Vision
                    </a>
                  </li>
                  <hr className="dropdown-divider ms-3 me-3"></hr>
                  <li>
                    <a className="dropdown-item fs-16 text_black" href="#">
                      Mission
                    </a>
                  </li>
                  <hr className="dropdown-divider ms-3 me-3"></hr>
                  <li>
                    <a className="dropdown-item fs-16 text_black" href="#">
                      Milestone
                    </a>
                  </li>
                </ul>
              </div> */}
              <div className="dropdown">
                <li
                  className="dropdown nav-item"
                  onClick={() => router.push("/products-description")}
                >
                  <a
                    className="btn dropdown-toggle pt-0 ahover"
                    type="button"
                    id="dropdownProduct"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Product
                  </a>
                </li>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  {all_prd.length > 0 &&
                    all_prd.map((item, ind) => {
                      if (item._doc) {
                        return (
                          <li
                            className={`d-block ${styles["main_prd"]}`}
                            onClick={(e) => {
                              debugger;
                              goToListingPage(item);
                            }}
                          >
                            <a className="dropdown-item fs-16 text_black ahover">
                              {/* {item._doc.name} */}
                              {item.name}
                            </a>
                            <ul className="dropdown-menu dropdown-submenu dropdown-submenu-left">
                              {item._doc &&
                                item._doc.length > 0 &&
                                item._doc.map((ele) => {
                                  return (
                                    <React.Fragment>
                                      <li
                                        onClick={(e) => {
                                          debugger;
                                          e.stopPropagation();
                                          goToProductPage(
                                            item,
                                            ele._id,
                                            ele.category
                                              ? ele.category
                                              : ele.category
                                          );
                                        }}
                                      >
                                        <a className="dropdown-item ahover">
                                          {ele.category
                                            ? ele.category.toLowerCase()
                                            : ""}
                                        </a>
                                      </li>
                                      <hr className="dropdown-divider ms-3 me-3" />
                                    </React.Fragment>
                                  );
                                })}
                            </ul>
                          </li>
                        );
                      } else {
                        return (
                          <li
                            className={`d-block ${styles["main_prd"]} `}
                            onClick={() => goToProductPage(item)}
                          >
                            <a className="dropdown-item fs-16 text_black ahover">
                              {item.name}
                            </a>
                          </li>
                        );
                      }
                    })}
                </ul>
              </div>
              <li className="nav-item">
                <Link href="/events">
                  <a className="fs-16 text_black ahover">Events</a>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="fs-16 text_black ahover"
                  href="/assets/luxor-flip/index.html"
                >
                  E- Catalogue
                </a>
              </li>

              <li className="nav-item">
                <Link href="/media">
                  <a className="fs-16 text_black ahover">Media</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/art&gallery">
                  <a className="fs-16 text_black ahover">Art Gallery</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/career">
                  <a className="fs-16 text_black ahover">Career</a>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="fs-16 text_black ahover"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/contact");
                  }}
                  href=""
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="d-lg-none py-3 bg-white">
        <div className="container">
          <div className="d-flex justify-content-between">
            <a href="/" className="">
              <span className="">
                <Image
                  width="200"
                  height="50"
                  src={Logo}
                  alt="logo2"
                  className="img-fluid"
                />
              </span>
            </a>
            <button
              id="close_button"
              className="btn border-0 bg_black  px-3 shadow-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              <i className="fa-solid text-white fa-bars fs-24 fw-700"></i>
            </button>
          </div>

          <div
            className="offcanvas offcanvas_toggle offcanvas-start"
            data-bs-scroll="true"
            tabIndex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div className="offcanvas-header">
              <a href="/">
                <Image
                  width="200"
                  height="50"
                  alt="logo2"
                  className="img-fluid mt-0 "
                  src={Logo}
                />
              </a>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <li className="nav-item">
                <a className="fs-16 text_black p-2" href="/">
                  Home
                </a>
              </li>
              <div className="dropdown">
                <a
                  className="btn dropdown-toggle p-2 border-0 shadow-none"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Overview
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li className="d-block">
                    <a className="dropdown-item fs-16 text_black" href="/overview">
                    Overview
                    </a>
                  </li>

                  <li className="d-block">
                    <a className="dropdown-item fs-16 text_black" href="/leadership">
                    Leadership
                    </a>
                  </li>

                  <li className="d-block">
                    <a className="dropdown-item fs-16 text_black" href="/quality">
                    Quality
                    </a>
                  </li>
                </ul>
              </div>
              <li className="dropdown nav-item">
                <a
                  className="nav-link text-start dropdown-toggle btn fs-16 text_black p-2"
                  href="#"
                  id="product-dropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  {all_prd.length > 0 &&
                    all_prd.map((item, ind) => {
                      if (item._doc) {
                        return (
                          <li
                            key={`prd-${ind}-${item._doc._id}`}
                            className={`d-block ${styles["main_prd"]}`}
                            onClick={(e) => {
                              debugger;
                              goToListingPage(item);
                            }}
                          >
                            <a className="dropdown-item fs-16 text_black">
                              {item._doc.name}
                            </a>
                            <ul className="dropdown-menu dropdown-submenu dropdown-submenu-left">
                              {item._doc &&
                                item._doc.length > 0 &&
                                item._doc.map((ele, ind) => {
                                  return (
                                    <React.Fragment key={`header-doc-2-${ind}-${ele._id}`}>
                                      <li
                                        className="dropdown-item dropdown-submenu-left"
                                        onClick={(e) => {
                                          debugger;
                                          e.stopPropagation();
                                          goToProductPage(
                                            item,
                                            ele._id,
                                            ele.category
                                              ? ele.category
                                              : ele.category
                                          );
                                        }}
                                      >
                                        {ele.name}
                                      </li>
                                    </React.Fragment>
                                  );
                                })}
                            </ul>
                          </li>
                        );
                      } else {
                        return (
                          <li
                            className={`d-block ${styles["main_prd"]} `}
                            onClick={() => goToProductPage(item)}
                          >
                            <a className="dropdown-item fs-16 text_black">
                              {item.name}
                            </a>
                          </li>
                        );
                      }
                    })}
                </ul>
              </li>
              <li className="nav-item">
                <a className="fs-16 text_black p-2" href="/assets/luxor-flip/index.html">
                  E- Catalogue
                </a>
              </li>

              <li className="nav-item">
                <a className="fs-16 text_black p-2" href="/media">
                  Media
                </a>
              </li>
              <li className="nav-item">
                <a className="fs-16 text_black p-2" href="/art&gallery">
                  Art Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="fs-16 text_black p-2" href="/career">
                  Career
                </a>
              </li>
            </div>
          </div>
        </div>
      {/* <nav className='navbar'>
                <ul>
                    <li>
                        <a  >
                            <select className="aboutus" defaultValue="" onChange={e => window.location.href = e.target.value}>
                                <option value="" disabled> choose </option>
                                <option value="about"> About Us  </option>
                                <option value="contact"> Contact Us  </option>
                                <option value="Vision">Vision</option>
                                <option value="Mission">Mission</option>
                                <option value="Milstone">Milstone</option>
                            </select>
                        </a>
                    </li>
                </ul>
            </nav> */}
        </div>
    </React.Fragment>
  );
};

// export async function getServerSideProps({ req, res }) {

//     let {result , status } = await allProductsCategory()
//     console.log("statusstatus" ,result)

//     if(status && result.length>0){
//         return {
//             props: {
//                 all_prd:result
//             }
//           }
//     }else{

//     }
//     return {
//       props: {
//         all_prd: [],
//         // json: json.result
//       }
//     }

//   }

export default Header;
