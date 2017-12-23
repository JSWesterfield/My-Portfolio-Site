//adding this node.js express 'module', using the require function/method
var express = require('express');

//declare and initialize an 'app' variable to use the new 'express' method.
var app = express();
// var port = 3000;

//Moment.JS for time/date keeping
var moment = require('moment');


/**
 * install body-parser first.
 *npm install body-parser --save
 * then uncomment bodyParser variable, this configuration will allow us to pass data for firstname and lastName in the body to the server.
 * mongoose will take a JSON obj & store it in the db. 
 * Our body-parser middleware, will convert the user's input into JSON format for us. 
 */
//install body-parser first.
//npm install body-parser --save
// then uncomment bodyParser variable, this configuration will allow us to pass data for firstname and lastName in the body to the server.
// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

//update: added { useMongoClient: true}
// var mongoose = require("mongoose");
// mongoose.Promise = global.Promise;mongoose.createConnection("mongodb://localhost:27017/heroku-node", { useMongoClient: true});

// app.post("/addname", (req, res) => {
//     var myData = new User(req.body);
//     //verify the req.body content.
//     //console.log(JSON.stringify(req.body));
//     //console.log('req.body.name', req.body['name']);
//     myData.save()
//     //on success
//     .then(item => {
//         res.send("item saved to the database");
//     })
//     //on failure
//     .catch(err => {
//         res.status(400).send("unable to save to database");
//     });
// });

// // app.get("/", (req, res) => {
// //     res.send("Hello World");
// // });

// app.use("/", (req, res) => {
//  res.sendFile(__dirname + "/index.html");
// });

// app.listen(port, () => {
//     console.log("Server listening on port " + port);
// });
// //var mongo = require('mongodb').MongoClient;

// //Mongoose is a MongoDB object modeling tool(ORM) designed to work in an asynchronous environment.
// //MongoDB, by default, runs on port 27017
// //var mongoose = require("mongoose");
// //mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/Portfolio-Site"); //changed to custom endpoint
// //global.Promise;mongoose.connect("mongodb://localhost:27017/node-demo"); //original endpoint

// //the content data of the form input fields in this format.
// var Scheme;

// var nameSchema = new mongoose.Schema({
//     userName: String,
//     userEmail: String,
//     userMessage: String,
//     //messageId: Schema.Types.ObjectId
//  //firstName: String,
//  //lastName: String,
//  //messageId used for specific instances of a model in the database
//  //messageId: Schema.Types.ObjectId
// }); 

// //model for our data, we'll call this model "DataInput"
// var User = mongoose.model("User", nameSchema);


// when I uncomment mongoDB will not render page via heroku.
// var mongoDB = 'mongodb://insert_your_database_url_here';
// mongoose.connect(mongoDB, {
//     useMongoClient: true
//  });
//  var db = mongoose.connection;
//  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//require the routes on the page from routes.js
// var routes = require('/routes')(app);
// var routes = require('./routes')(app);
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
 
   //ejs render automatically looks in the views folder
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
    res.render('strManipulator');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

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

