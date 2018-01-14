
    var weatherData = {
      city: document.querySelector ("#userCity"),
      state: document.querySelector ("#userState"), 
      weather: document.querySelector ("#userWeather"),
      temperature: document.querySelector("#userTemperature"),
      icon: document.querySelector ('#userWeatherIcon'),
      temperatureValue: 0,
      units: "°F"
    };

    function roundTemperature(temperature){
          temperature = temperature.toFixed(1);
          return temperature;
    }

    function switchUnits () {
      if (weatherData.units == "°C") {
        weatherData.temperatureValue = roundTemperature(weatherData.temperatureValue * 9/5 + 32);
        weatherData.units = "°F";
      
      } else {
        weatherData.temperatureValue = roundTemperature ((weatherData.temperatureValue - 32) * 5/9);
          weatherData.units = "°C";  
      }
        weatherData.temperature.innerHTML = weatherData.temperatureValue + weatherData.units + " ";
    }

    // function getLocationAndWeather(){
    //   if (window.XMLHttpRequest){
    //     var xhr = new XMLHttpRequest();
    //     xhr.addEventListener("load", function() {
    //       var response = JSON.parse(xhr.responseText);

    //       console.log(response);
    //       var position = {
    //         latitude: response.latitude,
    //         longitude: response.longitude
    //       };
    //       var cityName = response.city;

    //       //var weatherSimpleDescription = response.weather.simple;
    //       var weatherDescription = response.weather.description;
    //       var weatherTemperature = (roundTemperature((response.weather.temperature) * 9/5 + 32));
    //       var userWeatherIcon = response.weather.icon;

    //       weatherData.temperatureValue = weatherTemperature;

    //       loadBackground(position.latitude, position.longitude, weatherSimpleDescription);
    //       weatherData.city.innerHTML = cityName;
    //       weatherData.temperature.innerHTML = weatherTemperature + weatherData.units;
    //       weatherData.icon.innerHTML = userWeatherIcon;
    //       weatherData.weather.innerHTML = weatherDescription;
    //     }, false);

    //     xhr.addEventListener("error", function(err){
    //       alert("Could not complete the request");
    //     }, false);

    //     xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Berlin&APPID=d8be0f02752ec0698888d899e60425d8&units=metric", true);  
    //     //xhr.open("GET", "https://fourtonfish.com/tutorials/weather-web-app/getlocationandweather.php?owapikey=d8be0f02752ec0698888d899e60425d8&units=metric", true);
    //     xhr.send();
    //   }
    //   else{
    //     alert("Unable to fetch the location and weather data.");
    //   }           
    // }

    // function loadBackground(lat, lon, weatherTag) {
    //   var script_element = document.createElement('script');

    //   script_element.src = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1452866c8cea54acd0075022ef573a07&lat=" + lat + "&lon=" + lon + "&accuracy=1&tags=" + weatherTag + "&sort=relevance&extras=url_l&format=json";
    //   //User now uses ip-api.com
    //   document.getElementsByTagName('head')[0].appendChild(script_element);
    // }

    // function jsonFlickrApi(data){
    //   if (data.photos.pages > 0){
    //     var randomPhotoId = parseInt(data.photos.total);
    //     var photo = data.photos.photo[Math.floor(Math.random()*parseInt(data.photos.photo.length))];
    //     // commented out until I figure out how to render this background image to fit the section better and if I want to try to render this within the small 'section' element.
    //     //document.querySelector("#userWeather").style.backgroundImage = "url('" + photo.url_l + "')";
    //     document.querySelector("#image-source").setAttribute("href", "http://www.flickr.com/photos/" + photo.owner + "/" + photo.id);
    //   }
    //   else {
    //     //document.querySelector("#userWeather").style.backgroundImage = "url('https://fourtonfish.com/tutorials/weather-web-app/images/default.jpg')";
    //     document.querySelector("#image-source").setAttribute("href", "https://www.flickr.com/photos/superfamous/310185523/sizes/o/");
    //   }
    // }
    // getLocationAndWeather();

    /* This program uses Open Weather Map's API to get the description of the weather given the user's location */
    // $(function() {
    //   // strings to be used to construct request
    //   var apiKey = "";
    //   var baseURL = "http://api.openweathermap.org/data/2.5/weather";
    //   // stores latitude and longitude attributes of requested JSON resource
    //   var latitude, longitude;

    //   function getLocation() {
    //     /* gets user's location */
    //     if (navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition(success, fail);
    //     }
    //   }

    //   function success(position) {
    //     /* if browser returns location, displays weather for that location */
    //     console.log(position);
    //     latitude = position.coords.latitude;
    //     longitude = position.coords.longitude;
    //     display(constructRequest(latitude, longitude));
    //   }

    //   function fail() {
    //     /* runs if user's location is not returned */
    //     console.log('fail');
    //   }

    //   function constructRequest(lat, long) {
    //     /* constructs and returns http request based on user's latitude and longitude */
    //     return baseURL + "?lat=" + lat + "&lon=" + long + "&APPID=" + apiKey;
    //   }

    //   function display(req) {
    //     /* displays the weather description given by the requested JSON object */
    //     $.getJSON(req,
    //       function(data) {
    //         $('#userCity').text(data.weather[0].description);
    //       }
    //     );
    //   }

    //   getLocation();
    // }); 

    // get geolocation data from ip via ip-api.com
    var getIP = 'http://ip-api.com/json/';

    // get weather data from Open Weather API, use geolocation 
    var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather'
    $.getJSON(getIP).done(function(location) {
        //show location object in console, to pull out 'regionName' or the state for rendering in html
        console.log(location);
        $.getJSON(openWeatherMap, {
            lat: location.lat,
            lon: location.lon,
            units: 'metric',
            APPID: 'd8be0f02752ec0698888d899e60425d8'
        }).done(function(response) {
              console.log(response);
              var position = {
                latitude: response.coord.lat,
                longitude: response.coord.lon
              };
              var cityName = response.name;

              //var weatherSimpleDescription = response.weather.simple;
              var weatherDescription = response.weather.description;
              //set our initial temperature to Fahrenheit due to the response data return the unit of celsius as the response data
              var weatherTemperature = (roundTemperature((response.main.temp) * 9/5 + 32));
              //verification, delete later if you see this.
              console.log('Your current weather for your location is: ' + weatherTemperature);
              var userWeatherIcon = response.weather.icon;

              weatherData.temperatureValue = weatherTemperature;

              // took out weatherSimpleDescription in the loadBackground function parameter, replaced weatherDescription
              loadBackground(position.latitude, position.longitude, weatherDescription);
              weatherData.city.innerHTML = cityName;
              weatherData.temperature.innerHTML = weatherTemperature + weatherData.units;
              weatherData.icon.innerHTML = userWeatherIcon;
              weatherData.weather.innerHTML = weatherDescription;
            }, false);

        })




