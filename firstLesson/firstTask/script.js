var button = document.querySelector("button");
var result = document.querySelector(".result");

button.addEventListener("click", convertToF);

function convertToF() {
    var userData = document.querySelector("input");
    var fahrenheit = userData.value * 1.8 + 32;
    result.innerHTML = fahrenheit + " &deg F";
    userData.value = "";
}