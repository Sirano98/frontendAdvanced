function chunkArrayInGroups(arr, size) {
    var i,
        len = arr.length,
        newArray = [],
        subArray = [];

    for (i = 0; i <= len; i += 1) {
        if (subArray.length === size || i === len) {
            newArray.push(subArray);
            subArray = [];
            subArray.push(arr[i]);
        } else {
            subArray.push(arr[i])
        }
    }
    return newArray;
};

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));