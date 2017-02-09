var express = require('express');
var router = express.Router();
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var sessions = require("client-sessions");

/* GET home page. */
router.get('/', function (req, res, next) {
  var cookie = req.cookies.current_token;
  console.log("cookie status at index:" + cookie);
  if (!cookie) {
    res.redirect('/login');
  } else {
    MongoClient.connect('mongodb://localhost:27017/Users', function (err, db) {
      if (err) throw err;
      db.collection('users').find({}).toArray(function (err, data) {
        if (err) throw err;
        console.log(data);
        return db.close();
      });
    });
    res.render('index', { title: 'Here is the Home page' });
  }
});

module.exports = router;
