// 2.

// const maxofThreeNumbers = (x, y, z) => {
//     if (x >= y) {
//         return x;
//     } 
//     else if (x >= y) {
//         return y;
//     } 
//     else {
//         return z;
//     }
// }

// console.log(maxofThreeNumbers(1,2,3));

// 3.

// const isCharAVowel = (char) => {
// vowel = ['a', 'i', 'e', 'o', 'u'];
// return vowel.includes(char);
// }
// console.log(isCharAVowel('b'));

// 4 and 5. Define a function, as a function expression, 
//sumArray that takes an array of numbers and returns the sum of those numbers. 
// For example, sumArray([2, 4, 5]); would return 11.

// const sumArray = (inputArray) => {
// let sumArray = 0;
// for (let i = 0; i < inputArray.length; i++){
//     sumArray += inputArray[i]   
// } 
//     return sumArray
// } 
// console.log(sumArray([2, 4, 5]))

// const sumArray = (inputArray) => {
//     let sumArray = 1;
//     for (let i = 0; i < inputArray.length; i++){
//         sumArray *= inputArray[i]   
//     } 
//         return sumArray
//     } 
//     console.log(sumArray([2, 4, 5]))

//6. weird use case of function???, using arrow function made it output 5
// have to mix both???
// function numArgs() {
//     return arguments.length
// }
// console.log(numArgs(3,2));

// const numArgs = function() {
//     return arguments.length
// } 
// console.log(numArgs(3));

// 7. 

// const reverseString = function(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("rockstar"));

//8.

// var longestString = ["one", "seven", "twenty-five"];
// var longest = longestString.reduce((a, b) => a.length > b.length ? a : b, '');
// console.log(longest);

//9.
// const RickRoll = ["never", "gonna", "give", "you", "a", "up"];
// const result = RickRoll.filter(word => word.length > 1)
//     console.log(result);
