// console : Object
// console.log() : function

// Semantic logging :-
console.warn(); 
console.error();
console.info();


// String substitution :-         
console.log("Hello %cWorld!", "color: red; font-size: 20px");               // %c: style
console.log("Hello %sWorld!", "'testing %s' ");                             // %c: add new text


// Group :-
let users = [
    {name: "Arya", age: 19},
    {name: "John", age: 22},
    {name: "Sarra", age: 21},
];

// without grouping :-
for(let i = 0; i < users.length; i++){
    console.log(users[i].name);
    console.log(users[i].age);
}

// with grouping :-
for(let i = 0; i < users.length; i++){
    console.group(users[i].name);
    console.log(users[i].name);
    console.log(users[i].age);
    console.groupEnd();
}


// Time :-
console.time("timeCreate");
let data = [];
for(let i = 0; i < 100000; i++){
    data.push(i * 2);
}
console.timeEnd("timeCreate");


// Table :-
console.table(users);
console.table(users, ["name"]);
console.table(users, ["age"]);
