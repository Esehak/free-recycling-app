var Location = require('./../models/location');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    Location.distinct('state', function(err, results) {
        res.setHeader('Content-Type', 'application/json');
        results.sort();
        res.json(results);
    });

});
router.get('/cities/:state', function(req, res, next) {
    var state = req.params.state;
    var query = { 'state' : state};
    var locationArray = [];
    var locationCursor = Location.find(query).cursor();
    locationCursor.on('data', location => {
        locationArray.push(location);
    });
    locationCursor.on('close', () => {
        var cityList = [];
        locationArray.forEach(location => {
            if(cityList.indexOf(location.city) == -1) {
                cityList.push(location.city);
            }
        });
        cityList.sort();
        res.json(cityList);
    })
});



module.exports = router;
