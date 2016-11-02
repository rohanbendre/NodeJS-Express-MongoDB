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

// router.use(function (req, res, next) {
// 	console.log("Request is : " + JSON.stringify(req.query));
// 	console.log("Rank : " + JSON.stringify(req.query.rank));
// 	console.log("State : " + JSON.stringify(req.query.state));
// 	if(JSON.stringify(req.query.state) != undefined && JSON.stringify(req.query.rank) != undefined) {
// 		router.get('*',function(req,res){
// console.log("Inside and");
// 			Stolen.find({$and :[{"State":req.query.state}, {"Rank":parseInt(req.query.rank)}]},{"State":0, "_id":0}, function(err, stolen) {
//             if (err)
//                 res.send(err);
//             res.json(stolen);
// 		}).sort({"Rank":1});
// 	}); 
// 	next();
// 	} 
// 	else if(req.query.state) {
// 		router.get('*',function(req,res){
// console.log("Inside state");
//                         Stolen.find({"State":req.query.state}, {"State":0, "_id":0}, function(err,stolen) {
//             if (err)
//                 res.send(err);
//             res.json(stolen);
//                 }).sort({"Rank":1});
//         });
//         next();
// 	}
// 	else {
// 		next();
// 	}
// });


// GET all stolen cars (using a GET at http://localhost:5000/stolen)
router.route('/stolen/:state')
    .get(function(req, res) {
        Stolen.find({"Code":req.params.state}, {"State":0, "_id":0, "Code":0}, function(err, stolen) {
            if (err)
                res.send(err);
            res.json(stolen);
        }).sort({"Rank":1});
    });

router.route('/stolen/:state/:rank')
    .get(function(req, res) {
        Stolen.find({$and: [{"Code":req.params.state}, {"Rank":parseInt(req.params.rank)}]}, {"State":0, "_id":0, "Code":0},function(err, stolen) {
            if (err)
                res.send(err);
           res.json(stolen);
        });
    });

module.exports = router;

function dateDisplayed(timestamp) {
    var date = new Date(timestamp);
    return (date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}
