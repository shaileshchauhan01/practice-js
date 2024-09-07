let num = 21;    // right hand side of assignment operator will always be a EXPRESSION 

function isOdd() {
    return num % 2 !== 0;
};

isOdd.hello = "SAM";
console.log(isOdd.hello);
// function is behaving like an Object, function is a special kind of obj that can be executed

let isOdd = function (num) {
    return num % 2 !== 0;
};

function filterOdd(arr, fn) {                // higher order function
    console.log(fn(23), "hell");
    return arr;
};

function filterOdd(arr) {                // higher order function
    return arr;
};


filterOdd([1, 3, 5, 7], isOdd);                 // callBack function

// A function that accepts a function defination as an argument is known as higher order function.


// USECASE of HOF 
//1
let number = [1, 3, 4, 6, 7, 76, 84, 21, 34, 77, 90, 55];

let isOdd = function (num) {
    return num % 2 !== 0;
};
let isEven = function (num) {
    return num % 2 == 0;
};
let isDivisibleByFive = function (num) {
    return num % 5 == 0;
};

function filter(arr, cb) {
    let finalArray = [];

    for (let num of arr) {
        if (cb(num)) {
            finalArray.push(num);
        }
    }
    return finalArray;
}

console.log(filter(number, isOdd));
console.log(filter(number, isEven));
console.log(filter(number, isDivisibleByFive));


//2
function multiplyBy(num){
    return function (num2){
        return num * num2;
    };
}
let multiplyBy10 = multiplyBy(10);

console.log(multiplyBy10(20))
console.log(multiplyBy10(10))

let multiplyBy5 = multiplyBy(5);

console.log(multiplyBy5(20))
console.log(multiplyBy5(10))