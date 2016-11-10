var cfg = {};

/*
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'dev') {
    dotenv.config({path: '.env'});
} else {
    dotenv.config({path: '.env.test', silent: true});
}
*/

// HTTP Port to run our web application
cfg.port = process.env.PORT || 3000;
cfg.host = process.env.HOST || 'localhost';

// A random string that will help generate secure one-time passwords and
// HTTP sessions
cfg.secret = process.env.APP_SECRET || 'to turn around';

//TODO - prod config, this is dev
cfg.mongoConfig = {
    host1: 'vxpid-pma00004',
    host2: 'vxpid-pma00005',
    host3: 'vxpid-pma00006',
    port: 27031,
    dbName: 'ma000_db',
    user: 'ma000_app',
    pass: 'tMT1G5ekhEr',
    replicaSet: 'ma000.dp.e548.27031'
};

// Export configuration object
module.exports = cfg;
