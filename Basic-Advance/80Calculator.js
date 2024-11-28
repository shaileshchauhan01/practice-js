let display = document.querySelector('.display');
let allBtns = document.querySelectorAll('.buttons');
let clear = document.querySelector('.clear');

let initialValue = 0;

function handleClickBtn(event) {
    if (event.target.classList.contains("equal")) {
        display.innerText = eval(display.innerText);
        return;
    }
    if (event.target.classList.contains("clear")) {
        display.innerText = initialValue;
        return;
    }
    if (display.innerText == initialValue) {
        display.innerText = event.target.innerText;
    } else {
        display.innerText += event.target.innerText;
    }
}
allBtns.forEach((btn) => {
    btn.addEventListener("click", handleClickBtn);
});

display.innerText = initialValue;
