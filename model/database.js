var mongo  = require("mongodb"),
    redis  = require("redis"),
    config = require("../config");

var redis_client = redis.createClient(config.REDIS_PORT, config.REDIS_HOST);
redis_client.auth(config.REDIS_PSWD);
redis_client.on("connect", function () {
    "use strict";
    console.log("Connected Redis");
});

var mongo_client = mongo.MongoClient;
mongo_client.connect(config.MONGODB_URL, function () {
    "use strict";
    console.log("Connected Mongo");
});

module.exports.rt = redis_client;
module.exports.db = mongo;