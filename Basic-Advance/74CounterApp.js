let inc = document.querySelector('.inc');
let dec = document.querySelector('.dec');
let reset = document.querySelector('.reset');
let counter = document.querySelector('h1');

inc.addEventListener("click", function () {
    counter.innerText = Number(counter.innerText) + 1;
});

dec.addEventListener("click", function () {
    counter.innerText = Number(counter.innerText) - 1;
});

reset.addEventListener("click", function () {
    counter.innerText = 0;
});


// addEventListener         : Handling Event
// counter.innerText        : Manupulating 

