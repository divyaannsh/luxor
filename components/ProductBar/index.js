import React from 'react'
import styles from 'styles/productbar.module.css'
import Image1 from 'public/assets/Products School.png'
import { useRouter } from 'next/router'

function index(all_prdcts) {
    let router = useRouter()
    
    return (
    <div className={`${styles["container"]} `}  >
    {all_prdcts.length>0 && all_prdcts.map(ele =>{
         return <React.Fragment>
         <div className={`${styles['product-box']} ${styles['card']} `} onClick={()=> router.push("product/"+ele._id ) } >
        <h3>{ele.name}</h3>
        <div className={`${styles['product-img']} ` } >
            <Image  src={Image1} alt={ele.name} />
        </div>

    </div>

         </React.Fragment>
        })}
</div>
  )
}

export default index