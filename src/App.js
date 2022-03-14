import React from 'react';
import logo from './images/yearnoclock.svg';
import './scss/app.scss';

class App extends React.Component {

    render() {
        return (<main className="App">
                <header className="align-left">
                    <a href={"https://yearn.finance"} target={"_blank"}
                       rel="noopener noreferrer"><img src={logo} className={"logo"} alt="logo"/></a>
                    <div><h1 className={"align-center"}>yearn oclock</h1></div>
                    <div></div>
                </header>
            <footer>
                <a href={"https://yearn.finance"} target={"_blank"}
                   rel="noopener noreferrer">yearn.finance</a>
                <a href={"https://twitter.com/iearnfinance"} target={"_blank"}
                   rel="noopener noreferrer">@iearnfinance</a>
            </footer>
            </main>);
    }
}

export default App;