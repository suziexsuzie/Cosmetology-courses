import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Link} from "gatsby";

const Template = ({children}) => (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>

    )
;

export default Template;
