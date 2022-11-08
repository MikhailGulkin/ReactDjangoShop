import React from "react";
import {Route, Routes} from "react-router-dom";

import {paths} from "./routing/config";
import "./styles/tailwindStyle.scss";

import {Home} from "./pages/Home";
import {MainLayout} from "./layouts/MainLayout";

function App() {
    return (
        <Routes>
            <Route path={paths.main} element={<MainLayout/>}>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
    );
}

export default App;
