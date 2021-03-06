var configuration = {
    PORT: process.env.OPENSHIFT_NODEJS_PORT,
    HOST: process.env.OPENSHIFT_NODEJS_IP,
    REDIS_HOST: process.env.OPENSHIFT_REDIS_HOST,
    REDIS_PORT: process.env.OPENSHIFT_REDIS_PORT,
    REDIS_PSWD: process.env.REDIS_PASSWORD,
    MONGODB_HOST: process.env.OPENSHIFT_MONGODB_DB_HOST,
    MONGODB_PORT: process.env.OPENSHIFT_MONGODB_DB_PORT,
    MONGODB_USER: process.env.OPENSHIFT_MONGODB_DB_USERNAME,
    MONGODB_PSWD: process.env.OPENSHIFT_MONGODB_DB_PASSWORD,
    MONGODB_URL:  process.env.OPENSHIFT_MONGODB_DB_URL
};

module.exports = configuration;