// PRACTICE ARRAY AND STRING METHODS

let from = "Syrio Forel";
let quote = "There is only one thing we say to death: Not today";
let to = "Arya Stark";

// index of first "is" in quote. store in variable "indexOfIs"
let indexOfIs = quote.indexOf("is");
// ~~ 6

//  find the character at the index 'indexOfIs'
quote.charAt(indexOfIs);
// ~~ i

// log 1st 6 characters of quote
for (let i = 0; i < 6; i++) {
    console.log(`The character at index ${i} is ${quote[i]}`);
}
// ~~ The character at index 0 is T
// ~~ The character at index 1 is h
// ~~ The character at index 2 is e
// ~~ The character at index 3 is r
// ~~ The character at index 4 is e
// ~~ The character at index 5 is 

// display "Syrio Forel said there is only one thing we say to death: Not today to Arya Stark";
let finals = `${from} said ${quote} to ${to}`;       // we have to use array/string methods here.
let final = from.concat(" said ", quote, " to ", to);
// ~~ 'Syrio Forel said There is only one thing we say to death: Not today to Arya Stark'

// does from, quote, to ends with "rk";
from.endsWith("rk");
quote.endsWith("rk");
to.endsWith("rk");
// ~~ false
// ~~ false
// ~~ true

// does quote include word "only"
quote.includes("only");
// ~~ true

// index of word "we" in quote
quote.indexOf("we");
// ~~ 24

// split words with " "
let quoteSplitted = quote.split(" ");
// ~~ (11) ['There', 'is', 'only', 'one', 'thing', 'we', 'say', 'to', 'death:', 'Not', 'today']

// change the word "today" with "tomorrow" and rejoin the words in quoteSplitted
let index = quoteSplitted.indexOf("today");
quoteSplitted[index] = "tomorrow";
quoteSplitted.join(" ");
// ~~  'There is only one thing we say to death: Not tomorrow'

// last indexOf "a" in quote
let lastIndexOfA = quote.lastIndexOf("a");
// ~~ 48

// second last indexOf "a" in quote
quote.lastIndexOf("a", lastIndexOfA - 1);
// ~~ 36

// make the quote 70 character long, if it has less character add rest as "........"
let max = 70;
let length = quote.length;

for (let i = length; i <= max; i++) {
    quote = quote + ".";
    length = quote.length;
}
//OR
let newQuote = quote + ".".repeat(max - length);2
// ~~ 'There is only one thing we say to death: Not today.....................'

// do same as above but start "......." from starting 
let newStartQuote = ".".repeat(max - length) + quote;
// ~~ '....................There is only one thing we say to death: Not today'

// log the repeat of "Hello World!" 10 times
let repeat = "Hello World!";
repeat.repeat(10);
// ~~ 'Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!Hello World!'

// replace "today" to "tomorrow" in quote
quote.replace("today", "tomorrow");
// ~~ 'There is only one thing we say to death: Not tomorrow'

// make a quote of length 30 and put "...." at the end (use slice)
let limit = quote.slice(0, 30) + "...."
// ~~ 'There is only one thing we say....'

// find out from, quote, to starts with "A";
from.startsWith("A")
quote.startsWith("A")
to.startsWith("A")
// ~~ false
// ~~ false
// ~~ true