console.log("hoi"); 
var h1El = document.querySelector("h1");

function stoplicht(kleur) {
    if (kleur === "rood") {
        console.log("stoppen");
    }
    
    else if (kleur === "groen") {
        console.log("door rijden");
    }

    else {
        console.log("gassen");
    } 

    h1El.textContent = kleur;
}

stoplicht("");