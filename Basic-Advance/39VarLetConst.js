// var - function scoped                        // var only create scope inside function.
// let - block and function scoped              // let/const create scope inside function as well as block.
// const - block and function scoped

let name = " Shailesh";
name = "Shailesh Chauhan"
{
    let myname = "naam";             // not accessible , var is defined using let it creates a scope inside a block.
}

function sayHello() {
    let number = 10;
}
number()                               // error,  whenever var is defined using let indide function it creates a scope.

var myName = " Shailesh";
{
    var yourName = "naam";             // not accessible , var is defined using var it creates a scope inside a block.
}

function sayHello() {
    var numbers = 10;
}
sayHello() 


for (let i = 0; i<5; i++){
    console.log(i)
}
console.log(i, "outside")              // error - not access globally


for (var i = 0; i<5; i++){
    console.log(i)
}
console.log(i, "outside")              // proper result - access globally