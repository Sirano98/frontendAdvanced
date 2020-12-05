// Factorialize a Number

var num = 5;

// Imperative

function factorial(num) {
    var result = 1,
        i;
    for (i = 1; i <= num; i += 1) {
        result *= i;
    }
    return result
};

// Declarative
// function factorial(num) {
//     if (num === 1) {
//         return 1;
//     } else {
//         return num * factorial(num - 1);
//     };
// };

console.log(factorial(num));