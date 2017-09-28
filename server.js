//adding this node.js express 'module', using the require function/method
var express = require('express');

//javascript libraries for portfolio page
var bootstrap = require('js/bootstrap.min.js');
var custom = require('js/custom.js');
var imagesLoaded = require('js/imagesloaded.min.js');
var isotope = require('js/isotope.js');
var isotopeMin = require('js/isotope.min.js');
var jqueryBackstretch = require('js/jquery.backstretch.min.js');
var jqueryFlex = require('js/jquery.flexslider-min.js');
var jquery = require('js/jquery.js');
var jqueryMagnific = require('js/jquery.magnific-popup.min.js');
var jqueryParallax = require('js/jquery.parallax.js');
var jquerySticky = require('js/jquery.sticky.js');
var nivoLightbox = require('js/nivo-lightbox.min.js');
var smoothScroll = require('js/smoothscroll.js');
var wow = require('js/wow.min.js');
var jake = require('js/jake.js');
var services = require('js/services/jake.services.form.js'); //Do I initialize a service here? or somewhere else? 



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