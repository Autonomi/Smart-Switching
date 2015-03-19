#!/bin/env node

// Set up app and DB objects
var express = require('express'),
    app = express(),
    device = require('./model/device'),
    util = require('./model/util'),
    database = require('./model/database'),
    config = require('./config'),
    cookie_parser = require('cookie-parser');

app.use(cookie_parser());

app.get("/", function (request, response) {
    "use strict";
    response.send("APIRoot.");
});

app.route("/_/:device_id/*")
    .get(function (req, res) {
        "use strict";
        res.send("Recieve messages for " + JSON.stringify(req.params));
    });

app.get("/_/msg", function (request, response) {
    "use strict";
    response.send("Receive your outstanding messages from here.");
});

app.get("/dev/db", function (request, response) {
    "use strict";
    console.log(request.headers["cache-control"]);
    database.rt.hmset('KIK', {"LOL": "LOL", "LOL2": 45});
    database.rt.expire('KIK', 60);
    response.send("Receive your outstanding messages from here.");
});

var server = app.listen(config.PORT, config.HOST, function () {
    "use strict";
    console.log('Listening at http://%s:%s', config.HOST, config.PORT);
});
