// DOM: Document Object Model 

// Platform : every platform / browser needs two things :
// 1. platform specific functionalities 
// 2. javascript engine : it is something that makes us understand the language.

// Browser : consists of                    // root of all these things is
//                                                     Window

//                           - DOM -        - BOM : Browser Object Model -        - Javascript -
//                          document                   screen                         Number
//                                                     location                       String
//                                                     navigator                      Object
//                                                     alert


// DOM : Documnet : the entire web page we open.

//   HTML       =>         DOM          =>       Browser
//           (parsed)   [obj form]   (render)

// BOM : platform specific functionalities 



// ~~~~~ DOM Tree ~~~~~ //

// document is an object

// DOM Manipulation
// - Selecting the element
// - Changing the property

// It is called tree because it has root and branches.

//                               Document
//                       Head                Body 
//                   Title                       h1


// document : html code ; in browser
// console.dir(document) : show result as object
// document.title : we can access ; we can also change
// console.dir(document.body)



// ~~~~~ DOM Manipulation ~~~~~ 

// for manupulation we need :-
// Selecting the element.
// Changing the property.


// body 
//   div 
//     h1 
//     p #text
//     div .info 
//       img
//       ul
//         h3
//         li
//         li
//         li


// let h3 = document.body.children[0].children[1].children[1].children[0]
// => h3: => <h3>List of topics</h3>
// h3.innerText = "Hello this is H3";
// h3 => <h3>Hello this is H3</h3>

// document.querySelector('h1')
// document.querySelector('li')
// document.querySelectorAll('li')
// => NodeList(3)[li, li, li]

// document.getElementById('text')
// document.getElementsByClassName('text')


 
// ~~~~~ Wlaking the DOM ~~~~~ //

// parentElement
// firstElementChild
// nextElementSibling
// lastElementSibling
// previousElementSibling
