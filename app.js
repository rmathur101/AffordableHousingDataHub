var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var logger = (require("./helpers/logger.js")).logger;
var sessionHelper = require("./helpers/sessions.js");
var _ = require("underscore");

var app = express();

// middleware, TODO: move to middleware directory
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(sessionHelper.initSession());

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/main.html");
});

app.post("/log_event", function(req, res) {

    // logger defaults
    var level = "info";
    var message = null;
    var log = req.body;

    // add session id to metadata
    if (_.has(req, "sessionID")) {
        log.sid = req.sessionID;
    }

    if (_.has(log, "level")) {
        level = log.level;
        log = _.omit(log, "level");
    }

    if (_.has(log, "message")) {
        message = log.message;
        log = _.omit(log, "message");
    }

    logger.log(level, message, log);

    res.sendStatus(200);
});

app.listen(3000, function () {
    function logBuildType() {
        if (process.env.NODE_ENV == "PRODUCTION") {
            logger.info(
                "Build Type (NODE_ENV) is PRODUCTION",
                {
                    buildType: "PRODUCTION"
                }
            );
        } else if (process.env.NODE_ENV == "DEVELOPMENT") {
            logger.info(
                "Build Type (NODE_ENV)",
                {
                    buildType: "DEVELOPMENT"
                }
            );
        } else {
            logger.info(
                "Build Type (NODE_ENV) is UNKNOWN!",
                {
                    buildType: "UNKNOWN"
                }
            );
        }
    }

    //NOTE: do not log this during development, because we run node daemon and it continously restarts the app, it will continously log this - and we don't want to make the logs messy
    if (process.env.NODE_ENV == 'DEVELOPMENT') {
        logger.log("info", "App is listening on port 3000...")
        logBuildType();
    }
});

