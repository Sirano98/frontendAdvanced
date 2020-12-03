// Factorialize a Number


var userNumber = +prompt("Введите число");

// Imperative
var result = 1;
function factorial(userNumber) {
    for (var i = 1; i <= userNumber; i++) {
        result *= i;
    }
    return result
};

// Declarative
// function factorial(userNumber) {
//     if (userNumber === 1) {
//         return 1;
//     } else {
//         return userNumber * factorial(userNumber - 1);
//     }
// }

alert(factorial(userNumber))