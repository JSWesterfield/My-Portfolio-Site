(function() {
    var ZXCVBN_SRC = 'bower_components/zxcvbn/dist/zxcvbn.js';

    var async_load = function() {
        var first, s;
        // create a <script> element using the DOM API
        s = document.createElement('script');

        // set attributes on the script element
        s.src = ZXCVBN_SRC;
        s.type = 'text/javascript';
        s.async = true; // HTML5 async attribute

        // Get the first script element in the document
        first = document.getElementsByTagName('script')[0];

        // insert the <script> element before the first in the document
        return first.parentNode.insertBefore(s, first);
    };

    // attach async_load as callback to the window load event
    if (window.attachEvent != null) {
        window.attachEvent('onload', async_load);
    } else {
        window.addEventListener('load', async_load, false);
    }
}).call(this);

//Show password
console.log(zxcvbn('password'));

/* Creating the App module, we defined in our html tag */
angular.module( 'PasswordStrength', []);

/* adding a controller to the module */
angular.module('PasswordStrength').controller('FormController', function($scope) {});
