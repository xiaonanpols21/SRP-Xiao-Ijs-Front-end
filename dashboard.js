// ************************************************ //
// Footer knop links weg
// var btnStap1 = document.querySelector("#btnStap1");
// var footer1Btn = document.querySelector("#footer1Btn");
// var bar = document.querySelector(".bar-clmn");

// Stap ... text.content
var stap1Txt = document.querySelector("#stap-1-txt");

// Stap 1 keuze maken
var kleinH = document.querySelector("#s-1-k-1");
var grootH = document.querySelector("#s-1-k-2");
var schelp = document.querySelector("#s-1-k-3");
var stokje = document.querySelector("#s-1-k-4");
var bakje = document.querySelector("#s-1-k-5");

// Gekozen ijsje? Ga dan naar ... pagina
var btnS2 = document.querySelector("footer button:last-of-type");

// ************************************************ //
// Footer knop links weg
// btnStap1.classList.add("none");
// footer1Btn.classList.add("footer1Btn");
// bar.classList.add("marginR30");

// Stap ... text.content
stap1Txt.textContent = "Stap 1: Hoorntje of bakje?";

// Stap 1 keuze maken
// Bron: https://attacomsian.com/blog/javascript-check-if-element-contains-css-class#:~:text=In%20vanilla%20JavaScript%2C%20you%20can,the%20class%20exists%2C%20otherwise%20false%20.&text=The%20classList.,-contains()%20method
function s1K1() {
    if (kleinH.classList.contains("keuze1Changed")) {

    } else {
        kleinH.classList.add("keuze1Changed");
    }

    if (kleinH.classList.contains("keuze1Changed")) {
        grootH.classList.remove("keuze1Changed");
        schelp.classList.remove("keuze1Changed");
        stokje.classList.remove("keuze1Changed");
        bakje.classList.remove("keuze1Changed");
    }
}
kleinH.addEventListener("click", s1K1);

function s1K2() {
    if (grootH.classList.contains("keuze1Changed")) {

    } else {
        grootH.classList.add("keuze1Changed");
    }

    if (grootH.classList.contains("keuze1Changed")) {
        kleinH.classList.remove("keuze1Changed");
        schelp.classList.remove("keuze1Changed");
        stokje.classList.remove("keuze1Changed");
        bakje.classList.remove("keuze1Changed");
    }
}
grootH.addEventListener("click", s1K2);

function s1K3() {
    if (schelp.classList.contains("keuze1Changed")) {

    } else {
        schelp.classList.add("keuze1Changed");
    }

    if (schelp.classList.contains("keuze1Changed")) {
        kleinH.classList.remove("keuze1Changed");
        grootH.classList.remove("keuze1Changed");
        stokje.classList.remove("keuze1Changed");
        bakje.classList.remove("keuze1Changed");
    }
}
schelp.addEventListener("click", s1K3);

function s1K4() {
    if (stokje.classList.contains("keuze1Changed")) {

    } else {
        stokje.classList.add("keuze1Changed");
    }

    if (stokje.classList.contains("keuze1Changed")) {
        kleinH.classList.remove("keuze1Changed");
        grootH.classList.remove("keuze1Changed");
        schelp.classList.remove("keuze1Changed");
        bakje.classList.remove("keuze1Changed");
    }
}
stokje.addEventListener("click", s1K4);

function s1K5() {
    if (bakje.classList.contains("keuze1Changed")) {

    } else {
        bakje.classList.add("keuze1Changed");
    }

    if (bakje.classList.contains("keuze1Changed")) {
        kleinH.classList.remove("keuze1Changed");
        grootH.classList.remove("keuze1Changed");
        schelp.classList.remove("keuze1Changed");
        stokje.classList.remove("keuze1Changed");
    }
}
bakje.addEventListener("click", s1K5);



function Stap2K1() {
    if (kleinH.classList.contains("keuze1Changed")) {
        window.location = "index.html";    
    }
}

// Gekozen ijsje? Ga dan naar ... pagina
btnS2.addEventListener("click", Stap2K1)