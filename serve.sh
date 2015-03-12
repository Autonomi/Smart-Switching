#!/usr/bin/env bash
export OPENSHIFT_NODEJS_PORT=1337
export OPENSHIFT_NODEJS_IP="0.0.0.0"

nodemon init.js