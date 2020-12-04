// Return Largest Numbers in Arrays

var arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

// Declarative

// function getLargestNumber(arr) {
//     var newArr = [];

//     arr.map(function (subArray) {
//         var max = Math.max.apply(Math, subArray);
//         newArr.push(max);
//     });
//     return newArr;
// };

// Imperative
function getLargestNumber(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var max = 0;
        for (var j = 0; j < arr[i].length; j++) {
            if (max < arr[i][j]) {
                max = arr[i][j];
            }
        }
        newArr.push(max);
    }
    return newArr;
};

alert(getLargestNumber(arr));