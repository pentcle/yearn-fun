import React from "react";
import './scss/app.scss';
import { BrowserRouter } from "react-router-dom";
import {Router} from "./Router";

const App = () => (
    <BrowserRouter>
        <Router />
    </BrowserRouter>
);

export default App;
