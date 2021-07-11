import React from "react";
import {graphql, useStaticQuery} from "gatsby";
import {Link} from 'gatsby'


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


    return ( <>
                <nav>
                    <Link activeStyle={{
                        color: "deepskyblue",
                        fontWeight: 700
                    }} exact activeClassName="active" to='/' >Strona główna</Link>
                    <Link activeStyle={{
                        color: "deepskyblue",
                        fontWeight: 700
                    }} to='/szkolenia' >Szkolenia</Link>
                    <Link activeStyle={{
                        color: "deepskyblue",
                        fontWeight: 700
                    }} to='/kalendarz' >Kalendarz Szkoleń</Link>
                    <Link activeStyle={{
                        color: "deepskyblue",
                        fontWeight: 700
                    }} to='/o-nas' >O nas</Link>
                    <Link activeStyle={{
                        color: "deepskyblue",
                        fontWeight: 700
                    }} to='/contact'>Kontakt</Link>
                </nav>
            </>
        )


};

export default Nav;
