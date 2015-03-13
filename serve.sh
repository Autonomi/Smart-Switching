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

nodemon server.js
