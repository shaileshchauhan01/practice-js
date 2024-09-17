// Why do we need testing?

// To identify errors / risks
// To speedup the workflow
// It helps to ensutre that the existing code is not breaking while adding new features

// What is test?

// A test is code that throws an error when the resuts we get doesn't match the expected result.


function add(a, b) {
    return a + b;
}

let result = add(2,4);

let expected = 5;

if (result !== expected){
    throw new Error(`${result} is not equal as expected ${expected}`)
}


function subtract(a, b) {
    return a - b;
}

// let result = subtract(21,4);

// let expected = 10;

// if (result !== expected){
//     throw new Error(`${result} is not equal as expected ${expected}`)
// }