import React, {Component} from "react";

class Footer extends Component {
    render() {
        return (<footer>
            <a href={"https://yearn.finance"} target={"_blank"}
               rel="noopener noreferrer">yearn.finance</a>
            <a href={"https://twitter.com/iearnfinance"} target={"_blank"}
               rel="noopener noreferrer">@iearnfinance</a>
            <a href={"https://github.com/pentcle/yearn-fun"} target={"_blank"}
               rel="noopener noreferrer">github</a>
        </footer>);
    }
}

export default Footer;
