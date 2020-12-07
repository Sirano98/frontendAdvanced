var weatherDescription = document.querySelector('.description');
var temperature = document.querySelector('.temperature');
var humidity = document.querySelector('.humidity');
var windSpeed = document.querySelector('.wind-speed');
var city = document.querySelector('.city');
var getWeatherButton = document.querySelector('.get-weather-button');
var feelsLike = document.querySelector('.feels-like');
var pressure = document.querySelector('.pressure');
var input = document.querySelector('.input-search');
var microphone = document.querySelector('.microphone');
var modalText = document.querySelector('.modal-text');

document.addEventListener('DOMContentLoaded', getGeolocationData);

getWeatherButton.addEventListener('click', getWeatherByUserData);

getWeatherButton.addEventListener('click', cleanInput);

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
    city.innerHTML = data.name;
    weatherDescription.innerHTML = getWeatherDescription(data.weather);
    temperature.innerText = getTemperature(data.main.temp);
    windSpeed.innerHTML = 'Wind speed \<br> ' + data.wind.speed + ' meter/sec';
    humidity.innerHTML = 'Humidity \<br> ' + data.main.humidity + ' %';
    pressure.innerHTML = 'Pressure \<br> ' + data.main.pressure + ' hPa';
    feelsLike.innerHTML = 'Feels-like \<br> ' + data.main.feels_like + ' °C';
}

function getWeatherDescription(weather) {
    var description;
    weather.forEach(function (details) {
        description = details.description;
    })
    return description;
}

function getTemperature(degreesKelvin) {
    return Math.round(degreesKelvin - 273.15) + ' °C';
}

function getWeatherByUserData() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=9b8fbc52a5e4d0c87d96ed277b0822a8')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayData(data);
        })
}

function cleanInput() {
    input.value = '';
}