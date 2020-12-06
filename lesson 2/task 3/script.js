var weatherDescription = getElement('weather-description');
var temperature = getElement('temperature');
var humidity = getElement('humidity');
var windSpeed = getElement('wind-speed');
var city = getElement('city');
var getWeatherButton = getElement('get-weather-button');
var input = document.querySelector('input');
var microphone = document.querySelector('img');

document.addEventListener('DOMContentLoaded', getGeolocationData);

getWeatherButton.addEventListener('click', getWeatherByUserData);

function getElement(id) {
    return document.getElementById(id);
}

function getGeolocationData() {
    if (navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            getWeatherData(position.coords.longitude, position.coords.latitude);
        })
    } else {
        alert('Your browser does not support Navigator API');
    }
}

function getWeatherData(long, lat) {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=9b8fbc52a5e4d0c87d96ed277b0822a8')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayData(data);
        })
}

function displayData(data) {
    city.innerHTML = 'weather for ' + data.name;
    weatherDescription.innerHTML = getWeatherDescription(data.weather);
    temperature.innerText = getTemperature(data.main.temp);
    windSpeed.innerHTML = 'wind speed ' + data.wind.speed + ' meter/sec';
    humidity.innerHTML = 'humidity ' + data.main.humidity + ' %';
}

function getWeatherDescription(weather) {
    var description;
    weather.forEach(function (details) {
        description = details.description;
    })
    return 'weather description - ' + description;
}

function getTemperature(degreesKelvin) {
    return 'temperature ' + Math.round(degreesKelvin - 273.15) + ' °C';
}

function getWeatherByUserData() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=9b8fbc52a5e4d0c87d96ed277b0822a8')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayData(data);
        })
    input.value = '';
}