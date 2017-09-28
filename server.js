//adding this node.js express 'module', using the require function/method
var express = require('express');




//declare and initialize an 'app' variable to use the new 'express' method.
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public2 directory for assets (css/js/img)
app.use(express.static(__dirname + '/public2'));

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    //res.render('index'); //alternative view, my initial view to test out the express server
    res.render('index2'); //actual portfolio page I want to render
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});