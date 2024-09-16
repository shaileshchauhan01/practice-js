// https://github.com/ryanmcdermott/clean-code-javascript : go through this link


// use meaningfull and pronounciable variable names 
let evenNumbers = [2, 4, 6, 8, 10];

// function name should say what they do 
function getEvenNumbers(arr) {
    return arr.filter((n) => n % 2 == 0)
}

// don't add unneeded context 
let student = {
    studentName : "John",                   // instead of using 'studentName' , just use 'name' because student is already defined
    studentAge : 21,
    studentMarks : 95,
}

// use default arguments
function fullName(firstName = "", lastName = "") {
    return firstName + lastName;
}

// prefer using const over let and var

// make your function as pure as possible 
function getFullName(firstName, lastName) {
    return firstName + lastName;
}