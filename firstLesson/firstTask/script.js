// Convert Celsius to Fahrenheit

var input = document.querySelector("input");
var button = document.querySelector("button");
var result = document.querySelector(".result");

button.addEventListener("click", convertToF);

function convertToF() {
    var userData = input.value;
    var fahrenheit = userData.value * 1.8 + 32;
    result.innerHTML = fahrenheit + " &deg F";
    input.value = "";
}