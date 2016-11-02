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
    host1: 'vxpid-ppimsh01',
    host2: 'vxpid-ppimsh02',
    host3: 'vxpid-ppimsh03',
    port: 27039,
    dbName: 'chtbt_db',
    user: 'chtbt_app',
    pass: 'gjtGmjFzamR',
    replicaSet: 'pimsh.dp.f912.27039'
};

// Export configuration object
module.exports = cfg;
