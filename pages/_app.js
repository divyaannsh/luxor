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
import NextNProgress from "nextjs-progressbar";
import "react-modal-video/scss/modal-video.scss";

function MyApp({ Component, pageProps }) {
  const [all_main_cat_wise_prods, set_all_main_cat_wise_prods] = useState([]);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Check online status
    setIsOnline(navigator.onLine);
    
    // Listen for online/offline events
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    // Register service worker
    if ('serviceWorker' in navigator && typeof window !== 'undefined') {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('ServiceWorker registration successful');
        })
        .catch(err => {
          console.log('ServiceWorker registration failed: ', err);
        });
    }

    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Luxor</title>
      </Head>
      <div style={{ overflowX: "hidden" }}>
        {/* Offline Indicator */}
        {!isOnline && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: '#ff6b6b',
            color: 'white',
            textAlign: 'center',
            padding: '8px',
            zIndex: 9999,
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            📱 You're offline - Some features may be limited
          </div>
        )}
        <Header all_main_cat_wise_prods={all_main_cat_wise_prods} />
        <NextNProgress color="#ffffff" />
        <Component {...pageProps} />
      </div>
    </React.Fragment>
  );
}


export default MyApp;
