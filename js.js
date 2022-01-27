// ************************************************ //
// Footer
var btnStap1 = document.querySelector("#stap-1-1");
var footer = document.querySelector("footer");
var bar = document.querySelector(".bar-clmn");
var pandaImg = document.querySelector(".bar-panda");
var originalArrow = document.querySelector(".originalBtn");
var xiaoArrow = document.querySelector(".xiaoBtn");

//Winkelmand
var aantalPro = document.querySelector(".winkelmand-hoeveel");
var huidigAantalTxt = document.querySelector(".winkelmand-hoeveel p");
var huidigAantal = 0;

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

var btnStap2 = document.querySelector("#stap-2-1");

var knoppenClmn = document.querySelector(".knoppen-clmn");
var stap2Originals = document.querySelector(".stap-2-originals");
var stap2Xiao = document.querySelector(".stap-2-xiao");

// Juiste foto 
var img1 = document.querySelector(".gekozen");

// 2 flavor knoppen
var btnOriginals = document.querySelector(".knoppen-clmn button:first-of-type");
var btnXiaoSpec = document.querySelector(".knoppen-clmn button:last-of-type");

// ************************************************ //
// Footer
btnStap1.classList.add("none");
footer.classList.add("footer-JS");
bar.classList.add("marginR30");
originalArrow.classList.add("none");
xiaoArrow.classList.add("none");

// Winkelmand
aantalPro.classList.add("none");

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

    huidigAantal = huidigAantal + 1;
    huidigAantalTxt.textContent = huidigAantal;
    aantalPro.classList.remove("none");
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
        img1.src = "img/k-1-1.png";

        pandaImg.classList.add("panda-img-add-1"); 
        stap1Txt.textContent = "Stap 2: Smaak";
    }

    if (grootH.classList.contains("keuze1Changed")) {
        secS2.classList.remove("none");
        secS1.classList.add("none");

        btnStap1.classList.remove("none");
        bar.classList.remove("marginR30");
        footer.classList.remove("footer-JS");
        img1.src = "img/k-1-2.png";

        pandaImg.classList.add("panda-img-add-1"); 
    }

    if (schelp.classList.contains("keuze1Changed")) {
        secS2.classList.remove("none");
        secS1.classList.add("none");

        btnStap1.classList.remove("none");
        bar.classList.remove("marginR30");
        footer.classList.remove("footer-JS");
        img1.src = "img/k-1-3.png";

        pandaImg.classList.add("panda-img-add-1"); 
    }

    if (stokje.classList.contains("keuze1Changed")) {
        secS2.classList.remove("none");
        secS1.classList.add("none");

        btnStap1.classList.remove("none");
        bar.classList.remove("marginR30");
        footer.classList.remove("footer-JS");
        img1.src = "img/k-1-4.png";

        pandaImg.classList.add("panda-img-add-1"); 
    }

    if (bakje.classList.contains("keuze1Changed")) {
        secS2.classList.remove("none");
        secS1.classList.add("none");

        btnStap1.classList.remove("none");
        bar.classList.remove("marginR30");
        footer.classList.remove("footer-JS");
        img1.src = "img/k-1-5.png";

        pandaImg.classList.add("panda-img-add-1"); 
    }

}
btnStap2.addEventListener("click", naarStap2);

function terugSec1() {
    secS2.classList.add("none");
    secS1.classList.remove("none");

    btnStap1.classList.add("none");
    footer.classList.add("footer-JS");
    bar.classList.add("marginR30");

    pandaImg.classList.remove("panda-img-add-1"); 
    stap1Txt.textContent = "Stap 1: Hoorntje of bakje?";
}
btnStap1.addEventListener("click", terugSec1);

stap2Originals.classList.add("none");
stap2Xiao.classList.add("none");

// 2 flavor knoppen
function gaNaarOriginals() {
    stap2Originals.classList.remove("none");
    knoppenClmn.classList.add("none");
    btnStap1.classList.add("none");
    originalArrow.classList.remove("none");

}
btnOriginals.addEventListener("click", gaNaarOriginals);

function gaNaarXiaoSpec() {
    stap2Xiao.classList.remove("none");
    knoppenClmn.classList.add("none");
    btnStap1.classList.add("none");
    originalArrow.classList.remove("none");

}
btnXiaoSpec.addEventListener("click", gaNaarXiaoSpec);

function originalTerug2Flavor() {
    stap2Originals.classList.add("none");
    knoppenClmn.classList.remove("none");
    originalArrow.classList.add("none");
    btnStap1.classList.remove("none");
}

originalArrow.addEventListener("click", originalTerug2Flavor);

function XiaoSpecTerug2Flavor() {
    stap2Xiao.classList.add("none");
    knoppenClmn.classList.remove("none");
    xiaoArrow.classList.add("none");
    btnStap1.classList.remove("none");
}

originalArrow.addEventListener("click", XiaoSpecTerug2Flavor);
