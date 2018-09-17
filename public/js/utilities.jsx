import _ from "underscore";
import axios from "axios";

function logEvent(data) {
    axios.post("/log_event", data)
        .then(function(response) {

        })
        .catch(function(error) {

        });
}

export function debugLog({log = {}, logToServer = true} = {}) {
    if (logToServer) {
        logEvent(log);
    }
    return;
}

