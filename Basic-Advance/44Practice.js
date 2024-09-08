let message = "If you are still thinking the answer is no!"

// length?
message.length

// log the character at index 0
console.log(message.charAt(0))

// log the character at index from last
console.log(message.charAt(message.length-1))

// index of word "you", "still", "answer"
console.log(message.indexOf("you"))         //3
console.log(message.indexOf("still"))       //11
console.log(message.indexOf("answer"))      //30

// log true/false, words exist
console.log(message.includes("answer"))             //true
console.log(message.includes("they"))               //false
console.log(message.includes("is"))                 //true
console.log(message.includes("Is"))                 //false
                // OR
console.log(message.indexOf("Is") !== -1)           //false
console.log(message.indexOf("ss") !== -1)           //true

// word from index 0 - 6 is "you"
console.log(message.slice(3,6) == "you")            //true
// word from index 7 - 8 is "a" 
console.log(message.slice(7,8) == "a")              //false

// last 3/5 charcater is "no!"
console.log(message.slice(-3) == "no!")             //true
console.log(message.slice(-5) == "no!")             //false

message.toLowerCase()                         //'if you are still thinking the answer is no!'
message.toUpperCase()                         //'IF YOU ARE STILL THINKING THE ANSWER IS NO!'

//replace 'are' with "can't"
message.replace("are", "can't")
//replace 'still' with "" (empty)
message.replace("still", "")

// log all charcater from the message variable ( using for of loop)
for( let char of message){
    console.log(char);
}

// split the words with " " and store in var 'messageArray'
let messageArray = message.split(" ")

// log all the words of messageArray
for(let word of messageArray){
    console.group(word)
}