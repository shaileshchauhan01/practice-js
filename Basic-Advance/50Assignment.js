let numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
let strings = ["This", "is", "a", "collection", "of", "words"];

// find the index of 101 in numbers
numbers.indexOf(101);
// ~~ 8

//find last index of 9 in numbers
numbers.lastIndexOf(9);
// ~~ 11

// covert the value of strings array into sentence
strings.join(" ");

// add two words in the strings array "called" and "sentence"
strings.push("called", "sentence"); //or
strings.splice(0, 0, "called", "sentence");

// again convert the updated array (strings) into sentence.
strings.join(" ");

// remove the first word in array
strings.shift();

// find all the words that contain "is" use string method "includes"
let wordIs = strings.filter((word) => word.includes("is"));

// find all the words that contain "is" use string method "indexOf"
let allIs = strings.filter((word) => word.indexOf("is") !== -1);

// find all the number in numbers array are divisible by three use array method (every)
let number = numbers.every(function (num) {
    return numbers % 3 === 0;
});
number
//or
number.every((num) => num % 3 === 0);

// sort array from smallest to largest
function sorting(a, b) {
    return a - b;
}
numbers.sort(sorting);
//or
[...numbers].sort((a, b) => a - b);

// remove the last word in strings 
strings.pop();

// find largest number in numbers
let largest = [...numbers].sort((a, b) => a - b).pop();

// find longest string in strings
strings.sort((a, b) => a.length - b.length).pop();

// find all even numbers
let evenNumber = numbers.filter((number) => number % 2 == 0);

// find all odd numbers
let oddNumber = numbers.filter((number) => number % 2 !== 0);

// place the new word at the start of the array use (unshift)
strings.unshift('newWord');

// make a subset of numbers array [18,9,7,11]
numbers.slice(3, 7);

// make a subset of strings array ["a","collection"]
strings.slice(3, 5);

// replace 12 and 18 with 1221 and 1881
[...numbers].splice(numbers.indexOf(12), 1, 1221);
[...numbers].splice(numbers.indexOf(18), 1, 1881);
//or
numbers.map((num) => {
    if (num == 12) {
        return 1221;
    } else if (num == 18) {
        return 1881;
    } else {
        return num;
    }
});

// replace words in strings array with the length of the word
let stringLength = strings.map((string) => string.length);

// find the sum of the length using above question
stringLength.reduce((acc, cv) => {
    acc = acc + cv;
    return acc;
}, 0);


// Customer array
var customer = [
    { firstname: "Joe", lastname: "Blogs" },
    { firstname: "John", lastname: "Smith" },
    { firstname: "Dave", lastname: "Jones" },
    { firstname: "Jack", lastname: "White" },
];

// find all customers whose firstname starts with "J"
let filterdCustomer = customer.filter((customer) => customer.firstname.startsWith("J"));

// create new array with only first name
let firstName = customer.map((customer) => customer.firstname);

// Create new array with all the full names (ex:"Joe Blogs")
let fullname = customer.map((customer) => `${customer.firstname} ${customer.lastname}`);

// sort the array created above alphabetically
[...fullname].sort();

// create a new array that contains only user who has at least one vowel in the firstname.
// let wrong = customer.filter((customer) => customer.firstname.toLowerCase.includes("a","e","i","o","u")) 
let vowelsInName = customer.filter((customer) => {
    if (
        customer.firstname.toLowerCase().includes("a") ||
        customer.firstname.toLowerCase().includes("e") ||
        customer.firstname.toLowerCase().includes("i") ||
        customer.firstname.toLowerCase().includes("o") ||
        customer.firstname.toLowerCase().includes("u")
    ) {
        return true;
    } else {
        return false;
    }
});
