// Reverse a String

var str = "hello";
// Imperative

function reverseString(str) {
    var size = str.length - 1,
        newStr = "",
        i;
    for (i = size; i >= 0; i -= 1) {
        newStr += str[i];
    };
    return newStr;
};

// Declarative

// function reverseString(str) {
//     return str.split('').reverse().join('');
// };

console.log(reverseString(str));