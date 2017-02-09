var Item = require('./../models/item');
var express = require('express');
var router = express.Router();


String.prototype.ucfirst = function()
{
    return this.charAt(0).toUpperCase() + this.substr(1);
}


router.get('/', function(req, res, next) {
    Item.find({}).exec((err, items) => {
        if(err) throw err;
        res.setHeader('Content-Type', 'application/json');
        res.json(items);
    });

});

router.get('/search', function(req, res, next) {
    var state = req.query['state'];
    var city = req.query['city'];
    var keyword = req.query['keyword'];

    var query = {
        name : {
            $regex : keyword, $options : 'i'
        }
    }
    Item.find(query)
        .where('state').equals(state)
        .where('city').equals(city.toLowerCase().ucfirst())
        .exec((err, items) => {

            if(err) throw err;

            res.setHeader('Content-Type', 'application/json');
            res.json(items);
        });
});

router.get('/:state/:city', function(req, res, next) {

    var state = req.params['state'];
    var city = req.params['city'];

    Item.find({})
        .where('state').equals(state)
        .where('city').equals(city.toLowerCase().ucfirst())
        .exec((err, items) => {

        if(err) throw err;

        res.setHeader('Content-Type', 'application/json');
        res.json(items);
    });
});

router.get('/:coords/:longitude/:latitude', function(req, res, next) {
    var longitude = req.params['longitude'];
    var latitude = req.params['latitude'];


    var coords = [];
    coords[0] = Number(latitude);
    coords[1] = Number(longitude);

    console.log(coords);

    var query = {
        coords : {
            $near : coords,
            $maxDistance : 12
        }
    };

    Item.find(query)
        .exec((err, items) => {

            if(err) throw err;

            res.setHeader('Content-Type', 'application/json');
            res.json(items);
        });

});
module.exports = router;
