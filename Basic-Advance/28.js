// Copy by value : Primitive Datatypes

let user = "Arya";
let newUser = user;

user = "Bran";
console.log(user, ": User");
console.log(newUser, ": New User"); 


// Copy by refrence : Non-Primitive Datatypes

let data = {
    name: "Ashok",
    age: 21
}
let userData = data;

data.name = "Rajesh";
console.log(data.name, ": Data");
console.log(userData.name, ": User Data");