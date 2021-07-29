import React from "react";
import {Link} from 'gatsby'


const Nav = () => {
    return ( <>
                <nav>
                    <Link activeStyle={{
                        color: "darkblue",
                        fontWeight: 700
                    }} activeClassName="active" to='/' >Strona główna</Link>
                    <Link activeStyle={{
                        color: "darkblue",
                        fontWeight: 700
                    }} to='/szkolenia' >Szkolenia</Link>
                    <Link activeStyle={{
                        color: "darkblue",
                        fontWeight: 700
                    }} to='/kalendarz' >Kalendarz Szkoleń</Link>
                    <Link activeStyle={{
                        color: "darkblue",
                        fontWeight: 700
                    }} to='/o-nas' >O nas</Link>
                    <Link activeStyle={{
                        color: "darkblue",
                        fontWeight: 700
                    }} to='/contact'>Kontakt</Link>
                </nav>
            </>
        )


};

export default Nav;
