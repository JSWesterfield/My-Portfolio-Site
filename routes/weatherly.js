// wiki.js - Wiki route module

var express = require('express');
var router = express.Router();

// Home page route
// router.get('/', function(req, res) {
//   res.send('Weatherly home page');
// });

// Home page route
router.get('/weatherly', function(req, res) {
    res.send('Weatherly app page');
});

module.exports = router;