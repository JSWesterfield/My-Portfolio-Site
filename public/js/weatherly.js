/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
var app = module.exports = express();

const weatherData = {
  city: document.querySelector('#userCity'),
  state: document.querySelector('#userState'),
  weather: document.querySelector('#userWeather'),
  temperature: document.querySelector('#userTemperature'),
  icon: document.querySelector('#userWeatherIcon'),
  temperatureValue: 0,
  units: '°F',
};

// Might want to refactor code to make this a global function
// so that multiple
// var roundTemperature = function(temperature) {
//       temperature = temperature.toFixed(1);
//       return temparature;
// }

function roundTemperature(temperature) {
  temperature = temperature.toFixed(1);
  return temperature;
}

// const darkSkyAPIKey = '845ff6b003aba8bd1a9434ab040ef79c/';
// console.log('darkSkyAPIKey defined within the weatherly.js file is: ' + darkSkyAPIKey);

//const darkSkyAPI_Key_localVar = '845ff6b003aba8bd1a9434ab040ef79c/'
//console.log('darkSkyAPIKey defined within the weatherly file is: ' + darkSkyAPI_Key_localVar)

// function switchUnits() {
//   if (weatherData.units == '°C') {
//     weatherData.temperatureValue = roundTemperature(weatherData.temperatureValue * 9/5 + 32);
//     weatherData.units = '°F';
//   } else {
//     weatherData.temperatureValue = roundTemperature((weatherData.temperatureValue - 32) * 5/9);
//     weatherData.units = '°C';
//   }
//   weatherData.temperature.innerHTML = weatherData.temperatureValue + weatherData.units + ' ';
// }

// https://api.darksky.net/forecast/845ff6b003aba8bd1a9434ab040ef79c/37.8267,-122.4233/?units=si
// get geolocation data from ip via ip-api.com
const getIP = 'http://ip-api.com/json/';
// const darkSkyAPIKey = '845ff6b003aba8bd1a9434ab040ef79c/'

const darkSkyAPIKey = res.locals.apiKey;

$.getJSON(getIP).done(function(location) {
  // show location object in console, to pull out 'regionName' or the state for rendering in html
  console.log(location);
  console.log(darkSkyAPIKey);
  console.log('Your region/state name is: ' + location.regionName);
  const regionName = location.regionName;
  weatherData.state.innerHTML = regionName + ', ';
  const cityName = location.city;
  // Now that we have the location data we can pass this within our DarkSky Ajax call
  const darkSkyURL = 'https://api.darksky.net/forecast/';
  // To bypass the Cross Domain Error, can I pass in an object of mode: 'no-cors' as my proxy variable?
  const corsProxy = 'https://cors-anywhere.herokuapp.com/'; // can I pass in a mode: 'no-cors' object in place of this proxy?
  //const apiKey = '845ff6b003aba8bd1a9434ab040ef79c/';
  const apiKey = darkSkyAPIKey;  
  const units = '/?units=si';
  const locationData = location.lat + ',' + location.lon;
  const requestObject = corsProxy + darkSkyURL + apiKey + locationData + units;
  
  $.getJSON(requestObject).done(function(response) {
    console.log(response);
    // set our initial temperature to Fahrenheit due to the response data return the unit of celsius as the response data
    const weatherTemperature = (roundTemperature((response.currently.temperature) * 9/5 + 32));

    const userWeatherIcon = response.currently.icon;
    /* Set icons to the value of specific Skycons functions*/
    const icons = new Skycons({'color': 'white'});
    icons.add(document.getElementById('userWeatherIcon'), userWeatherIcon);
    icons.play();

    weatherData.temperatureValue = weatherTemperature;
    weatherData.city.innerHTML = cityName;
    weatherData.temperature.innerHTML = weatherTemperature + weatherData.units;
  }, false);
});

/** 
 *  MIAMI SECTION, first attempt at trying to render multiple sections, means double the amount of API calls.
 * will this reduce me rendering time? If so how do I increase the speed?
 */

// var weatherDataMIA = {
//   city: document.querySelector ("#cityMIA"),
//   state: document.querySelector ("#stateMIA"),
//   weather: document.querySelector ("#weatherMIA"),
//   temperature: document.querySelector("#temperatureMIA"),
//   icon: document.querySelector ('#weatherIconMIA'),
//   temperatureValue: 0,
//   units: "°F"
// };
// // Might be able to refactor code to do this once with the
// // temperature for all ajax calls
// function roundTemperature(temperature){
//       temperature = temperature.toFixed(1);
//       return temperature;
// }

// function switchUnits () {
//   if (weatherDataMIA.units == "°C") {
//     weatherDataMIA.temperatureValue = roundTemperature(weatherDataMIA.temperatureValue * 9/5 + 32);
//     weatherDataMIA.units = "°F";

//   } else {
//     weatherDataMIA.temperatureValue = roundTemperature((weatherDataMIA.temperatureValue - 32) * 5/9);
//       weatherDataMIA.units = "°C";
//   }
//     weatherDataMIA.temperature.innerHTML = weatherDataMIA.temperatureValue + weatherDataMIA.units + " ";
// }

// //https://api.darksky.net/forecast/845ff6b003aba8bd1a9434ab040ef79c/37.8267,-122.4233
// // get geolocation data from ip via ip-api.com
// var getIPMIA = 'http://ip-api.com/json/';
// //Dark Sky API key: 845ff6b003aba8bd1a9434ab040ef79c
// //OpenWeatherMap API key:
// // get weather data from Open Weather API, use geolocation
// // var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather'
// // var darkSkyAPI = 'https://api.darksky.net/forecast/'
// // var CORS = 'https://cors-anywhere.herokuapp.com/'
// // var apiKey = '845ff6b003aba8bd1a9434ab040ef79c/'
// $.getJSON(getIPMIA).done(function(locationMIA) {
//     //show location object in console, to pull out 'regionName' or the state for rendering in html
//     console.log(locationMIA);
//     console.log("Your region/state name is: " + locationMIA.regionName);
//       var regionNameMIA = locationMIA.regionName;
//       weatherDataMIA.state.innerHTML = regionName + ", ";
//       //Now that we have the location data we can pass this within our DarkSky Ajax call
//       var darkSkyURLforMIA = 'https://api.darksky.net/forecast/'
//       // To bypass the Cross Domain Error, can I pass in an object of mode: 'no-cors' as my proxy variable?
//       // or is this only used with the fetch function?
//       // the use of:
//       //        mode: 'no-cors' to get rid of the CORS issue:
//       //    EXAMPLE:
//       //        fetch(apiLinkDS, {
//       //              mode: 'no-cors'
//       //           })
//       //
//       var corsProxyMIA = 'https://cors-anywhere.herokuapp.com/' //can I pass in a mode: 'no-cors' object in place of this proxy?
//       var apiKeyMIA = '845ff6b003aba8bd1a9434ab040ef79c/'
//       // will locationData be a string? location.lat object + string + location.lat object == String??
//       // OR is locationData = (response object + string object + response object) ??
//       var locationDataMIA = locationMIA.lat + "," + locationMIA.lon; //should I use ( ) to wrap these 3 objects together?
//       var requestObject = corsProxyMIA + darkSkyURLforMIA + apiKeyMIA + locationDataMIA;
//       //start Ajax call pass in the above data, in order:
//       // CORS + DarkSky API URL + API KEY + locationData
//       $.getJSON(requestObjectMIA).done(function(responseMIA) {
//             console.log(responseMIA);
//             //why do I need this positon object?
//             var positionMIA = {
//               latitude: responseMIA.latitude,    //25.7617° N
//               longitude: responseMIA.longitude   //80.1918° W
//             };
//             var cityNameMIA = locationMIA.city;

//             var weatherDescription = response.currently.summary;
//             //set our initial temperature to Fahrenheit due to the response data return the unit of celsius as the response data
//             var weatherTemperature = (roundTemperature((response.currently.temperature) * 9/5 + 32));
//             //verification, delete later if you see this.
//             console.log('The current weather for your location is: ' + weatherTemperature);

//             var userWeatherIcon = response.currently[0].icon;
//             console.log('Your current weather icon code for your location: ' + userWeatherIcon);

//             weatherData.temperatureValue = weatherTemperature;
//             /* took out weatherSimpleDescription in the loadBackground function parameter, replaced weatherDescription
//                We dont want to set the icon to the actual string 'rain', but the 'rain' icon.
//                We should probably set our icons below this ajax call      */
//             //weatherData.icon.innerHTML = userWeatherIcon;
//             weatherData.city.innerHTML = cityName;
//             weatherData.temperature.innerHTML = weatherTemperature + weatherData.units;
//             weatherData.weather.innerHTML = weatherDescription;
//       }, false);
// });

// Instructions:
// 1.) Comment out the weatherlyIcons.js script, then try to render this page w/
// this weatherlyIcon.js code below uncommented. If error happens, log error below, and
// continue testing with this Skycons javascript below to figure out how to place this within same
// file. Will seperating Icon scripts from the actual scripts that completes the AJAX
// call for the weatherData hinder each other? Log Updates below.
// UPDATES:
// UPDATES:
