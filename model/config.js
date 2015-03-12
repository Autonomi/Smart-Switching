var port = process.env.OPENSHIFT_NODEJS_PORT,
    ip = process.env.OPENSHIFT_NODEJS_IP;

module.exports.port = port;
module.exports.ip = ip;
