#!/bin/env node

// Set up app and DB objects
var express = require('express'),
    app = express(),
    device = require('./model/device');


app.get("/", function (request, response) {
    "use strict";
    response.send("API Root.");
});


app.get("/_/msg", function (request, response) {
    "use strict";
    response.send("Recieve your outstanding messages from here.");
});


var server = app.listen(3000, function () {
    "use strict";
    var host = server.address().address,
        port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});