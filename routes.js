var express = require('express');

// Get the router
var router = express.Router();
var Stolen = require('./models/stolen');

// Middleware for all this routers requests
router.use(function timeLog(req, res, next) {
  console.log('Request Received: ', dateDisplayed(Date.now()));
  next();
});

// Welcome message for a GET at http://localhost:8080/restapi
router.get('/', function(req, res) {
    res.json({ message: 'Welcome to the REST API' });   
});

// GET all stolen cars (using a GET at http://localhost:5000/stolen)
router.route('/stolen/:state')
    .get(function(req, res) {
        Stolen.find({"state":req.params.state},function(err, stolen) {
            if (err)
                res.send(err);
            res.json(stolen);
        }).sort({"rank":-1});
    });

router.route('/stolen/:state/:rank')
    .get(function(req, res) {
        Stolen.find({$and: [{"state":req.params.state}, {"rank":req.params.rank}]},function(err, stolen) {
            if (err)
                res.send(err);
            res.json(stolen);
        }).sort({"rank":-1});
    });

module.exports = router;

function dateDisplayed(timestamp) {
    var date = new Date(timestamp);
    return (date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}