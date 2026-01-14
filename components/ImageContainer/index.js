import React from 'react'
import Image from 'next/image'
import styles from 'styles/hp.module.css'


function ImageContainer({t1, t2 , src } ) {

     return (
    <div className= {styles['image_cont']}>
      <div className={styles['img_abs']}>
        {t1}  <br /> {t2}
       </div> 
     <img  src={src.src} style={{
        backgroundColor: "#565656",
        // color: "transparent",
        width:"350px",
        height:"400px",
        textShadow: "0px 2px 3px rgba(255,255,255,0.5)",
    }} />

    </div>
  )
}

export default ImageContainer