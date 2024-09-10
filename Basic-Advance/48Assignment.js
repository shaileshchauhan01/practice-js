let fruits = ["Banana", "Orange", "Apple", "Mango"];

// add papaya in the end
fruits.push("Papaya");

//remove last element
fruits.pop();

// current length of fruits array
fruits.length;

// remove the first element 
fruits.shift(); //or
delete fruits[0];

//log index 0 and 1
console.log(fruits[0], fruits[1]);

// add element "Guava" in starting 
fruits.unshift("Guava"); //or
fruits.splice(0,0,"Guava");

// log true and false if the index 0 and 1 is "Guava" and "Banana"
if(fruits[0]==="Guava", fruits[1]==="Banana"){
    console.log(true);
}else{
    console.log(false);
}

// update index 1 with "Pears"
fruits[1] = "Pears";

// add "Kiwi" and "Lemon" to the index 1 and index 2.
fruits.splice(1,0,"Kiwi","Lemon");
//or
fruits.splice(1,0,"Kiwi");
fruits.splice(2,0,"Lemon");

// remove all elements from index 5
fruits.splice(5);

// create another array named "moreFruits" with values ["Berries", "Melon"]
let moreFruits = ["Berries", "Melon"];

// concat moreFruits into fruits 
let allFruits = fruits.concat(moreFruits);

// log the name of all fruits in console 
fruits.forEach((fruit) => console.log(fruit));

// convert each fruit name in lowercase
fruits.forEach((fruit) =>
    console.log(fruit.toLowerCase())
);

// convert to upper case
fruits.forEach((fruit) => console.log(fruit.toUpperCase()));

//  convert all element in lower case and store it in new array : lowerCaseFruits
let lowerCaseFruits = fruits.map((fruit) => 
    fruit.toLowerCase());

//  convert all element in upper case and store it in new array : UpperCaseFruits
let UpperCaseFruits = fruits.map((fruit) => 
    fruit.toUpperCase());


let numbers = [1,2,[3,4]];
let numbersTwo = [1,2,[3,4,[5,6]]];
let numbersThree = [1,2,[3,4,[5,6,[7,8,[9,10]]]]];

// convert the array into one level element, remove sub-array
numbers.flat();

// convert numberTwo to one level, remove sub-array (for multiple level flat accepts argumnet by default its 1 , array.falt(2))
numbersTwo.flat(2);

// convert numbersThree also ....
numbersThree.flat(4);
numbersThree.flat(Infinity);

//remove all subarrays ti individual elemenst, log them and update the value of numbersThree.
numbersThree = numbersThree.flat(Infinity);

// use forEach to log all the element of numberThree array.
numbersThree.forEach((numbers) => console.log(numbers));

// create a new variable named doubleNumbers that store the numberThree array, each element should be multilied by 2.
// let doubleNumbers = numbersThree.forEach((number) => console.log(number*2));            // well done but here we have to use "map"
let doubleNumbers = numbersThree.map((number) => number*2);

// create new variable named halfNumbers that stores the numberThree array, each elem shouls be divided by 2.
let halfNumbers = numbersThree.map((number) => number/2);

// new var named oddNumbers that store all the odd numbers of numberThree
let oddNumbers = numbersThree.filter((number) => number % 2 !== 0);

// find the index of 10 in numberThree array
numbersThree.flat(4).indexOf(10);

// rverse numberThree
numbersThree.flat(4).reverse() //or
numbersThree.reverse()

// join fruits with '-', and convert to upper case.
fruits.join("-").toUpperCase(fruits);

// join fruits with '&', and convert to lower case.
fruits.join(" & ").toLowerCase(fruits); 