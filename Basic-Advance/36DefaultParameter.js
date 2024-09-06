// Default parameter

function add(a = 0, b = 0) {                                                    // when we dont assign value then the value of parameter defaults to undefined
    console.log(`Value of a is ${a}, value of b is ${b}`);
    return a + b;
}
add(12);

function multiply(c = 1, d = 1) {
    console.log(`Value of c is ${c}, value of d is ${d}`);
    return c * d;
}
multiply(15);