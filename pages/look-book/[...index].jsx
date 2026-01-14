import React from "react";
import { lookBook_data } from "@utils/look-book-data";

import productimg1 from "public/assets/product1.png";
import Image from "next/image";

const index = (props) => {
  let selectedData = null;
  selectedData = lookBook_data.find((item) => item.id == props.id);
  console.log("SelectedData-->", selectedData);
  return (
    <>
      <section className="">
        <div className="productItem-img">
          {selectedData ? (
            selectedData.banner_img ? (
              selectedData.banner_img
            ) : (
              <Image className="img-fluid" alt="img-fluid" src={productimg1} />
            )
          ) : (
            <Image className="img-fluid" alt="img-fluid" src={productimg1} />
          )}
          {/* {<Image className="img-fluid" alt="img-fluid" src={productimg1} />} */}
        </div>
      </section>
      {selectedData.content_JSX}
    </>
  );
};

export async function getServerSideProps(context) {
  const id = context.query.index[0];
  return {
    props: {
      id,
    },
  };
}

export default index;
