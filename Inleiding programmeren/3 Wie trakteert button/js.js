console.log("hoi");

var namen = ["Xiao Nan", "Chu Xia", "Jin", "Namjoon", "Hobi", "Taehyung"]

var pEl = document.querySelector(".naam");

var button = document.querySelector("button");

var bodyEl = document.querySelector("body");

pEl.textContent = namen[2];

function wieBetalen() {
    console.log("hoi2");
    var randomGetal = Math.random()*6;
    randomGetal = Math.floor(randomGetal);
    pEl.textContent = namen[randomGetal];

    bodyEl.classList.add("confetti");
}

button.addEventListener("click", wieBetalen);