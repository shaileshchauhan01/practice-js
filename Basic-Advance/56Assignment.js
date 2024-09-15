let person = [
    { name: "John", grade: 8, sex: "M" },
    { name: "Sarah", grade: 12, sex: "F" },
    { name: "Bob", grade: 16, sex: "M" },
    { name: "Johny", grade: 2, sex: "M" },
    { name: "Ethan", grade: 4, sex: "M" },
    { name: "Paula", grade: 18, sex: "F" },
    { name: "Donald", grade: 5, sex: "M" },
    { name: "Jennifer", grade: 13, sex: "F" },
    { name: "Courtney", grade: 15, sex: "F" },
    { name: "Jane", grade: 9, sex: "F" },
    { name: "John", grade: 17, sex: "M" },
    { name: "Arya", grade: 14, sex: "F" },
]

// find the avg grade
let avg = person.reduce((acc, cv) => {
    return acc + cv.grade;
}, 0)
avg / person.length;

// find the avg grade of male 
let maleAvg = person.filter((person) => person.sex == "M")
    .reduce((acc, cv) => {
        return acc + cv.grade;
    }, 0) / person.length;

// find the avg grade of female
let femaleAvg = person.filter((female) => female.sex == "F")
    .reduce((acc, cv) => {
        return acc + cv.grade;
    }, 0) / person.length;

// find the highest grade 
let highestGrade = person.map((person) => person.grade).sort((a, b) => a - b).pop();

// find the highest grade in male
let highestGradeMale = person.filter((male) => male.sex == "M")
    .map((male) => male.grade).sort((a, b) => a - b).pop();

// find the highest grade in female
let highestGradeFemale = person.filter((female) => female.sex == "F")
    .map((female) => female.grade).sort((a, b) => a - b).pop();

// find the highest grade for people whoose name starts with "J" or "P"
let highestGradeWithJorP = person.filter((name) =>
    name.name.startsWith("J") || name.name.startsWith("P"))
    .map((JorP) => JorP.grade).sort((a, b) => a - b).pop();


const fruitBasket = ["banana", "cherry", "orange", "apple", "cherry", "orange", "apple", "banana", "cherry", "orange", "fig"];

// use the fruitBasket array to create an obj where key will be fruit and value will be times that fruit has appeared in the array.
// Output: { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }
let fruitObj = fruitBasket.reduce((acc, cv) => {
    if (acc[cv]) {
        acc[cv] = acc[cv] + 1;
    } else {
        acc[cv] = 1;
    }
    return acc;
}, {});

// use fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times that fruits appeared. use the variable fruitsObj
// Output: [["banana"], ["cherry"], ["orange"], ["apple"], ["cherry"], ["orange"], ["apple"], ["banana"], ["cherry"], ["orange"], ["fig"]];
let fruitArray = Object.keys(fruitObj).reduce((acc, cv) => {
    acc = acc.concat([[cv, fruitObj[cv]]]);
    return acc;
}, []);



const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// using reduce flat data array             //data.flat()
data.reduce((acc, cv) => {
    acc = acc.concat(cv);
    return acc;
}, []);



const dataTwo = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11], 12]];
// using reduce flat dataTwo array
dataTwo.reduce((acc, cv) => {
    acc = acc.contact(cv.flat(Infinity));
    return acc;
}, []);



// create these function which accepts a number value and returns:
// "increment" adds one to input value
// "double" doubles the input value
// "decrement" decrement 1 from the value
// "triple" triples the input
// "half" covert the input into half and return the integer value not decimal (use Math.round(21,5)
function increment(num) {
    return num + 1;
}
function double(num) {
    return num * 2;
}
function decrement(num) {
    return num - 1;
}
function triple(num) {
    return num * 3;
}
function half(num) {
    return Math.round(num / 2)
}



let pipeline = [
    increment,
    double,
    decrement,
    decrement,
    double,
    triple,
    half,
    increment
];
// using the pipeline variable thata contains the collection of functions, taking the initial value 3 find the output
// note: initial value will be passed to first function the output of that function will b ethe input to next function.
// Example: initialValue -v3
//          increment(3) - return 4
//          double(4) - return 8
//          decrement(8) - return 7

pipeline.reduce((acc, cv) => {
    acc = cv(acc);
    return acc;
}, 3);


let pipelineTwo = [
    increment,
    half,
    double,
    decrement,
    decrement,
    triple,
    double,
    triple,
    half,
    increment,
    triple,
];

pipelineTwo.reduce((acc, cv) => {
    acc = cv(acc);
    return acc;
}, 8)