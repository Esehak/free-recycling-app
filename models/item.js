var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
    name: String,
    shortDescription: String,
    itemDetails: String,
    category: String,
    state: String,
    coords: {type : [Number], index : '2dsphere' }
});

var Item = mongoose.model('Item', itemSchema);
module.exports = Item;
