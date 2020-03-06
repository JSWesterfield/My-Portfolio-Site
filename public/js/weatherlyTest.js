/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
// Will call itself upon page being called
// const logger = require('winston'),
// const expressWinston = require('express-winston');
// // const config = require('../../config/dev.json'); // go within the config file and use these credentials
// const config = require('config');

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

(function() {
  // //define global function variables and
  // var roundTemperature = function(temperature) {
  //             temperature = temperature.toFixed(1);
  //             return temparature;
  // }

  // //throw into global function because used repetitively, refactored code
  // var switchUnits = function() {
  //     if (weatherData.units == "°C") {
  //     weatherData.temperatureValue = roundTemperature(weatherData.temperatureValue * 9/5 + 32);
  //     weatherData.units = "°F";

  //     } else {
  //     weatherData.temperatureValue = roundTemperature ((weatherData.temperatureValue - 32) * 5/9);
  //         weatherData.units = "°C";
  //     }
  //     weatherData.temperature.innerHTML = weatherData.temperatureValue + weatherData.units + " ";
  // }

  // //global function, refactored userWeather code to grab Ip-API data for
  // // specific cities names
  // var getWeather = function() {
  //     // desired Dark Sky API request string
  //     //https://api.darksky.net/forecast/845ff6b003aba8bd1a9434ab040ef79c/37.8267,-122.4233

  //     // get geolocation data from ip via ip-api.com
  //     // Do we need to declare latitude & longitude variables since we'll be passing these to the
  //     var latitude;    //declare these inside your global function for each city.
  //     var longitude;   //declare these inside your global function for each city.
  //     console.log('Inside the general getWeather function! Which section am I in?');
  //     // This function being defined within the scope of a one of the section city's global function,
  //     // so it should the latitude and longitude variables should be defined and set to a value of a latitude & longitude string value.
  //     // verification this is true below
  //     console.log('Oh wait seems I\'m at the coordinates: ' + '' + 'Latitide: ' + latitude + ' & Longitude: ' + longitude + ' . Very Cool!');
  //     var locationName = latitude + longitude;
  //     var getIP = 'http://ip-api.com/json/' + locationName;
  //     //Will have hard code location for non ip locations
  //     // get weather data from Open Weather API, use geolocation
  //     // var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather'
  //     // var darkSkyAPI = 'https://api.darksky.net/forecast/'
  //     // var CORS = 'https://cors-anywhere.herokuapp.com/'
  //     // var apiKey = '845ff6b003aba8bd1a9434ab040ef79c/'
  //     $.getJSON(getIP).done(function(location) {
  //         //show location object in console, to pull out 'regionName' or the state for rendering in html
  //         console.log(location);
  //         console.log("Your region/state name is: " + location.regionName);
  //             var regionName = location.regionName;
  //             weatherData.state.innerHTML = regionName + ", ";
  //             //Now that we have the location data we can pass this within our DarkSky Ajax call
  //             var darkSkyURL = 'https://api.darksky.net/forecast/'
  //             // To bypass the Cross Domain Error, can I pass in an object of mode: 'no-cors' as my proxy variable?
  //             // or is this only used with the fetch function?
  //             // the use of:
  //             //        mode: 'no-cors' to get rid of the CORS issue:
  //             //    EXAMPLE:
  //             //        fetch(apiLinkDS, {
  //             //              mode: 'no-cors'
  //             //           })
  //             var corsProxy = 'https://cors-anywhere.herokuapp.com/' //can I pass in a mode: 'no-cors' object in place of this proxy?
  //             //refactor later to apiKey = config.darkSky; to abstract away the key contents for security
  //             // issue: have to figure out how to include another javascript inside this one. Require(); wont work
  //             var apiKey = '845ff6b003aba8bd1a9434ab040ef79c/'
  //             // will locationData be a string? location.lat object + string + location.lat object == String??
  //             // OR is locationData = (response object + string object + response object) ??
  //             var locationData = location.lat + "," + location.lon; //should I use ( ) to wrap these 3 objects together?
  //             var requestObject = corsProxy + darkSkyURL + apiKey + locationData;
  //             //start Ajax call pass in the above data, in order:
  //             // CORS + DarkSky API URL + API KEY + locationData
  //             $.getJSON(requestObject).done(function(response) {
  //                 console.log(response);
  //                 //why do I need this positon object?
  //                 var position = {
  //                     latitude: response.latitude,
  //                     longitude: response.longitude
  //                 };
  //                 var cityName = location.city;

  //                 var weatherDescription = response.currently.summary;
  //                 //set our initial temperature to Fahrenheit due to the response data return the unit of celsius as the response data
  //                 var weatherTemperature = (roundTemperature((response.currently.temperature) * 9/5 + 32));
  //                 //verification, delete later if you see this.
  //                 console.log('The current weather for your location is: ' + weatherTemperature);

  //                 var userWeatherIcon = response.currently[0].icon;
  //                 console.log('Your current weather icon code for your location: ' + userWeatherIcon);

  //                 weatherData.temperatureValue = weatherTemperature;
  //                 /* took out weatherSimpleDescription in the loadBackground function parameter, replaced weatherDescription
  //                     We dont want to set the icon to the actual string 'rain', but the 'rain' icon.
  //                     We should probably set our icons below this ajax call      */
  //                 weatherData.icon.innerHTML = weatherIcon;
  //                 weatherData.city.innerHTML = cityName;
  //                 weatherData.temperature.innerHTML = weatherTemperature + weatherData.units;
  //                 weatherData.weather.innerHTML = weatherDescription;
  //             }, false);
  //     });

  // }


  // /**
  //  *  MIAMI SECTION, first attempt at trying to render multiple sections, means double the amount of API calls.
  //  * will this reduce me rendering time? If so how do I increase the speed?
  //  */
  // var getWeatherDataMIA = function() {
  //      //fake Miami Latitude & Longitude for now
  //     var latitude =  '80.9932';
  //     var longitude = '-22.999';
  //     var weatherData = {
  //         city: document.querySelector ("#cityMIA"),
  //         state: document.querySelector ("#stateMIA"),
  //         weather: document.querySelector ("#weatherMIA"),
  //         temperature: document.querySelector("#temperatureMIA"),
  //         icon: document.querySelector ('#weatherIconMIA'),
  //         temperatureValue: 0,
  //         units: "°F"
  //     };
  //     //Use the switch units function
  //     switchUnits();

  //     //Get the
  //     getWeather();
  // };


  // Global Scope now, so that I can use global variables locally within this refactored function
  const userWeatherData = function() {
    // const config = require('../../config'); // go within the config file and use these credentials
    const darkSkyAPIKEY = config.darkSkyAPIKEY;
    console.log('Our darkSky_APIKEY at the start of function() is: ' + darkSkyAPIKEY);

    // intitially just local scope, threw this within its own global function
    const weatherData = {
      city: document.querySelector('#userCity'),
      state: document.querySelector('#userState'),
      weather: document.querySelector('#userWeather'),
      temperature: document.querySelector('#userTemperature'),
      icon: document.querySelector('#userWeatherIcon'),
      temperatureValue: 0,
      units: '°F',
    };

    // Will need this specific var and getJSON ajax calls for user location
    // https://api.darksky.net/forecast/845ff6b003aba8bd1a9434ab040ef79c/37.8267,-122.4233
    // get geolocation data from ip via ip-api.com
    const getIP = 'http://ip-api.com/json/';
    // Dark Sky API key: 845ff6b003aba8bd1a9434ab040ef79c
    // OpenWeatherMap API key:
    // get weather data from Open Weather API, use geolocation
    // var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather'
    // var darkSkyAPI = 'https://api.darksky.net/forecast/'
    // var CORS = 'https://cors-anywhere.herokuapp.com/'
    // var apiKey = '845ff6b003aba8bd1a9434ab040ef79c/'
    // Config files credentials


    $.getJSON(getIP).done(function(location, darkSkyAPIKEY) {
      // show location object in console, to pull out 'regionName' or the state for rendering in html
      console.log('Our new Location!!!: ' + location);
      console.log('Your cool region/state name is: ' + location.regionName);
      const regionName = location.regionName;
      weatherData.state.innerHTML = regionName + ', ';
      // Now that we have the location data we can pass this within our DarkSky Ajax call
      const darkSkyURL = 'https://api.darksky.net/forecast/';
      // To bypass the Cross Domain Error, can I pass in an object of mode: 'no-cors' as my proxy variable?
      // or is this only used with the fetch function?
      // the use of:
      //        mode: 'no-cors' to get rid of the CORS issue:
      //    EXAMPLE:
      //        fetch(apiLinkDS, {
      //              mode: 'no-cors'
      //           })
      const corsProxy = 'https://cors-anywhere.herokuapp.com/'; // can I pass in a mode: 'no-cors' object in place of this proxy?
      // var apiKey = '845ff6b003aba8bd1a9434ab040ef79c/'
      const apiKey = darkSky_APIKEY;
      console.log('Our apiKey var is: ' + apiKey + '' + ' and our config.darkSky_APIKEY is: ' + config.darkSky_APIKEY);
      // will locationData be a string? location.lat object + string + location.lat object == String??
      // OR is locationData = (response object + string object + response object) ??
      const locationData = location.lat + ',' + location.lon; // should I use ( ) to wrap these 3 objects together?
      const requestObject = corsProxy + darkSkyURL + apiKey + locationData;
      // start Ajax call pass in the above data, in order:
      // CORS + DarkSky API URL + API KEY + locationData

      $.getJSON(requestObject).done(function(response) {
        console.log(response);
        // why do I need this positon object?

        const cityName = location.city;

        const weatherDescription = response.currently.summary;
        // set our initial temperature to Fahrenheit due to the response data return the unit of celsius as the response data
        const weatherTemperature = (roundTemperature((response.currently.temperature) * 9/5 + 32));
        // verification, delete later if you see this.
        console.log('The current weather for your location is: ' + weatherTemperature);

        const userWeatherIcon = response.currently[0].icon;
        console.log('Your current weather icon code for your location: ' + userWeatherIcon);

        weatherData.temperatureValue = weatherTemperature;
        /* took out weatherSimpleDescription in the loadBackground function parameter, replaced weatherDescription
                        We dont want to set the icon to the actual string 'rain', but the 'rain' icon.
                        We should probably set our icons below this ajax call      */
        // weatherData.icon.innerHTML = userWeatherIcon;
        weatherData.city.innerHTML = cityName;
        weatherData.temperature.innerHTML = weatherTemperature + weatherData.units;
        weatherData.weather.innerHTML = weatherDescription;
      }, false);
    });
  };

  // Instructions:
  // 1.) Comment out the weatherlyIcons.js script, then try to render this page w/
  // this weatherlyIcon.js code below uncommented. If error happens, log error below, and
  // continue testing with this Skycons javascript below to figure out how to place this within same
  // file. Will seperating Icon scripts from the actual scripts that completes the AJAX
  // call for the weatherData hinder each other? Log Updates below.
  // UPDATES:
  // UPDATES:
  (function() {
    if (!Skycons) {
      // error, couldn't find location, execute sweetalert 'error' function
      swal('Oops!', 'Something went wrong on the page! Couldn\'t find your Skycons!', 'error');
    } else {
      /* Set icons to the value of specific Skycons functions*/
      const icons = new Skycons({'color': 'white'});

      icons.set('clear-day', Skycons.CLEAR_DAY); // User City
      icons.set('clear-night', Skycons.CLEAR_NIGHT);
      icons.set('partly-cloudy-day', Skycons.PARTLY_CLOUDY_DAY);
      icons.set('partly-cloudy-night', Skycons.PARTLY_CLOUDY_NIGHT);
      icons.set('cloudy', Skycons.CLOUDY); // Austin
      icons.set('rain', Skycons.RAIN); // Seattle
      icons.set('sleet', Skycons.SLEET); // Washington, D.C.
      icons.set('snow', Skycons.SNOW);
      icons.set('wind', Skycons.WIND);
      icons.set('fog', Skycons.FOG); // Baltimore

      // Icon Duplicates for weather
      icons.set('clear-day2', Skycons.CLEAR_DAY); // San Jose
      icons.set('clear-day3', Skycons.CLEAR_DAY);
      icons.set('clear-day4', Skycons.CLEAR_DAY); // Denver

      icons.set('rain2', Skycons.RAIN); // Seattle
      icons.set('fog2', Skycons.FOG); // Baltimore

      icons.set('partly-cloudy-day2', Skycons.PARTLY_CLOUDY_DAY); // Houston
      icons.set('partly-cloudy-day3', Skycons.PARTLY_CLOUDY_DAY); // Raleigh

      icons.set('cloudy3', Skycons.CLOUDY); // Atlanta
      icons.set('cloudy4', Skycons.CLOUDY); // Charlotte
      icons.set('cloudy5', Skycons.CLOUDY);

      icons.play();
    }
  }); // End of
// eslint-disable-next-line max-len
})(); // End of self invoking function, that will execute itself upon being called
