// Find the Longest Word in a String

var str = "The quick brown fox jumped over the lazy dog";
var counter = 0;
var max = 0;

// Imperative

// function findLongestWordLength() {
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] !== " ") {
//             counter++;
//             if (max < counter) {
//                 max = counter;
//             };
//         } else {
//             if (max < counter) {
//                 max = counter;
//             };
//             counter = 0;
//         };
//     };
//     return max;
// }

// alert(findLongestWordLength());

// Declarative
