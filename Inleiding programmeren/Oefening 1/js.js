console.log("hoi");

var bodyElement = document.querySelector("body");

console.log(bodyElement);

// bodyElement.classList.add("glitch");

// Bonus
var buttonEl = document.querySelector("button");


function click() {
    bodyElement.classList.add("glitch");
}

buttonEl.addEventListener("click", click);