let words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot", "rhythm"];

// write a function findLongestWord that takes an array of words and returns the longest word. 
//(use above array "words" to test it) If there are 2 with the same length..........
function findLongestWord(word) {
    return [...word].sort((a, b) => a.length - b.length).pop();
}
findLongestWord(words);

// convert above array "words" into an array of length of word instead of word.
words.map((word) => word.length);

// create a new array that only contains word with atleast one vowel.
function checkVowels(words) {
    return (words.toLowerCase().includes("a") ||
        words.toLowerCase().includes("e") ||
        words.toLowerCase().includes("i") ||
        words.toLowerCase().includes("o") ||
        words.toLowerCase().includes("u")
    );
}
let vowelFilter = words.filter((word) => checkVowels(word));

// find the index of the word "rhythm".
words.indexOf("rhythm");        //or
words.findIndex(w => w == "rhythm");

// create a new array that contains words not starting with vowel.
let notWithVowel = words.push(words.filter((w) => !checkVowels[0]));

// create a new array that contains words not ending with vowel.
let endingArray = words.filter((w) => !checkVowels(w[w.length - 1]));


let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its number
function sumArray(array) {
    return array.reduce((acc, cv) => {
        acc = acc + cv;
        return acc;
    }, 0);
}

// make a new array that contains number multiplied by 3 like [6, 18, 27, ...]
let multByThree = numbers.filter((num) => num % 3 === 0);

// create a new array that contains only even numbers
let evenNum = numbers.filter((num) => num % 2 === 0);

// create a new array that contains only odd numbers
let oddNum = numbers.filter((num) => num % 2 !== 0);

// create a new array that should have true for even and false for odd
let oddOrEven = numbers.map((map) => num % 2 === 0);

// Sort the above number in assending order
[...numbers].sort((a, b) => (a - b));

// does sort mutate the original array?
Yes

// find the sum of the numbers in the array.        // accumulator // current value
let sum = numbers.reduce((acc, cv) => {
    acc = acc + cv;
    return acc;
}, 0);

//write a function averageNumbers that receives an array of numbers and calculate the avg of numbers
function averageNumbers(array) {
    return (
        array.reduce((acc, cv) => {
            acc = acc + cv;
            return acc;
        }, 0) / array.length
    );
}
// or
//  let averageNumber = numbers.reduce((acc, cv) => {
//     acc = acc + cv;
//     return acc;
// },0) / numbers.length

let strings = ["seat", "correspond", "linen", "motif", "hole", "smell", "smart", "chaos", "fuel", "palace"];

// write a function averageWordLength that recieves an array of words2 and calculate the average length of the words.
function averageWordLength(words) {
    return (
        words.map((w) => w.length).reduce((acc, cv) => {
            return acc + cv;
        }, 0) / words.length
    );
}