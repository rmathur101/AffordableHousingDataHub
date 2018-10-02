var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var logger = (require("./helpers/logger.js")).logger;
var sessionHelper = require("./helpers/sessions.js");
var dbHelper = require('./helpers/database.js');
var csv = require('fast-csv');
var _ = require("underscore");

var app = express();

// middleware, TODO: move to middleware directory
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(sessionHelper.initSession());

app.get('/update_properties_list', async (req, res) => {

    // TODO: add try catch
    var result = await dbHelper.getUpdatePropertiesList();
    res.status(200).send({success: true, data: result});
});

app.get('/property', async(req, res) => {
    var propertyId = req.query.propertyId;
    var result = await dbHelper.getProperty(propertyId);
    res.status(200).send({success: true, data: result});
});


app.get('/*', (req, res) => {
    res.sendFile(__dirname + "/public/main.html");
});

app.post('/login', async (req, res) => {

    try {
        var email = req.body.email
        var pass = req.body.pass
        var result = await dbHelper.doesUserExist(email, pass);
        var user = result[0];
        if (user) {
            // set this session id in the user's table, and then for all the other pages (like update_properties) we need to check that the session is the same, and if it is, then we want to allow them, but if not, then we want to send back a redirect option, and then take them back to the login page to login
            await dbHelper.updateSessionId(user.id, req.sessionID);

            res.status(200).send({success: true});
        } else {
            res.status(200).send({success: false});
        }
    } catch(e) {
        logger.log('error', e, {origin: 'server'});
        res.status(500).send({success: false, error: e.stack.toString(), serverSideError: true});
    }
});

app.post('/log_event', (req, res) => {

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

app.listen(3000, () => {
    function logBuildType() {
        if (process.env.NODE_ENV == "PRODUCTION") {
            logger.info(
                "Build Type (NODE_ENV) is PRODUCTION",
                {
                    buildType: "PRODUCTION",
                    origin: 'server'
                }
            );
        } else if (process.env.NODE_ENV == "DEVELOPMENT") {
            logger.info(
                "Build Type (NODE_ENV)",
                {
                    buildType: "DEVELOPMENT",
                    origin: 'server'
                }
            );
        } else {
            logger.error(
                "Build Type (NODE_ENV) is UNKNOWN!",
                {
                    buildType: "UNKNOWN",
                    origin: 'server'
                }
            );
        }
    }
    //NOTE: do not log this during development, because we run node daemon and it continously restarts the app, it will continously log this - and we don't want to make the logs messy
    if (process.env.NODE_ENV == 'PRODUCTION') {
        logger.log("info", "App is listening on port 3000...")
        logBuildType();
    }
});

