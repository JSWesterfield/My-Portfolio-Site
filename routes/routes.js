var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');

//var url = 'mongodb://localhost:27017'; //mongodb is port number 27017 be default

// set the home page route
app.get('/', function(req, res) {

// ejs render automatically looks in the views folder
    res.render('index'); //actual portfolio page I want to render
});

// set the valarian space shooter page route
app.get('/valerian', function(req, res) {

    // ejs render automatically looks in the views folder
    console.log('Got a GET request for /valerian');
    res.render('space'); //actual portfolio page I want to render
});

app.get('/passwordStrengthMeter', function(req, res) {
    console.log('Got a GET request for /passwordStrengthMeter');
    res.render('passwordStrengthMeter');
});

// set the form page route
app.get('/form', function(req, res) {

    // ejs render automatically looks in the views folder
    console.log('ready to send a POST request for /form');
    res.render('form'); //actual portfolio page I want to render
});

app.get('/strManipulator', function(req, res) {

    //ejs render automatically looks in the view folder
    console.log('ready to send POST request for /strManipulator');
});

//middleware specific to this router
// router.use(function timeLog(req, res, next) {
//     console.log('Time: ', Date.now());
//     next();
// });

//define the home page route
// router.get('/', function(req, res) {
//     res.send('My Cool Homepage');
// });

//define the about route
// router.get('/about',function(req, res) {
//     res.send('My Space Shooter page!');
// });

// module.exports = router;

// module.exports = function (app) {
//     //set up the routes themselves
//     app.get('/', function ( req, res) {
//         //do stuff
//     });
// };