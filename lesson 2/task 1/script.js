// Confirm the Ending

// Declrative

function confirmEnding(str, target) {
    return new RegExp(target + "$").test(str);
};

// Imperative

// function confirmEnding(str, target) {
//     var sizeOfTarget = target.length - 1,
//         sizeOfStr = str.length - 1,
//         indexOfTarget = sizeOfStr - sizeOfTarget,
//         endOfStr = "",
//         i;
//     for (i = indexOfTarget; i <= sizeOfStr; i += 1) {
//         endOfStr += str[i];
//     };
//     if (endOfStr === target) {
//         return true
//     } else {
//         return false
//     };
// };

console.log(confirmEnding("Congratulation", "on"));