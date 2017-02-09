/**
 * Username on 2/8/17.
 */




/*
 MongoClient.connect('mongodb://localhost:27017/placesDB', function(err, db) {
 if(err) throw err;
 var locationCursor = db.collection('zips').find({});
 locationCursor.on('data', function(locationDoc) {
 var newLocation = new Location({
 state : locationDoc.state,
 city : locationDoc.city,
 coords : locationDoc.loc
 });
 newLocation.save(function(err) {
 if(err) throw err;
 })
 });
 locationCursor.on('close', function() {
 "use strict";
 })

 });

 */


/*var cursor = Location.aggregate([
 {
 $group : {
 _id : {state : "$state"},
 city : {$first : "$city"}
 }
 }

 ]).each(function(err, doc) {
 "use strict";
 console.log("Logging")
 });
 */
/*var locations = [];
 cursor.on('data', function(locationDoc) {
 locations.push(locationDoc);

 });
 cursor.on('close', function() {
 "use strict";
 res.send(locations);
 })*/











/*if(!this.auth.authenticated()) {
 this.router.navigate(['login']);
 }else {
 this.router.navigate(['']);
 }*/











/*app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
 next();
 });
 */


/*const authCheck = jwt({
 secret: new Buffer('jYb2PB3uY4eYRUNrXn2lbZ3Xw_rEcEQBUNnSoiPwqrExmGs_ySmXmf53TCYsXoxi', 'base64'),
 audience: '26vt4vhEJfgsTx4XDfDiB0psMEnWg4Qt'
 });
 */