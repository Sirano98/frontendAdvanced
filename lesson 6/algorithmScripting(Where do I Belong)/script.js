// Declarative

// function getIndexToIns(arr, num) {
//     arr.sort(function (a, b) {
//         return a - b;
//     });

//     var i,
//         size = arr.length;

//     for (i = 0; i < size; i += 1) {
//         if (arr[i] >= num) {
//             return i;
//         }
//     };
//     return size;
// };

// Imperative

function getIndexToIns(arr, num) {
    var i,
        j,
        k,
        size = arr.length;
    for (i = 0; i < size - 1; i += 1) {
        for (j = i + 1; j < size; j += 1) {
            if (arr[i] > arr[j]) {
                k = arr[i];
                arr[i] = arr[j];
                arr[j] = k;
            }
        }
    };

    for (i = 0; i < size; i += 1) {
        if (arr[i] >= num) {
            return i;
        }
    };

    return size;
};

console.log(getIndexToIns([10, 40, 50, 20, 30], 35));