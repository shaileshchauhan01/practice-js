// Ask the user for the house name and check soem conditions:
// if house name is "stark" then print a message " Winter is coming". 
// if house name is " lanister" then print a message  ""
// else print a message " All men must die".

let houseName = prompt("Enter your house name");
if (houseName === "stark") {
    alert("Winter is coming");
} else if (houseName === "lanister") {
    alert("A lanister always pays his debt");
} else {
    alert("All men must die");
}


// using ternary opt 
let hsName = prompt("Enter your house name");
let name = hsName === "stark" ? alert("Winter is coming") : hsName === "lanister" ? alert("A lanister always pays his debt") : alert("All men must die");
