var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
    state : String,
    city : String,
    coords : [Number]
});

var Location = mongoose.model('Location', locationSchema);
module.exports = Location;
