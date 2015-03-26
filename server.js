#!/bin/env node

// Set up app and DB objects
var express = require('express'),
    app = express(),
    device = require('./model/device'),
    util = require('./model/util'),
    database = require('./model/database'),
    config = require('./config'),
    cookie_parser = require('cookie-parser'),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    events = require('events'),
    eventEmitter = new events.EventEmitter(),
    status = {current_value: "OFF"};

app.use(cookie_parser());

app.get("/", function (request, response) {
    "use strict";
    response.send("APIRoot.");
});

/*app.route("/_/:device_id/*")
    .get(function (req, res) {
        "use strict";
        eventEmitter.on('dev_' + req.params.device_id, function () {
            res.send("Recieved messages for " + req.params.device_id);
            res.end();
        });
    })
    .post(function (req, res) {
        "use strict";
        eventEmitter.emit('dev_' + req.params.device_id);
        res.send("This queues the message.");
        res.end();
    });*/

/*app.get("/_/msg", function (request, response) {
    "use strict";
    status = request.query.st;
    console.log(status);
    console.log(request.query);
    response.send("Receive your outstanding messages from here.");
});

app.get("/dev/db", function (request, response) {
    "use strict";
    console.log(status);
    response.send(status);
});*/

app.route("/_/set/:set_value")
    .get(function (req, res) {
        "use strict";
        if (["ON", "OFF"].indexOf(req.params.set_value) > -1) {
            status.current_value = req.params.set_value;
            res.send("Updated the Device Status.");
        } else {
            res.send("Unsupported Device Status.");
        }
    });

app.route("/_/status/")
    .get(function (req, res) {
        "use strict";
        res.send(status.current_value);
    });

var server = app.listen(config.PORT, config.HOST, function () {
    "use strict";
    console.log('Listening at http://%s:%s', config.HOST, config.PORT);
});
