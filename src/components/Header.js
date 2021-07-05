import React from "react";

import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
    return (
        <header>
            <div className="container">
            <Logo/>
            <Nav/>
            </div>
        </header>
    )
};

export default Header;