// ************************************************ //
// Footer knop links weg
var btnStap1 = document.querySelector("footer button:first-of-type");
var footer = document.querySelector("footer");
var bar = document.querySelector(".bar-clmn");

// Stap ... text.content
var stap1Txt = document.querySelector("#stap-1Txt");

// Special button
var bedragTxt = document.querySelector(".bedrag p:last-of-type");
var specialBtn = document.querySelector(".special-btn");
var huidigBedrag = 0;
var OreoImg1 = document.querySelector(".special-btn-clmn img:first-of-type");
var OreoImg2 = document.querySelector(".special-btn-clmn img:last-of-type");

// Stap 1 keuze maken
var kleinH = document.querySelector("#s-1-k-1");
var grootH = document.querySelector("#s-1-k-2");
var schelp = document.querySelector("#s-1-k-3");
var stokje = document.querySelector("#s-1-k-4");
var bakje = document.querySelector("#s-1-k-5");

// Juiste sections
var secS1 = document.querySelector(".stap-1");
var secS2 = document.querySelector(".stap-2");
var btnStap2 = document.querySelector("footer button:last-of-type");

// ************************************************ //
// Footer knop links weg
btnStap1.classList.add("none");
footer.classList.add("footer-JS");
bar.classList.add("marginR30");

// Stap ... text.content
stap1Txt.textContent = "Stap 1: Hoorntje of bakje?";

// Special button
OreoImg2.classList.add("none");

// Bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
function financial(x) {
    return Number.parseFloat(x).toFixed(2);
}

function OreoPlus() {
    huidigBedrag = huidigBedrag + 2.50;
    bedragTxt.textContent = financial(huidigBedrag);
    // Bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
    OreoImg1.classList.add("special-img-add"); 
    OreoImg2.classList.remove("none");
}

specialBtn.addEventListener("click", OreoPlus);

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

// Juiste sections
secS2.classList.add("none");

function naarStap2() {
    if (kleinH.classList.contains("keuze1Changed")) {
        secS2.classList.remove("none");
        secS1.classList.add("none");

        btnStap1.classList.remove("none");
        bar.classList.remove("marginR30");
        footer.classList.remove("footer-JS");
    }

    if (grootH.classList.contains("keuze1Changed")) {
        secS2.classList.remove("none");
        secS1.classList.add("none");

        btnStap1.classList.remove("none");
        bar.classList.remove("marginR30");
        footer.classList.remove("footer-JS");
    }

    if (schelp.classList.contains("keuze1Changed")) {
        secS2.classList.remove("none");
        secS1.classList.add("none");

        btnStap1.classList.remove("none");
        bar.classList.remove("marginR30");
        footer.classList.remove("footer-JS");
    }

    if (stokje.classList.contains("keuze1Changed")) {
        secS2.classList.remove("none");
        secS1.classList.add("none");

        btnStap1.classList.remove("none");
        bar.classList.remove("marginR30");
        footer.classList.remove("footer-JS");
    }

    if (bakje.classList.contains("keuze1Changed")) {
        secS2.classList.remove("none");
        secS1.classList.add("none");

        btnStap1.classList.remove("none");
        bar.classList.remove("marginR30");
        footer.classList.remove("footer-JS");
    }
}
btnStap2.addEventListener("click", naarStap2);

function terugSec1() {
    secS2.classList.add("none");
    secS1.classList.remove("none");

    btnStap1.classList.add("none");
    footer.classList.add("footer-JS");
    bar.classList.add("marginR30");
}

btnStap1.addEventListener("click", terugSec1);