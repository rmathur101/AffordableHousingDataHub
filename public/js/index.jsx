// react
import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
// other packages
import _ from "underscore";
// utilities
import {
    debugLog
} from "./utilities";
// components
import {Login} from './components/Login/Login.jsx';
import {UpdateProperties} from './components/UpdateProperties/UpdateProperties.jsx';
import {UpdateProperty} from './components/UpdateProperty/UpdateProperty.jsx';
import {PrivateRoute} from './components/PrivateRoute/PrivateRoute.jsx';

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

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute exact path="/update_property/:id" component={UpdateProperty} />
            <PrivateRoute exact path='/update_properties' component={UpdateProperties} />
        </Switch>
    </BrowserRouter>
), document.getElementById('container'));

