let inputText = document.querySelector("#text");
let select = document.querySelector('#gender');
let terms = document.querySelector('#terms');

let userInfo = {};

function handleInput(event){
userInfo.email = event.target.value;
}

function handleSelect(event){
    userInfo.gender = event.target.value;
}

function handleTerms(event){
    userInfo.terms = event.target.value;
}

inputText.addEventListener("input", handleInput);
select.addEventListener("input", handleSelect);
terms.addEventListener("input", handleTerms);0
// inputText.addEventListener("keyup", handleInput);
// select.addEventListener("change", handleSelect);
// terms.addEventListener("click", handleTerms);


// userInfo
// {email: 'test@gmail.com', terms: 'on'}