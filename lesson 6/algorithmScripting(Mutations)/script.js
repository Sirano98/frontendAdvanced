function mutation(arr) {
    var i,
        size = arr[1].length;
    for (i = 0; i < size; i += 1) {
        if (!(arr[0].toLowerCase().includes(arr[1][i].toLowerCase()))) {
            return false;
        }
    }
    return true;
};

console.log(mutation(["yxwvuTsrqponmlkjihgfedcba", "Qrstu"]));