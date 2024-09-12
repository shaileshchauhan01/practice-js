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
    { name: "Jane", grade: 9, sex: "M" },
    { name: "John", grade: 17, sex: "M" },
    { name: "Arya", grade: 14, sex: "F" },
]

// create an array peopleName and store value of name key from person array.
let peopleName = person.map((personn) => personn.name);

// create an array peopleGrade and store value of grade key from person array.
let peopleGrade = person.map((prsn) => prsn.grade);

// create an array peopleSex and store value of sex key from person array.
let peopleSex = person.map((prsn) => prsn.sex);

// log the filtered name of people in peopleName that starts with "J" or "P"
console.log(peopleName.filter((name) => name.startsWith("J") || name.startsWith("P")));

// log the length of filtered name of people in peopleName that starts with "A" or "C"
console.log(peopleName.filter((length) => length.startsWith("A") || length.startsWith("C")));

// log all the filtered male ("M") in a person array
console.log(person.filter((male) => male.sex == "M"));

// log all the filtered female ("F") in a person array
console.log(person.filter((female) => female.sex == "F"));

// log all the filtered female ("F") whose name starts with "C" or "J" in person array.
console.log(person.filter((person) => person.sex == "F").filter((person) => person.name.startsWith("C") || person.name.startsWith("J")));

// log all the even numbers from peopleGrade array
console.log(peopleGrade.filter((even) => even % 2 == 0));

// find the first name that starts with 'J' in person array and log the object
person.find((person) => person.name.startsWith("J"));

// find the first name that starts with 'P' in person array and log the object
person.find((person) => person.name.startsWith("P"));

// find the first name that starts with 'J', grade is greater than 10 and is a female
person.find((prsn) => prsn.name.startsWith("J") && prsn.grade > 10 && prsn.sex == "F");

// filter all the female from the person array and store in femalePerson array
let femalePerson = person.filter((female) => female.sex === "F");

// filter all the male from the person person array and store in malePerson array
let malePerson = person.filter((male) => male.sex === "M");

// find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce((acc, cv) => acc + cv, 0);

// find the average grade
gradeTotal / peopleGrade.length;

// find the average grade of male
let maleGrade = person.filter((avg) => avg.sex == "M").map((person) => person.grade);
maleGrade.reduce((acc, cv) => {
    return acc + cv;
}, 0) / maleGrade.length;

// find the average grade of female
let femaleGrade = person.filter((avg) => avg.sex == "F").map((person) => person.grade);
maleGrade.reduce((acc, cv) => {
    return acc + cv;
}, 0) / femaleGrade.length;

// find the highest grade
[...peopleGrade].sort((a, b) => a - b).pop();

// find the highest grade in male
[...maleGrade].sort((a, b) => a - b).pop();

// find the highest grade in female
[...femaleGrade].sort((a, b) => a - b).pop();

// find the highest grade for people whose name starts with "J" or "P"
let nameWithJorP = person.find((person) => person.name.startsWith("J") || person.name.startsWith("P"));
let gradeWithJorP = nameWithJorP.map((garde) => person.grade);
let highestGradeWithJorP = gradeWithJorP.sort((a, b) => a - b).pop();

// sort the peopleGrade in ascending order and log the value of peopleGrade.
peopleGrade.sort((a, b) => a - b);

// sort the peopleGrade in descending order
peopleGrade.sort((a, b) => b - a);

// sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
[...peopleGrade].sort((a, b) => b - a);

// sort the array peopleName in ascending "ABCD..Zabc...z"
peopleName.sort();

// sort the array peopleName in ascending "ABCD..Zabc...z". Make sure you don't mutate the original array
[...peopleName].sort();
