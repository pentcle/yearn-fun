import React from "react";
import {Route, Routes} from "react-router-dom";

import {Time} from "./pages/time";
import {Main} from "./pages/main";

export const Router = () => {
    return (<Routes>
            <Route path="/" element={<Main/>}/>
            <Route path={`/time`} element={<Time/>}/>
        </Routes>);
};
