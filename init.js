#!/bin/env node

// Set up app and DB objects
var express = require('express'),
    app = express();

app.get("/", function (request, response) {
    "use strict";
    console.log(request);
    response.send("API Root.");
});

var server = app.listen(3000, function () {
    "use strict";
    var host = server.address().address,
        port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});