var mongo = require("mongodb").MongoClient,
    redis = require("redis"),
    config = require("../config");

var redis_client = redis.createClient(config.REDIS_PORT, config.REDIS_HOST);
redis_client.auth(config.REDIS_PSWD);

mongo.connect(config.MONGODB_URL, function (err, db) {
    "use strict";
});

module.exports.rt = redis_client;
module.exports.db = mongo;