#!/usr/bin/env bash
export OPENSHIFT_NODEJS_PORT="1337"
export OPENSHIFT_NODEJS_IP="0.0.0.0"

export OPENSHIFT_REDIS_HOST="localhost"
export OPENSHIFT_REDIS_PORT="6379"
export REDIS_PASSWORD=""

export OPENSHIFT_MONGODB_DB_HOST="localhost"
export OPENSHIFT_MONGODB_DB_PORT="27017"
export OPENSHIFT_MONGODB_DB_USERNAME=""
export OPENSHIFT_MONGODB_DB_PASSWORD=""
export OPENSHIFT_MONGODB_DB_URL="mongodb://localhost:27017/"

export EMAIL_HOST=""
export EMAIL_SMTP=""
export EMAIL_USER=""
export EMAIL_PSWD=""

sudo redis-server&
sudo mongod --fork --syslog

trap ctrl_c INT

function ctrl_c() {
    let pid_redis=$(ps aux | grep "redis-server" | grep -v "grep" | awk '{ print $2 }')
    let pid_mongo=$(ps aux | grep "mongod" | grep -v "grep" | awk '{ print $2 }')
    sudo kill $pid_redis
    sudo kill $pid_mongo
    echo "Killed Redis and Mongo. Exiting."
}

clear
nodemon server.js
