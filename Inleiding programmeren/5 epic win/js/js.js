console.log("hoi");

var plus = document.querySelector("#plus");
var min = document.querySelector("#min");
var scoreEl = document.querySelector("#score");
var score = 0;
var bodyEl = document.querySelector("body");


function scorePlus(){
    score = score + 1;
    console.log(score);

    scoreEl.textContent = score;

    if (score == 3) {
        console.log("epic win");
        bodyEl.classList.add("winning");    
        bodyEl.classList.add("green");
    }

    if (score > 3) {
        score = -1;
        bodyEl.classList.remove("winning");
    }

    if (score == 2) {
        bodyEl.classList.add("bg");
    }
}

plus.addEventListener("click", scorePlus);

function scoreMin() {
    score = score - 1;
    scoreEl.textContent = score;
}
min.addEventListener("click", scoreMin);