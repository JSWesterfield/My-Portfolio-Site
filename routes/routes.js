var express = require('express');
var router = express.Router();

//middleware specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

//define the home page route
router.get('/', function(req, res) {
    res.send('My Cool Homepage');
});

//define the about route
router.get('/about',function(req, res) {
    res.send('My Space Shooter page!');
});

module.exports = router;

// module.exports = function (app) {
//     //set up the routes themselves
//     app.get('/', function ( req, res) {
//         //do stuff
//     });
// };