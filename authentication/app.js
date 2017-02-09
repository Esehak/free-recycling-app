var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook');
var MongoClient = require('mongodb').MongoClient;
var sessions = require("client-sessions");
var http = require("http");
var Cookies = require("cookies");
var cors = require('cors');

var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var result = require('./routes/result');
var app = express();

app.use(cors({ origin: 'http://localhost:4200' })); //to overcome CROS problems
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/login', login);

app.use(sessions({
  cookieName: 'mySession', // cookie name dictates the key name added to the request object
  secret: 'blargadeeblargblarg', // should be a large unguessable string
  duration: 24 * 60 * 60 * 1000, // how long the session will stay valid in ms
  activeDuration: 1000 * 60 * 5 // if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds
}))

var FACEBOOK_APP_ID = '209384872869522',
  FACEBOOK_APP_SECRET = '29d1e9e93eabfcd8a7dce4879ab6d437';

passport.use(new FacebookStrategy({
  clientID: '209384872869522',
  clientSecret: '29d1e9e93eabfcd8a7dce4879ab6d437',
  callbackURL: "http://localhost:3000/auth/facebook/callback",
  profileFields: ["id", "birthday", "email", "first_name", "gender", "last_name"],
},
  function (accessToken, refreshToken, profile, cb) {
    exports = {
      accessToken: accessToken,
      profile: profile
    };
    return cb(null, profile);
  }
));

app.get('/auth/facebook/callback', passport.authenticate('facebook',
  { session: false, failureRedirect: '/login' }), function (req, res) {

    var profile = exports.profile;
    var accessToken = exports.accessToken;

    res.cookie('current_token', accessToken);    //storing the access token on responce cookie 

    MongoClient.connect('mongodb://localhost:27017/Users', function (err, db) {
      if (err) throw err;
      db.collection('users').findOne({ 'email': profile.emails[0].value }, function (err, data) {
        if (err) throw err;
        if (!data) {
          var user = {
            'username': profile.name.givenName + ' ' + profile.name.familyName,
            'email': profile.emails[0].value,
          };

          db.collection('users').insert(user, function (err, docsInserted) {
            if (err) throw err;
            console.dir(`Sucess: ${JSON.stringify(docsInserted)}`);
            return db.close();
          });

          console.log("========== Uknown User Registered =================");
          console.log(data);
        }
        else {
          console.log("This user is already Registered in DB");
        }
        res.redirect('/');
        return db.close();
      });
    });
    res.cookie('cookie_name', 'cookie_value');
  });

app.use(passport.initialize());

passport.serializeUser(function (user, done) {
  done(null, user);
})

app.get('/logout', function (req, res) {    //destroying th cookie to loog out the user
  req.logOut();
  req.mySession.destroy();
  res.clearCookie('current_token');
  res.clearCookie('mycookie');
  res.redirect('/login')
  res.end();
});

app.route('/elias')
  .get(passport.authorize('facebook', {
    scope: ['email', 'basic_info', 'user_photos'],
    profileFields: ['id', 'displayName', 'photos', 'emails', 'birthday'],
  }));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;