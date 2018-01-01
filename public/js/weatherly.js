
/**
 * 
 * OPTION #1. Get user location from ip-api.com, simple and quick.
 */
//Grab the data
// var getWeather = function(data) {
//     $.getJSON('http://api.openweathermap.org/data/2.5/weather', {
//         lat: data.lat,
//         lon: data.lon,
//         appid: "[e491f9a26d96f2fd09483ca912efdb94]"
//     }, showWeather, 'jsonp');
// };

// //show the weather data
// var showWeather = function(data) {
//     $("#temp").text(data.main.temp)
//     $("#description").text(data.weather[0].description)
//     $("#place").text(data.name)
// };

// // On click get ip-api.com location, and then pass in getWeather API request
// $(document).ready(function() {
//     $("#btn").click(function() {
//         $.getJSON('http://ip-api.com/json', getWeather)
//     })
// })

/**
 * OPTION #2 
 * Using Google's Geolocation API to get current weather for the user-specific location.
 *  The user inputs a location which geocoded using Google Maps API. Using the 
 * OpenWeatherMap API (http://openweathermap.org) to get the data. Data is returned in JSON format. 
 * Example from: https://git.github.com/marchawkins/9755430
 * <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>
 */

// "use strict";

// var geocoder;
// var map;
// var latitude, longitude;

// //setup initial map
// function initialize() {
//     goe
// }

/**
 * OPTION #3
 * Using HTML5's Geolocation API to get location
 */
if(navigation.geolocation) {
    
    //Return the user's longitude and latitude on page load using HTML5 geolocation API
    window.onload = function() {
        var currentPosition;
        function getCurrentLocation (position) {
            currentPosition = position;
            latitude = currentPosition.coords.latitude;
            longitude = currentPosition.coords.longitude;

            //AJAX request 

            $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=e491f9a26d96f2fd09483ca912efdb94", function (data) {
                var rawJSON = JSON.stringify(data);
                var json = JSON.parse(rawJSON);
                updateWeather(json);    //Update Weather parameters
            });
        }

        navigator.geolocation.getCurrentPosition(getCurrentLocation);
    }
}

//Then use OpenWeatherAPI to get the location, temperature, and weather description. After research used another API at Geoname.org which will update the local time.
$.getJSON('http://api.geonames.org/timezoneJSON?lat=' + latitude + '&lng=' + longitude + '&username=jecobwesterfield', function(timezone) {
    var rawTimeZone = JSON.stringify(timezone);
    var parsedTimeZone = JSON.parse(rawTimeZone);
    var dateTime = parsedTimeZone.time;
    timeFull = dataTime.substr(11);
    $(".local-time").html(timeFull); //Update local time
    timeHour = dateTime.subtr(-5, 2);
});

//Update the Weather Animations(Skycons) based on the returned weather description
var weather = json.weather[0].description;

if(weather.indexOf("rain") >= 0) {
    skycons.set("animated-icon", Skycons.RAIN);
}

else if(weather.indexOf("sunny") >= 0) {
    skycons.set("animated-icon, Skycons.CLEAR_SKY");
}



// //Create our object for our weather data
// var weatherData = {
//     city: document.querySelector("#city"),
//     weather: document.querySelector("#weather"),
//     temperature: document.querySelector("#temperature"),
//     temperature: 0,
//     units: "°C"
// };

// //we round our temperature w/ the toFixed function and round to the nearest whole number.
// function roundTemperature(temperature) {
// 			temperature = temperature.toFixed(1);
// 			return temperature;
// }

// //our function for getting the weather data form the OpenWeatherAPI
// function getLocationAndWeather() {
//     if (window.XHLHttpRequest){
//         var xhr = new XMLHttpRequest();
//         xhr.addEventListener("load", function() {
//             var response = JSON.parse(xhr.responseText);

//             console.log(response);
//             var position = {
//                 latitude: response.latitude,
//                 longitude: response.longitude
//             };
//             var cityName = response.city;

//             var weatherSimpleDescription = response.weather.simple;
//             var weatherDescription = response.weather.description;
//             var weatherTemperature = roundTemperature(response.weather.temperature);

//             weatherData.temperatureValue = weatherTemperature; 

//             loadBackground(position.latitude, position.longitude, weatherSimpleDescription);
//             weatherData.city.innerHTML = cityName;
//             weatherData.weather.innerHTML = ", " + weatherDescription;
//             weatherData.temperature.innerHTML = weatherTemperature + weatherData.units;
//         }, false);

//         //we add an eventListener for errors
//         xhr.addEventListener("error", function(err){
//             alert("Could not complete the request");
//         }, false);

//         xhr.open("GET", "https://fourtonfish.com/tutorials/weather-web-app/getlocationandweather.php?owapikey=e2db5b0453a25a492e87ad8b03046a7c&units=metric", true);
//         xhr.send();
//     }
//     else{
//         //alert("unable to fetch the location and weather data");
//     }
// }

// function loadBackground(lat, lon, weatherTag) {
//     var script_element = document.createElement('script');

//     //we add in the Flickr API to generate random images of the location name we're pulling our data from, in each city's section.
//     script_element.src = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1452866c8cea54acd0075022ef573a07&lat=" + lat + "&lon=" + lon + "&accuracy=1&tags=" + weatherTag + "&sort=relevance&extras=url_l&format=json";
//     //Users now uses ip-api.com
//     document.getElementsByTagName ('head')[0].appendChild(script_element);
// }

// //we use the 
// function jsonFlickrApi(data){
//     if(data.photos.pages > 0){
//         var randomPhotoId = parseInt(data.photos.total);
//         var photo = data.photos.photo[Math.floor(Math.random()*parseInt(data.photos.photo.length))];
//         document.querySelector(".user-location").style.backgroundImage = "url('" + photo.url_l + "')";
//         document.querySelector("#image-source").setAttribute("href", "http://www.flickr.com/photos/" + photo.owner + "/" + photo.id);
//     }
//     else {
//         document.querySelector(".user-location").style.backgroundImage = "url('https://https://fourtonfish.com/tutorials/weather-web-app/images/default.jpg')";
//         document.querySelector("#image-source").setAttribute("href", "https://www.flickr.com/photos/superfamous/310185523/sizes/o/");
//     }
// }

// getLocationAndWeather();

//place input for ng-show="buttonclick"
//Submit Button to search
//onclick=function(); on click 1st of the submit the form input should appear. 
        //if(city-input line exists, or if input line is shown) 
            //validation with AngularJS. <input ng.$pristine && etc...>
                    //if (ng.$pristine) {
                        //show errorMsg = "Must input a new city that has not been selected";
                    //}
                    //else {
                        // validate that the user data makes any sense, if there is input data
                        //if(city-input == valid) {
                               // Search OpenWeatherAPI for city data.
                               // take response data and append it to an new section template for the data to display.
                                            {/*<div class="overlay"></div>
                                                <div class="container">
                                                    <div class="row">

                                                        <div class="col-md-offset-2 col-md-8 col-sm-offset-1 col-sm-10">
                                                        <div class="wow fadeInUp section-title" data-wow-delay="0.3s">
                                                        </div>
                                                            <div class="contact-form wow fadeInUp" data-wow-delay="0.8s">
                                                                <form id="addCity" method="post" action="">
                                                                    <input type="submit" class="form-control submit" id="submitBtn" value="Add a New City +">
                                                                    
                                                        <input name="name" type="text" class="form-control" id="city-input" placeholder="Enter City" required>
                                                                    
                                                                </form>
                                                                </form>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </section> */}
                        //}
                    //}

        // else {
            ///dont show
        //}
// or if there is user input data that exists. 

//Submit button, onclick convert the text to new words that says 'Search City for city when form is filled in/$dirty'. 
//Add validation that verifies the city doesnt already exist on the page, if a user search baltimore they should get an error stating the city is already selected.

