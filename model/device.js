
var database = require("./database");

var identity = {
    verify: function (id) {
        "use strict";
        console.log(id);
        return true;
    }
};

module.exports.identity = identity;
