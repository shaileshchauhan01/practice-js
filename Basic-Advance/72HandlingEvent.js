let btn = document.querySelector('button');

btn.onclick = function () {
    console.log("Clicked Button");
};

btn.ondblclick = function () {
    console.log("Double Clicked");
};

btn.onmousemove = function () {
    console.log("Mouse moved on button");
};

btn.onclick = function () {
    alert("Clicked Button");
};

console.log(btn);