// Reverse a String

var input = document.querySelector("input");
var button = document.querySelector("button");
var result = document.querySelector(".result");

button.addEventListener("click", reverseString);

// Imperative
function reverseString() {
    result.innerHTML = "";
    var userData = input.value;

    for (var i = userData.length - 1; i >= 0; i--) {
        result.innerHTML += userData[i];
    };
    input.value = "";
};

// Declarative
// function reverseString() {
//     result.innerHTML = "";
//     var userData = input.value;
//     result.innerHTML = userData.split('').reverse().join('');
//     input.value = "";
// };