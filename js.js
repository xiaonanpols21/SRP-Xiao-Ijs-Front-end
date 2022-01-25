// ************************************************ //
// Footer knop links weg
var btnStap1 = document.querySelector("#btnStap1");
var footer1Btn = document.querySelector("#footer1Btn");
var bar = document.querySelector(".bar-clmn");

// Stap 1 keuze maken
var kleinH = document.querySelector("#s-1-k-1");
var grootH = document.querySelector("#s-1-k-2");
var schelp = document.querySelector("#s-1-k-3");
var stokje = document.querySelector("#s-1-k-4");
var bakje = document.querySelector("#s-1-k-5");

// Stap ... text.content
var stap1 = document.querySelector("#stap-1");

// ************************************************ //
// Footer knop links weg
btnStap1.classList.add("none");
footer1Btn.classList.add("footer1Btn");
bar.classList.add("marginR30");

// Stap 1 keuze maken
// Bron: https: www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show ends here
function s1K1() {
    if (kleinH.style.border === "5px solid var(--pink-color)") {
        kleinH.style.border = "1px solid var(--pink-color)";
    } else {
      kleinH.style.border = "5px solid var(--pink-color)";
    }

    if (kleinH.style.border === "5px solid var(--pink-color)") {
        grootH.style.border = "1px solid var(--pink-color)";
        schelp.style.border = "1px solid var(--pink-color)";
        stokje.style.border = "1px solid var(--pink-color)";
        bakje.style.border = "1px solid var(--pink-color)";
    } 
}
kleinH.addEventListener("click", s1K1);

function s1K2() {
    if (grootH.style.border === "5px solid var(--pink-color)") {
        grootH.style.border = "1px solid var(--pink-color)";
    } else {
      grootH.style.border = "5px solid var(--pink-color)";
    }

    if (grootH.style.border === "5px solid var(--pink-color)") {
        kleinH.style.border = "1px solid var(--pink-color)";
        schelp.style.border = "1px solid var(--pink-color)";
        stokje.style.border = "1px solid var(--pink-color)";
        bakje.style.border = "1px solid var(--pink-color)";
    }
}
grootH.addEventListener("click", s1K2);

function s1K3() {
    if (schelp.style.border === "5px solid var(--pink-color)") {
        schelp.style.border = "1px solid var(--pink-color)";
    } else {
      schelp.style.border = "5px solid var(--pink-color)";
    }

    if (schelp.style.border === "5px solid var(--pink-color)") {
        kleinH.style.border = "1px solid var(--pink-color)";
        grootH.style.border = "1px solid var(--pink-color)";
        stokje.style.border = "1px solid var(--pink-color)";
        bakje.style.border = "1px solid var(--pink-color)";
    }
}
schelp.addEventListener("click", s1K3);

function s1K4() {
    if (stokje.style.border === "5px solid var(--pink-color)") {
        stokje.style.border = "1px solid var(--pink-color)";
    } else {
      stokje.style.border = "5px solid var(--pink-color)";
    }

    if (stokje.style.border === "5px solid var(--pink-color)") {
        grootH.style.border = "1px solid var(--pink-color)";
        kleinH.style.border = "1px solid var(--pink-color)";
        schelp.style.border = "1px solid var(--pink-color)";
        bakje.style.border = "1px solid var(--pink-color)";
    } 
}
stokje.addEventListener("click", s1K4);

function s1K5() {
    if (bakje.style.border === "5px solid var(--pink-color)") {
        bakje.style.border = "1px solid var(--pink-color)";
    } else {
      bakje.style.border = "5px solid var(--pink-color)";
    }

    if (bakje.style.border === "5px solid var(--pink-color)") {
        kleinH.style.border = "1px solid var(--pink-color)";
        grootH.style.border = "1px solid var(--pink-color)";
        schelp.style.border = "1px solid var(--pink-color)";
        stokje.style.border = "1px solid var(--pink-color)";
    } 
}
bakje.addEventListener("click", s1K5);

// Stap ... text.content
stap1.textContent = "Stap 1: Hoorntje of bakje?";