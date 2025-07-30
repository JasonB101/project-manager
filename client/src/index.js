import React from "react";
import { BrowserRouter } from "react-router-dom"
import Store from "./Store"
import { createRoot } from "react-dom/client";
import App from "./App";
require("./global.scss")

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Store>
            <App />
        </Store>
    </BrowserRouter>
);