var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var routes     = require('./routes');
var config = require('./config.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/parkingdb');

//var hostString = config.mongoConfig.host1 + ':' + config.mongoConfig.port + ',' + config.mongoConfig.host2 + ':' + config.mongoConfig.port + ',' + config.mongoConfig.host3 + ':' + config.mongoConfig.port; 
//mongoose.connect('mongodb://ma000_app:tMT1G5ekhEr' + '@' + hostString + '/' + config.mongoConfig.dbName + '?replicaSet=' + config.mongoConfig.replicaSet);
//console.log('mongodb://ma000_app:tMT1G5ekhEr' + '@' + hostString + '/' + config.mongoConfig.dbName + '?replicaSet=' + config.mongoConfig.replicaSet)

// express app will use body-parser to get data from POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set port
var port = process.env.PORT || 5000;        // set the port

// Define a prefix for all routes
// Can define something unique like MyRestAPI
// We'll just leave it so all routes are relative to '/'
app.use('/', routes);

// Start server listening on port 5000
app.listen(port);
console.log('RESTAPI listening on port: ' + port);

module.exports = app;