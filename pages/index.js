import dynamic from "next/dynamic";
import React, { useState } from "react";
import {
  allProductsCategory,
} from "../Actions/action";
const HomePage = dynamic(() => import("components/HomePage"), { ssr: false });

function App(props) {
  const [all_prdcts] = useState(props.all_prd);

  return <HomePage all_prdcts={all_prdcts} />;
}

export async function getServerSideProps({ req, res }) {
  try {
    let { result, status } = await allProductsCategory();

    if (status && result.length > 0) {
      return {
        props: {
          all_prd: result,
        },
      };
    }
  } catch (e) {
    // swallow error and return fallback props
  }
  return {
    props: {
      all_prd: [],
      // json: json.result
    },
  };
}

export default App;
