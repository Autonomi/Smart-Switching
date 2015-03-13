#!/bin/env node

// Set up app and DB objects
var express = require('express'),
    app = express(),
    device = require('./model/device'),
    util = require('./model/util'),
    database = require('./model/database'),
    config = require('./config');

app.get("/", function (request, response) {
    "use strict";
    response.send("API Root.");
});

app.get("/_/msg", function (request, response) {
    "use strict";
    response.send("Receive your outstanding messages from here.");
});

var server = app.listen(config.PORT, config.HOST, function () {
    "use strict";
    console.log('Listening at http://%s:%s', config.HOST, config.PORT);
});
