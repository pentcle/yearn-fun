import React, {useState, useEffect} from 'react';
import logo from './images/yearnoclock.svg'
import './scss/app.scss';

function App() {

    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);

    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
    }

    return (<div className="App">
        <header>
            <a href={"https://yearn.finance"} target={"_blank"}
               rel="noopener noreferrer"><img src={logo} alt="logo"/></a>
        </header>
        <main>
            <article className={"vertical-center-container"}>
                <p className={"text-large vertical-center"}>
                    {/*{dateState.toLocaleString('en-US', {*/}
                    {/*    hour: 'numeric', minute: 'numeric', hour12: false,*/}
                    {/*})}*/}
                    {addZero(dateState.getUTCHours({hour: 'numeric'}))}:
                    {addZero(dateState.getUTCMinutes({minute: 'numeric'}))}
                </p>
            </article>
        </main>
        <footer>
            <a href={"https://yearn.finance"} target={"_blank"}
               rel="noopener noreferrer">yearn.finance</a>
            <a href={"https://twitter.com/iearnfinance"} target={"_blank"}
               rel="noopener noreferrer">@iearnfinance</a>
        </footer>
    </div>);
}

export default App;