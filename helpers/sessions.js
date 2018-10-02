const expressSession = require("express-session");
const fs = require('fs');
const path = require('path');
const initConfig = require("../initConfig.js");

// NOTE: might have set proxy for sessions to work as well as to get correctly get the remote address
module.exports.initSession = function() {
    var sessionOpts = {
        secret: fs.readFileSync(initConfig.configPath + 'session_secret.txt', 'utf8'),
        cookie: {secure: false},
        resave: false, // TODO: docs says says that should check if chosen store has 'touch' method, if not then set to true
        saveUninitialized: true,
    }
    if (process.env.NODE_ENV == "production") {
        // TODO: set up https / ssl certificate
        // set secure to true on production
        session_opts.cookie.secure = true;
    }
    return expressSession(sessionOpts);
}
