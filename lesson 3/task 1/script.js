// Truncate a String

// Imerative

// function truncateString(str, num) {
//     if (num >= str.length) {
//         return str;
//     } else {
//         var newStr = '';
//         for (var i = 0; i < num; i += 1) {
//             newStr += str[i];
//         };
//         return newStr + '...';
//     }
// };

// Declarative

function truncateString(str, num) {
    if (num >= str.length) {
        return str;
    } else {
        return str.split('').slice(0, num).join('') + '...';
    }
};

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));