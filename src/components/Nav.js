import React from "react";
import {graphql, useStaticQuery} from "gatsby";

import {Link} from "gatsby";

const Nav = () => {
    const {
        allDatoCmsNavlink : {
            nodes: data
        }
    } = useStaticQuery(graphql`
   {
      allDatoCmsNavlink {
        nodes {
          address
          id
          link
        }
      }
    } `)


    console.log(data);
    return <nav>
        <Link to="/about/">Szkolenia</Link>
        <Link to="/about/">Kalendarz szkoleń</Link>
        <Link to="/about/">O nas</Link>
        <Link to="/faq/">FAQ</Link>
        <Link to="/contact/">Kontakt</Link>
    </nav>
};

export default Nav;
