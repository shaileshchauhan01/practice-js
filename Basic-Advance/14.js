// Take two values using prompt and store them in var num1 and num2. Check wether they are equal or not.
// alert: true and false , based on the entered value.
// if the input value is anything like : true, null or undefined


// let num1 = Number(prompt("Enter value one"))
// let num2 = Number(prompt("Enter value two"))

// if(num1 == num2){
//     alert(`Equal? - ${num1} , ${num2} : true`)
// } else {
//     alert(`Equal? - ${num1} , ${num2} : false`)
// }



let num1 = +prompt("Enter value one");
let num2 = +prompt("Enter value two");

if(isNaN(num1) || isNaN(num2)){
    alert("Enter valid value");
} else{
    alert(num1 === num2)
}