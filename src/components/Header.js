import React from "react";
import {Link} from "react-router-dom";

const Header = ({children}) => {
    return (<header><Link to="/" id={"home"}><img src={children} alt="logo" name="home"/></Link></header>);
};

export default Header;
