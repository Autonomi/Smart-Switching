var mongo = require("mongodb").MongoClient,
    redis = require("redis"),
    config = require("../config");

mongo.connect(config.MONGODB_URL, function (err, db) {
    "use strict";
});

module.exports.rt = redis.createClient(config.REDIS_PORT, config.REDIS_HOST, config.REDIS_PSWD);
module.exports.db = mongo;