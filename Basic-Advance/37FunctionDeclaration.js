// Function Declaration
function add(numA, numB) {
    return numA + numB;
};
add(10, 21);


// Function Expression                                  // Store a function in a variable
let addNumber = function add(numA, numB) {
    return numA + numB;
};
addNumber(10, 21);


// if(){} is a statement
// function have value like number string null undefined boolean object 
// function > object > value 


// - Anonymous Function
let addNmbr = function (numA, numB) {
    return numA + numB;
};
addNmbr(10, 21);


// - Arrow Function
let addNums = (numA, numB) => {
    return numA + numB;
};
addNums(10, 21);
// OR
let addNum = (numA, numB) => numA + numB;
addNum(10, 21);

const square = (num) => num * num;
square(5)
// OR
function sqr(num) {
    return num * num;
}
sqr(5)


// Valid Arguments and Returns
// It can not accept Statement(if/for) as an argument or return a statement from the function.