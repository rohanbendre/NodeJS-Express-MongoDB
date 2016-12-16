var mongoose  = require('mongoose');
var schema    = mongoose.Schema;
 
var metersSchema   = new schema({
    State: String,
    City: String,
    Street: String,
    Latitude: Number,
    Longitude: Number
},
{
	'collection': 'parking'
});
 
module.exports = mongoose.model('Meters', metersSchema);