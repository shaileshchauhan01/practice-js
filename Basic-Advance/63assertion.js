// Assertion: is something that is used to compare two values wheather they are equal, sometimes we have to compare when the value is string, number or any thing. 

// JEST                 : checkout on web

let result, expected;

function sayHello(name) {
    return `Hello ${name}`;
}

// Testing framework
function test(message, callback) {
    try {
        callback();
        console.log("✅", message);
    } catch (error) {
        console.log(error);
        console.log("❌", error);
    }
}

// Assertion Library
function expect(actual) {
    return {
        isEqual: function (expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        },
        toBeEqual: function (expected) {
            if (typeof actual !== expected) {
                throw new Error(`${typeof actual} is not equal to ${expected}`)
            }
        }
    }
}

function testSayHello() {
    result = sayHello("Arya");
    expected = "string";
    expect(result).toBeEqual(expected);
}
//     if (typeof result !== expected) {                                                         // assertion
//         throw new Error(`${typeof result} is not equal to ${expected}`);                      //    --
//     }
// }

test("pass Arya and expect string", testSayHello);

test("add 10+10 to be equal 20",() => {
    expect(add(10,10)),toEqual(20);
})