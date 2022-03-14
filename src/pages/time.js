import React, {useState, useEffect} from 'react';
import '../scss/app.scss';
import Header from "../components/Header";
import Layout from "../components/Layout";
import logo from "../images/yearntime.svg";

export function Time() {

    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    function addZero(i) {
        if (i < 10) {
            i = "0" + i
        }
        return i;
    }

    return (<Layout>
        <Header>{logo}</Header>
        <main>
            <article className={"vertical-center-container"}>
                <p className={"text-large vertical-center"}>
                    {addZero(dateState.getUTCHours())}:
                    {addZero(dateState.getUTCMinutes())}
                </p>
                <p>{weekday[dateState.getUTCDay()]}</p>
            </article>
        </main>
    </Layout>);
}