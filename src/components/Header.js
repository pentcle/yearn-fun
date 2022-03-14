import React from "react";
import logo from "../images/yearntime.svg";
import {Link} from "react-router-dom";

const Header = () => {
    return (<header>
        <Link to={"/"}><img src={logo} alt="logo"/></Link>
    </header>);
};

export default Header;
