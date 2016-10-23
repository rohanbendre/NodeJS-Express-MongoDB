var mongoose  = require('mongoose');
var schema    = mongoose.Schema;
 
var stolenSchema   = new schema({
    state: String,
    rank: Number,
    make: String,
    year: Number,
    theft: Number
},
{
	'collection': 'stolen'
});
 
module.exports = mongoose.model('Stolen', stolenSchema);