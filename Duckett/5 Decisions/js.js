console.log("hoi");

// S-1
var pass = 50;
var score = 90;

var hasPassed = score >= pass;

var el = document.querySelector(".answer");
el.textContent = "Level passed: " + hasPassed;
// >= betekend: is gelijk aan of hoger dan. Dit zou een oplossing zijn voor de Epic win opdracht van Inleiding programmeren

// S-2
var score1 = 90;
var score2 = 95;
var highScore1 = 75;
var highScore2 = 95;

var comparison = (score1 + score2) > (highScore1 + highScore2);

var el2 = document.querySelector(".new-answer");
el2.textContent = "New high score: " + comparison;
// Kijken of score1 en score2 hoger zijn dan de highscores. Als 1 van de scores lager is dan de highscores zegt hij false

// S-3
var score11 = 8;
var score22 = 8;
var pass1 = 6;
var pass2 = 6;

var passBoth = (score11 >= pass1) && (score22 >= pass2);

var msg = "Both rounds passed: " + passBoth;

var el3 = document.querySelector(".passed-both");
el3.textContent = msg;
// Kijken of score1 hoger is dan pass1 en dan score2 hoger is dan pass2

// S-4 
var score111 = 8;
var score222 = 8;
var pass11 = 6;
var pass22 = 6;

var minPass = ((score111 >= pass11) || (score222 >= pass22));

var msg4 = "Resit required: " + !(minPass);

var el4 = document.querySelector(".passed-one");
el4.textContent = msg4;
// Heeft user 1 van de 2 gehaald? Door de ! verandert hij de true naar false

// S-5
var score5 = 70;
var msg5;

if (score5 >= 50) {
    msg5 = "Congrats";
} 

var el5 = document.querySelector(".answer-5");
el5.textContent = msg5;
// Als score gelijk of hoger is dan 50, dan congrats, anders blank

// S-6 
var score6 = 70;
var msg6 = " ";

function congratulate() {
    msg6 += "Congrats";
}

if (score6 >= 50) {
    congratulate();
     msg6 = "Proceed to next round";
} 

var el6 = document.querySelector(".answer-6");
el6.innerHTML = msg6;
// Een functie gebruiken met de if statement

// S-7
var pass7 = 60;
var score7 = 45;
var msg7;

if (score7 >= pass7) {
     msg7 = "You passed";
} else {
    msg7 = "Fail";
}

var el7 = document.getElementById("answer-7");
el7.textContent = msg7;
// ALs score hoger is dan 60, pass, anders fail