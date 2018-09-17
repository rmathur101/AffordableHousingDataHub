import {
    debugLog
} from "./utilities";
import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import _ from "underscore";

debugLog(
    {
        log: {
            message: "testing debug log",
            level: "info",
            origin: "client"
        },
        logToServer:true
    }
);

ReactDOM.render(
    <h1>AUSTIN AFFORDABLE HOUSING DATA</h1>,
    document.querySelector("#container")
);
