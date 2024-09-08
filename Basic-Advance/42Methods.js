// Methods : function inside an object is an method. 

function add(a,b){                   // function
    return a+b;                      // accessing function
}
add(2, 3);

// differ from function

let operations = {                   // object
    sum : add,                       // accessing method
}
operations.sum(2, 3);


// using methods on primitive dt

let message = "Hello World";
message.toUpperCase();                  // adding '.' gives them access to the methods to the specific datatypes.
message.split("e");

let number = 120.123456789
number.toFixed(2);