let firstName = "Arya";
let lastName = "Stark";
// let fullName = firstNam + lastName;              // Reference error

try{                                                // error handling
    let fullName = firstNam + lastName;
} catch(error){
    alert(error);                                   // exept error we can write any msg, like " something went wrong"
} finally{
    alert("finally");                               // optional: runs every time 
}

alert(firstName);
alert(lastName);
alert(fullName);