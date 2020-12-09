// Finders Keepers

function findElement(arr, func) {
    var i,
        size = arr.length;

    for (i = 0; i < size; i += 1) {
        if (func(arr[i])) {
            return arr[i];
        };
    };
};

console.log(findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; }));