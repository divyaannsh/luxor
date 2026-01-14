import "../styles/globals.css";
import "../public/assets/css/hp.css";
import "../public/assets/css/prd.css";
import "../public/assets/css/product_animation.css";
import "../styles/journeyandmap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "animate.css/animate.min.css";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "@components/header";
import { getAllCatWiseProducts, getAllPens } from "../Actions/action";
import NextNProgress from "nextjs-progressbar";
import "react-modal-video/scss/modal-video.scss";

function MyApp({ Component, pageProps, all_prd, data }) {
  const [all_main_cat_wise_prods, set_all_main_cat_wise_prods] = useState(data);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Luxor</title>
      </Head>
      <div style={{ overflowX: "hidden" }}>
        <Header all_main_cat_wise_prods={all_main_cat_wise_prods} />
        <NextNProgress color="#ffffff" />
        <Component {...pageProps} />
      </div>
    </React.Fragment>
  );
}

MyApp.getInitialProps = async (appContext) => {
  // Fetch data using Axios
  // let { status, result } = await getAllPens();

  // Pass the data to the component as a prop
  return { data: null };
};

export default MyApp;
