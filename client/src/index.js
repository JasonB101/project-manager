import React from "react";
import { BrowserRouter } from "react-router-dom"
import Store from "./Store"
import { render } from "react-dom";
import App from "./App";
require("./global.scss")

render(
    <BrowserRouter>
        <Store>
            <App />
        </Store>
    </BrowserRouter>
    ,
    document.getElementById("root")
)