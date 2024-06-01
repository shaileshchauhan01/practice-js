// 3. Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let date = new Date();

let day = date.getDay();
let month = date.getMonth()+1;
let year = date.getFullYear();

if(day <10){
    day = '0' + day;
}
if(month < 10){
    month = '0' + month;
}
console.log(`${month}-${day}-${year} , ${month}/${day}/${year}`)
