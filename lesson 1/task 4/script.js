// Find the Longest Word in a String

var str = "The quick brown fox jumped over the lazy dog",
    counter = 0,
    max = 0;

// Imperative

// function findLongestWordLength(str) {
//     var size = str.length,
//         i;
//     for (i = 0; i < size; i += 1) {
//         if (str[i] !== " ") {
//             counter += 1;
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
// };

// Declarative

function findLongestWordLength(str) {
    var arrayOfStrings = str.split(" "),
        size = arrayOfStrings.length,
        i;
    for (i = 0; i < size; i += 1) {
        if (max < arrayOfStrings[i].length) {
            max = arrayOfStrings[i].length;
        }
    };
    return max
};

console.log(findLongestWordLength(str));