var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log("rr,user,info");
    passport.authenticate('facebook', function(err,user,info){
        console.log(err,user,info);
    });
    res.render('login', { data: info });
});

module.exports = router;