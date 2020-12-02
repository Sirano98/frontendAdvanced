// Factorialize a Number

var userNumber = +prompt("Введите число");

function factorial(userNumber) {
    if (userNumber === 1) {
        return 1;
    } else {
        return userNumber * factorial(userNumber - 1);
    }
}

alert(factorial(userNumber));