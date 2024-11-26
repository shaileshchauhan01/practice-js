// Bubbling: The process of bubbling out is known as bubbling, like below example: if we click in any box it will bubble out to the parent and keep going up.

    allBoxes = document.querySelectorAll('div');

function handleClick(event) {
    console.log(event.target)
}

allBoxes.forEach(element => {
    element.addEventListener("click", handleClick)
});

document.body.addEventListener("click", handleClick);
document.addEventListener("click", handleClick);