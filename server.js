
// adding this node.js express 'module', using the require function/method
const express = require('express');
// const logger = require('winston'),
expressWinston = require('express-winston');
const config = require('../../config'); // go within the config file and use these credentials

// declare and initialize an 'app' variable to use the new 'express' method.
const app = express();
// var port = 3000;

const logLevel = config.logLevel ? config.logLevel : 'debug';

// configure logger
const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.simple(),
      winston.format.printf((msg) =>
        colorizer.colorize(
            msg.level,
            `${msg.timestamp} - ${msg.level}: ${msg.message}`,
        ),
      ),
  ),
  transports: [new winston.transports.Console()],
});

// set the port of our application
// process.env.PORT lets the port be set by Heroku
app.set('port', process.env.PORT || 8080);

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {
  // ejs render automatically looks in the views folder
  res.render('index'); // actual portfolio page I want to render
});

// set the valarian space shooter page route
app.get('/valerian', function(req, res) {
  // ejs render automatically looks in the views folder
  console.log('Got a GET request for /valerian');
  res.render('space'); // actual portfolio page I want to render
});

app.get('/passwordStrengthMeter', function(req, res) {
  console.log('Got a GET request for /passwordStrengthMeter');
  res.render('passwordStrengthMeter');
});

// set the form page route
app.get('/form', function(req, res) {
  // ejs render automatically looks in the views folder
  console.log('ready to send a POST request for /form');
  res.render('form'); // actual portfolio page I want to render
});

app.get('/strManipulator', function(req, res) {
  // ejs render automatically looks in the view folder
  console.log('ready to send POST request for /strManipulator');
  res.render('strManipulator');
});

app.get('/weatherly', function(req, res) {
  // ejs render automatically looks in the view folder
  console.log('ready to send POST request for /weatherly');
  res.render('weatherly');
});

app.get('/test', function(req, res) {
  // ejs render automatically looks in the view folder
  console.log('ready to send POST request for /test');
  res.render('test');
});

app.get('/resume', function(req, res) {
  // ejs render automatically looks in this view folder for the resume view
  console.log('ready to send POST request for /resume');
  res.render('resume');
});

app.listen(app.get('port'), function() {
  console.log('Our Express/Node app is running on http://localhost:' +
    app.get('port') + '; press Ctrl+C to terminate.');
});

// Custom 404 page
app.use(function(req, res) {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

// Custom 500 page
app.use(function(err, req, res, next) {
  console.error(err.stack);
  console.log('unhandled error detected: ' + err.message);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});

