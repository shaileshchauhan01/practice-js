// Implement the methods
// for and for of loop

// 'map': 
// STEPS: map accepts a callback function , in our case we need two arguments array and cb
// the callback function gets the access to three things (elm, index, array)
// call the cb function with each values
// storethe return value in a new array for each elm
// returns the new array

// Implementation:
function map(array, cb) {
    let final = [];
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        final.push(cb(element, index, array));
    }
    return final;
}

// "forEach"
// STEPS: accepts two parameter array and cb function
// loops over all the elm of the array
// call the cb function with the values (elm, i , arr)
// returns undefined

// Implementation:
function forEach(array, cb) {
    for (let i = 0; i < array.length; i++) {
        let elm = array[i];
        cb(elm, i, array);
    }
}

// "filter"
// STEPS: accepts two parameter array and cb function
// loops over each element
// call the cb function with each element
// if the callback returns truth add to new array or dont
// returns the new array

// Implementation:
function filter(array, cb) {
    let final = [];
    for (let i = 0; i < array.length; i++) {
        let elm = array[i];
        if (cb(elm, i, array)) {
            final.push(elm);
        }
    }
    return final;
}

// "reduce"
// STEPS: accepts teh parameter array and cb function and initial value of accumulator
// loop over each elm
// call the cb function with (acc, elm, i, arr)
// acc = initialValue
// value returned from the cb function will be the next value of acc
// return the final value of acc

// Implementation:
function reduce(array, cb, iv) {
    let acc = iv;
    for (let i = 0; i < array.length; i++) {
        let elm = array[i];
        acc = cb(acc, elm, i, array);
    }
    return acc;
}

// "find"
// STEPS: accepts two parameter array and cb function
// loop over each elm of the array
// call the cb function with each elm
//  if it returns "true" return the elm

// Implementation:
function find(array, cb) {
    for (let i = 0; i < array.length; i++) {
        let elm = array[i];
        if (cb(elm, i, array)) {
            return elm;
        }
    }
}

// TEST THE FUNCTION / CODE

let array = [10, 20, 43, 56, 76, 89, 90];

forEach(array, (num, index, array) => {
    console.log(num, index, array);
});
// 10 0 (7) [10, 20, 43, 56, 76, 89, 90]
// 20 1 (7) [10, 20, 43, 56, 76, 89, 90]
// 43 2 (7) [10, 20, 43, 56, 76, 89, 90]
// 56 3 (7) [10, 20, 43, 56, 76, 89, 90]
// 76 4 (7) [10, 20, 43, 56, 76, 89, 90]
// 89 5 (7) [10, 20, 43, 56, 76, 89, 90]
// 90 6 (7) [10, 20, 43, 56, 76, 89, 90]
// undefined


map(array, (num, index, array) => {
    return num + index;
});
// (7) [10, 21, 45, 59, 80, 94, 96]


filter(array, (num, index, array) => {
    return num % 2 == 0;
});
// (5) [10, 20, 56, 76, 90]


reduce(array, (num, acc, num, index) => {
    return acc + num;
}, 0);
// 384


find(array, (num) => num == 20);
// false