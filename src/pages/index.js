import * as React from "react"

import "../scss/main.scss";
import Bestsellers from "../components/Bestsellers";
import BrandInfo from "../components/BrandInfo";
import Template from "../components/Template";

// markup
const IndexPage = () => {
    return (

        <Template>
            <BrandInfo/>
            <Bestsellers/>
            <title>Home Page</title>
        </Template>

    )
};

export default IndexPage;
