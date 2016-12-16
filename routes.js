var express = require('express');

// Get the router
var router = express.Router();
var Meters = require('./models/meters');
var promise = require('promise');

// promise = new promise(function(){});

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
router.route('/parking/:city/:lat/:lon')
    .get(function(req, res) {        
        var lat1 = req.params.lat;
        var lon1 = req.params.lon;
        var response = [];

        const cursor = Meters.find({"City":req.params.city}).batchSize(999999).cursor();
        next(cursor.next());

        function next(promise) {
          
          promise.then(doc => {
        //     if (doc) {
        //         var lat2 = doc.Latitude; 
        //         var lon2 = doc.Longitude; 
                
        //         var d = calculateDistance(lat1, lat2, lon1, lon2);
                
        //         // console.log(d);
        //         if(d < 0.5)
        //             response.push(doc);
        //         next(cursor.next());
        //     } else {
        //         res.json(response.sort().slice(0,5));
        //     }
          })
        }
    });

function dateDisplayed(timestamp) {
    var date = new Date(timestamp);
    return (date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}

// function toRad(x){
//     return x * Math.PI / 180;
// }

// function calculateDistance(lat1, lat2, lon1, lon2){
//     var R = 6371;
//     var x1 = lat2-lat1;
//     var dLat = toRad(x1);  
//     var x2 = lon2-lon1;
//     var dLon = toRad(x2);  
//     var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
//             Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
//             Math.sin(dLon/2) * Math.sin(dLon/2);  
//     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
//     var d = R * c;
//     return d;
// }

module.exports = router;