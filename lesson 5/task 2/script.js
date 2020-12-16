// Slice and Splice

function frankenSplice(arr1, arr2, n) {
    var newArray = arr2.slice(),
        size = arr1.length,
        i;
    for (i = size - 1; i >= 0; i -= 1) {
        newArray.splice(n, 0, arr1[i]);
    }
    return newArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));