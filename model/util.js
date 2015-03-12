var siphash = require("siphash");

var hash = {
    generate: function (str) {
        "use strict";
        var key = siphash.string16_to_key("Test");
        return siphash.hash_hex(key, str);
    }
};

module.exports.hash = hash;
