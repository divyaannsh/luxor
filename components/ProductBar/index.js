import React from 'react'
import styles from 'styles/productbar.module.css'
import Image1 from 'assets/Products School.png';
import { useRouter } from 'next/router'

function index(all_prdcts) {
    let router = useRouter()
    
    return (
    <div className={`${styles["container"]} `}  >
    {all_prdcts.length>0 && all_prdcts.map((ele, index) => {
                return <React.Fragment key={`prd-${index}`}>
                  <div className={`${styles['product-box']} ${styles['card']} `} onClick={()=> router.push("product/"+ele._id ) } >
                    <Image1 src={Image1} alt="product" className="img-fluid" />
                    <h6 className="text-center mt-2">{ele.name}</h6>
                  </div>
                </React.Fragment>
            })}
</div>
  )
}

export default index