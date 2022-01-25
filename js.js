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



// ************************************************ //
// Footer knop links weg
btnStap1.classList.add("none");
footer1Btn.classList.add("footer1Btn");
bar.classList.add("marginR30");

// Stap 1 keuze maken
// Bron: https: www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show ends here
function s1K1() {
    if (kleinH.style.border === "5px solid pink") {
        kleinH.style.border = "1px solid pink";
    } else {
      kleinH.style.border = "5px solid pink";
    }

    if (kleinH.style.border === "5px solid pink") {
        grootH.style.border = "1px solid pink";
    } 
}
kleinH.addEventListener("click", s1K1);

function s1K2() {
    if (grootH.style.border === "5px solid pink") {
        grootH.style.border = "1px solid pink";
    } else {
      grootH.style.border = "5px solid pink";
    }

    if (grootH.style.border === "5px solid pink") {
        kleinH.style.border = "1px solid pink";
    }
}
grootH.addEventListener("click", s1K2);

