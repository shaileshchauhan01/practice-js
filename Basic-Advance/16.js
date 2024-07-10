// Given a positive integer "n", Print word "hello" in format of heeello ( e must be repeated "n" times ). Take input "n" from the user and show result in alert. 

// common thing is : "h llo" , only "e" is changing.

let n = +prompt("Enter number of times you want to repeat 'e' in 'hello'")
let start = "h";
let middle = "";
let end = "llo";

for(let i = 0; i < n; i++){
    middle += "e";
}
alert(start + middle + end);