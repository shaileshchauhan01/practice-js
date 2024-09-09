let colors = ["Aqua", "Black", "Blue", "Brown", "Chocolate", "Coral", "Crimson", "DarkBlue", "DarkGrey"];
let numbers = [1, 4, 5, 6, 7, 8, 12, 14, 156, 265]

// MAP
function double(number){
    return number * 2
}

// map is not only giving access to numbers, it giving access to three elements : number, index and full Array.
// function double(numbers,index, arr){
//     console.log(numbers,index, arr, "hello")
// }

let doubleNumbers = numbers.map(double);
console.log(doubleNumbers,"😊")
// (10) [2, 8, 10, 12, 14, 16, 24, 28, 312, 530]


// FILTER
function isEven(num){
    return num % 2 == 0;
}
let evenNumbers = numbers.filter(isEven);
evenNumbers;
// (6) [4, 6, 8, 12, 14, 156]

// return 1;                    //[1, 4, 5, 6, 7, 8, 12, 14, 156, 265]              : bcz 1 is truthy value.
// if return nothing;           //[]                         : bcz empty value or no value is a falsy value.


// filter return a collection of value and find just return only one value 

// FIND
function isTweleve(num){
    return num == 12;
}
let findTwelve = numbers.find(isTweleve)
findTwelve;
// 12


function larger(num){
    return num >5;
}
let largerNum = numbers.find(larger)
largerNum;
// 6

function larger(num){
    return num >5;
}
let largerNumber = numbers.findIndex(larger)
largerNumber;
// 3


// SOME :  return true only if one of the element of array return true when it is pass to callback function.
let returnColor = colors.some(function (color){
    return color.includes("ocola");
 })
returnColor;
// true

let returnNumber = numbers.some(function (number){
    return number > 1000;
})
returnNumber;
// false

// EVERY: return true only if all of the element of array return true when it is pass to callback function.
let retC = colors.every(function (color){
    return colors.length > 2;
})
retC;
// true

let returnC = colors.every (function(color){
    return colors.includes("o")
})
returnC;
// false


// SORT : always mutates the original array or value. 
// if it is returning
// Negative : < 0 less then 'a' will become 1st element
// Positive : > o greater then 'b' will become 1st element
// 0 : every thing remains same

function compareNumber(a,b){
    return a-b;
}
numbers.sort(compareNumber);
// (10) [1, 4, 5, 6, 7, 8, 12, 14, 156, 265]

function compareNumber(a,b){
    return b-a;
}
numbers.sort(compareNumber);
// (10) [265, 156, 14, 12, 8, 7, 6, 5, 4, 1]


// REDUCE : used for reducing a multiple element of array inti indivisual element that can be a number, string, array, object and any other thing.

// let sum = 0 ;
// numbers.forEach((num) => {
//     sum = sum + num;
// });
// console.log(sum);
// // 478

// let allColors = "";
// colors.forEach((color) => {
//     allColors = allColors + color;
// })
// console.log(allColors)
// // AquaBlackBlueBrownChocolateCoralCrimsonDarkBlueDarkGrey


// numbers.reduce(cb, initialValue)
// numbers.reduce(accuumulator, currentValue, i , array)

numbers.reduce((acc, num) => {
    return acc + num;
},0);
// 478

// acc = initialValue = 0
// num = 1
// cb => 0+1 = 1
// acc = initialValue = 1
// num = 4
// cb => 1+4 = 5 ... so on

colors.reduce((acc, color) => {
    return acc + color;
},"");
// AquaBlackBlueBrownChocolateCoralCrimsonDarkBlueDarkGrey

// ARRAY : REDUCE : if initialize with number it will return : Number
                    // ------------------ string : string, object , array.