// Return Largest Numbers in Arrays

var arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

// Declarative

function getLargestNumber(arr) {
    var newArr = [];

    arr.map(function (subArray) {
        var max = Math.max.apply(Math, subArray);
        newArr.push(max);
    });
    return newArr;
};

// Imperative
// function getLargestNumber(arr) {
//     var newArr = [],
//         size = arr.length,
//         i,
//         j;
//     for (i = 0; i < size; i += 1) {
//         var max = 0;
//         for (j = 0; j < arr[i].length; j += 1) {
//             if (max < arr[i][j]) {
//                 max = arr[i][j];
//             };
//         }
//         newArr.push(max);
//     };
//     return newArr;
// };

console.log(getLargestNumber(arr));