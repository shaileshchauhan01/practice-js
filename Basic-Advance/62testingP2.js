function add(a, b) {
    return a + b;
}

let result, expected;

function test(message, callback){
    try{
        callback();
        console.log("✅", message);
    } catch(error){
        console.log(error);
        console.log("❌", error);
    }
}

function addTest() {
    result = add(2, 4);
    expected = 5;
    if (result !== expected) {
        throw new Error(`${result} is not equal as expected ${expected}`);
    }
}
test("adding 2 and 4", addTest);

function subtract(a, b) {
    return a - b;
}

function subTest() {
    result = subtract(21, 4);
    expected = 17;
    if (result !== expected) {
        throw new Error(`${result} is not equal as expected ${expected}`);
    }
}
test("subtracting 21 and 4", subTest);