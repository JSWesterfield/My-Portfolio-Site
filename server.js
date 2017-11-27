//adding this node.js express 'module', using the require function/method
var express = require('express');

//declare and initialize an 'app' variable to use the new 'express' method.
var app = express();

//Mongoose is a MongoDB object modeling tool(ORM) designed to work in an asynchronous environment.
var mongoose = require('mongoose');

// when I uncomment mongoDB will not render page via heroku.
// var mongoDB = 'mongodb://insert_your_database_url_here';
// mongoose.connect(mongoDB, {
//     useMongoClient: true
//  });
//  var db = mongoose.connection;
//  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//require the routes on the page from routes.js
// var routes = require('./routes')(app);
// var routes = require('/routes');
// app.use('/routes', routes);

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index2'); //actual portfolio page I want to render
});

// set the home page route
app.get('/valerian', function(req, res) {

    // ejs render automatically looks in the views folder
    console.log('Got a GET request for /valerian');
    res.render('space'); //actual portfolio page I want to render
    
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

var moment = require('moment');

//Future add Event Loop/Event-Driven observer within server.js.
//Import events module
//var events = require('events');

//Create an eventEmitter object 
//var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
//var connectHandler = function connect() {
//  console.log('connection successful');

//  //Fire the data_received event
//  eventEmitter.emit('data_received');
//}

//Example event binding, but where do we place this? Looks like this goes within our regular JS file as a callback function
//Bind event and even handler as follows
//eventEmitter.on('click', connectHandler);



//we can fire an event programmatically as follows: 
//eventEmitter.emit('eventName');

//'eventName' will be the the 'click'

