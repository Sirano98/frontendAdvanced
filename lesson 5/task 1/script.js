// Title Case a Sentence

function titleCase(str) {
    var arrayFromStr = str.toLowerCase().split(" "),
        size = arrayFromStr.length,
        i;

    for (i = 0; i < size; i += 1) {
        arrayFromStr[i] = arrayFromStr[i].replace(arrayFromStr[i][0], arrayFromStr[i][0].toUpperCase());
    }
    return arrayFromStr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));