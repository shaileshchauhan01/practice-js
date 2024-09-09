// flat
// concat 
// push
// pop
// shift
// unshift
// indexof
// lastIndexod
// includes
// reverse
// spilce
// slice

// forEach
// map
// filter
// sort
// find
// findIndex
// every
// some
// reduce

let color1 = ["Aqua", "Brown", "Black", "Gold"];
let color2 = ["Green", "Maroon", "Navy", "Pink"];
let numbers = [1, 2, [3, 4[5, 6, [7, 8]]]];

numbers.flat()
// (5) [1, 2, 3, 4, Array(3)]
numbers.flat(4)
numbers.flat(Infinity)
// (8) [1, 2, 3, 4, 5, 6, 7, 8]


color1.concat(color2)
// (8) ['Aqua', 'Brown', 'Black', 'Gold', 'Green', 'Maroon', 'Navy', 'Pink']
color1.concat(color2, numbers)
// (11) ['Aqua', 'Brown', 'Black', 'Gold', 'Green', 'Maroon', 'Navy', 'Pink', 1, 2, Array(3)]


color1.push('white')
// 5
color1
// (5) ['Aqua', 'Brown', 'Black', 'Gold', 'white']


color1.pop()
// 'white'
color1
// (4) ['Aqua', 'Brown', 'Black', 'Gold']


// MUTATION : able to change the original array. (push/pop/shift/unshift/reverse/splice/sort)
let obj = {
    name: "Sam"
};
obj.name
// 'Sam'
let objs = {
    name: "Sam"
};
objs.name = "Arya"
// 'Arya'


color2.shift()
// 'Green'
color2
// (3) ['Maroon', 'Navy', 'Pink']
color2.unshift("Red")
// 4
color2
// (4) ['Red', 'Maroon', 'Navy', 'Pink']


color1.indexOf("Black")
// 2
color1.indexOf("nocolor")
// -1

let num = [1, 2, 3, 4, 1]
// undefined
num
// (5) [1, 2, 3, 4, 1]
num.lastIndexOf(1)
// 4
num.indexOf(1)
// 0


color2.includes("Pink")
// true
color2.includes("Orange")
// false

color2.reverse()
// (4) ['Pink', 'Navy', 'Maroon', 'Red']


color1.splice(1)
// (3) ['Brown', 'Black', 'Gold']
color1.splice(1, 2, "Orange")
// []
color1
// (2) ['Aqua', 'Orange']


color2.slice(0, 1)
// ['Green']

