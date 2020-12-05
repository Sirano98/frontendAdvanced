//  Repeat a String

function repeatStringNumTimes(str, num) {
    if (num > 0) {
        var newStr = '',
            i;
        for (i = 0; i < num; i += 1) {
            newStr += str;
        };
        return newStr;
    } else {
        return "";
    };
};

console.log(repeatStringNumTimes("abc", 3));