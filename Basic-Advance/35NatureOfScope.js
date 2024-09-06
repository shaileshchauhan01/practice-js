// Nature of scope

// Local variable 

function sayHello(){
    let username = "Shailesh"
    return username
}
sayHello()


// outer variable

let username = "Shailesh"
function sayHello(){
    return username
}
sayHello()