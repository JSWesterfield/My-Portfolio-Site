
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
              
              var userWeatherIcon = "<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Icon depicting current weather.'>";
              console.log('Your current weather icon code for your location: ' + response.weather[0].icon);

              var iconUrl = "http://openweathermap.org/img/w/" + userWeatherIcon + ".png";
              $("#weatherIconSJC").html("<img src='" + iconUrl  + "'>");
              $("#weatherIconLAX").html("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Icon depicting current weather.'>");

              weatherData.temperatureValue = weatherTemperature;

              // took out weatherSimpleDescription in the loadBackground function parameter, replaced weatherDescription
              //loadBackground(position.latitude, position.longitude, weatherDescription);
              weatherData.city.innerHTML = cityName;
              weatherData.temperature.innerHTML = weatherTemperature + weatherData.units;
              weatherData.icon.innerHTML = userWeatherIcon;
              weatherData.weather.innerHTML = weatherDescription;
            }, false);

        })
        




