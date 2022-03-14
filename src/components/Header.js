import React from "react";
import {Link} from "react-router-dom";

const Header = ({children}) => {
    return (<header><Link to="/"><img src={children} alt="logo"/></Link></header>);
};

export default Header;
