// ************************************************ //
// Footer
var btnStap1 = document.querySelector("#stap-1-btn");
var btnStap2 = document.querySelector("#stap-2-btn");
var btnStap2Left = document.querySelector("#stap-2-btn-left");
var btnStap3 = document.querySelector("#stap-3-btn");
var btnStapGereed = document.querySelector("#stap-4-btn");
var footer = document.querySelector("footer");
var bar = document.querySelector(".bar-clmn");
var pandaImg = document.querySelector(".bar-panda");

var originalArrow = document.querySelector(".originalBtn");
var xiaoArrow = document.querySelector(".xiaoBtn");
var originalArrow3 = document.querySelector(".originalBtn3");
var xiaoArrow3 = document.querySelector(".xiaoBtn3");

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

var sec2Clmn = document.querySelector(".stap-2-knoppen");
var stap2Originals = document.querySelector(".stap-2-originals");
var stap2Xiao = document.querySelector(".stap-2-xiao");

var sec3Clmn = document.querySelector(".stap-3-knoppen");
var stap3Originals = document.querySelector(".stap-3-originals");
var stap3Xiao = document.querySelector(".stap-3-xiao");

// Juiste foto 
var img1 = document.querySelector(".gekozen");
var img2 = document.querySelector(".smaak");
var img3 = document.querySelector(".topping");

// 2 flavor knoppen
var btnOriginals = document.querySelector(".stap-2-knoppen button:first-of-type");
var btnXiaoSpec = document.querySelector(".stap-2-knoppen button:last-of-type");

// Original flavors
var originalXiaocolade = document.querySelector(".orig-xiaocolade");
var originalAardbei = document.querySelector(".orig-aardbei");
var originalVanille = document.querySelector(".orig-vanille");
var originalOreo = document.querySelector(".orig-oreo");

// Xiao special flavors
var XiaoSpecPizza = document.querySelector(".xiao-pizza");
var XiaoSpecRijst = document.querySelector(".xiao-rijst");
var XiaoSpecNoodles = document.querySelector(".xiao-noodles");
var XiaoSpecTteok = document.querySelector(".xiao-tteok");

// Naar stap 3

// 2 flavor knoppen Stap 3
var btnOriginals3 = document.querySelector(".stap-3-knoppen button:first-of-type");
var btnXiaoSpec3 = document.querySelector(".stap-3-knoppen button:last-of-type");

// Original flavors
var originalDisco = document.querySelector(".orig-disco");
var originalNootjes = document.querySelector(".orig-nootjes");
var originalMm = document.querySelector(".orig-mm");
var originalXiaocoSaus = document.querySelector(".orig-xiaoco-saus");

// Xiao special flavors
var XiaoSpecKroepoek = document.querySelector(".xiao-kroepoek");
var XiaoSpecSrir = document.querySelector(".xiao-srir");
var XiaoSpecKimchi = document.querySelector(".xiao-kimchi");
var XiaoSpecOreoPocky = document.querySelector(".xiao-oreo-pocky");

// ************************************************ //
// Footer
btnStap1.classList.add("none");
btnStap3.classList.add("none");
btnStapGereed.classList.add("none");

btnStap2Left.classList.add("none");

footer.classList.add("footer-JS");
bar.classList.add("marginR30");
originalArrow.classList.add("none");
xiaoArrow.classList.add("none");

originalArrow3.classList.add("none");
xiaoArrow3.classList.add("none");

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
sec3Clmn.classList.add("none");

function naarStap2() {
    if (kleinH.classList.contains("keuze1Changed")) {
        secS2.classList.remove("none");
        secS1.classList.add("none");

        btnStap1.classList.remove("none");
        btnStap2.classList.add("none");
        btnStap3.classList.remove("none");

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
        btnStap2.classList.add("none");
        btnStap3.classList.remove("none");

        bar.classList.remove("marginR30");
        footer.classList.remove("footer-JS");
        img1.src = "img/k-1-2.png";

        pandaImg.classList.add("panda-img-add-1"); 
        stap1Txt.textContent = "Stap 2: Smaak";
    }

    if (schelp.classList.contains("keuze1Changed")) {
        secS2.classList.remove("none");
        secS1.classList.add("none");

        btnStap1.classList.remove("none");
        btnStap2.classList.add("none");
        btnStap3.classList.remove("none");

        bar.classList.remove("marginR30");
        footer.classList.remove("footer-JS");
        img1.src = "img/k-1-3-edit.png";

        pandaImg.classList.add("panda-img-add-1"); 
        stap1Txt.textContent = "Stap 2: Smaak";
    }

    if (stokje.classList.contains("keuze1Changed")) {
        secS2.classList.remove("none");
        secS1.classList.add("none");

        btnStap1.classList.remove("none");
        btnStap2.classList.add("none");
        btnStap3.classList.remove("none");

        bar.classList.remove("marginR30");
        footer.classList.remove("footer-JS");
        img1.src = "img/k-1-4.png";

        pandaImg.classList.add("panda-img-add-1"); 
        stap1Txt.textContent = "Stap 2: Smaak";
    }

    if (bakje.classList.contains("keuze1Changed")) {
        secS2.classList.remove("none");
        secS1.classList.add("none");

        btnStap1.classList.remove("none");
        btnStap2.classList.add("none");
        btnStap3.classList.remove("none");

        bar.classList.remove("marginR30");
        footer.classList.remove("footer-JS");
        img1.src = "img/k-1-5.png";

        pandaImg.classList.add("panda-img-add-1"); 
        stap1Txt.textContent = "Stap 2: Smaak";
    }

}
btnStap2.addEventListener("click", naarStap2);

function terugSec1() {
    secS2.classList.add("none");
    secS1.classList.remove("none");

    btnStap1.classList.add("none");
    btnStap2.classList.remove("none");
    btnStap3.classList.add("none");
    footer.classList.add("footer-JS");
    bar.classList.add("marginR30");

    pandaImg.classList.remove("panda-img-add-1"); 
    stap1Txt.textContent = "Stap 1: Hoorntje of bakje?";
}
btnStap1.addEventListener("click", terugSec1);

stap2Originals.classList.add("none");
stap2Xiao.classList.add("none");

stap3Originals.classList.add("none");
stap3Xiao.classList.add("none");

// Juiste foto
img2.classList.add("none");
img3.classList.add("none");

// 2 flavor knoppen
function gaNaarOriginals() {
    stap2Originals.classList.remove("none");
    sec2Clmn.classList.add("none");
    btnStap1.classList.add("none");
    originalArrow.classList.remove("none");

}
btnOriginals.addEventListener("click", gaNaarOriginals);

function gaNaarXiaoSpec() {
    stap2Xiao.classList.remove("none");
    sec2Clmn.classList.add("none");
    btnStap1.classList.add("none");
    originalArrow.classList.remove("none");

}
btnXiaoSpec.addEventListener("click", gaNaarXiaoSpec);

function originalTerug2Flavor() {
    stap2Originals.classList.add("none");
    sec2Clmn.classList.remove("none");
    originalArrow.classList.add("none");
    btnStap1.classList.remove("none");
}
originalArrow.addEventListener("click", originalTerug2Flavor);

function XiaoSpecTerug2Flavor() {
    stap2Xiao.classList.add("none");
    sec2Clmn.classList.remove("none");
    xiaoArrow.classList.add("none");
    btnStap1.classList.remove("none");
}
originalArrow.addEventListener("click", XiaoSpecTerug2Flavor);

// Original flavors
function stap2O1() {
    img2.classList.remove("none");
    img2.src = "img/k-2-o-1.png";
}
originalXiaocolade.addEventListener("click", stap2O1);

function stap2O2() {
    img2.classList.remove("none");
    img2.src = "img/k-2-o-2.png";
}
originalAardbei.addEventListener("click", stap2O2);

function stap2O3() {
    img2.classList.remove("none");
    img2.src = "img/k-2-o-3.png";
}
originalVanille.addEventListener("click", stap2O3);

function stap2O4() {
    img2.classList.remove("none");
    img2.src = "img/k-2-o-4.png";
}
originalOreo.addEventListener("click", stap2O4);

// Xiao Special flavors
function stap2X1() {
    img2.classList.remove("none");
    img2.src = "img/k-2-x-1.png";
}
XiaoSpecPizza.addEventListener("click", stap2X1);

function stap2X2() {
    img2.classList.remove("none");
    img2.src = "img/k-2-x-2.png";
}
XiaoSpecRijst.addEventListener("click", stap2X2);

function stap2X3() {
    img2.classList.remove("none");
    img2.src = "img/k-2-x-3.png";
}
XiaoSpecNoodles.addEventListener("click", stap2X3);

function stap2X4() {
    img2.classList.remove("none");
    img2.src = "img/k-2-x-4.png";
}
XiaoSpecTteok.addEventListener("click", stap2X4);

// Naar stap 3
function naarStap3() {
    if (img2.classList.contains("none")) {
        
    } else {
        sec3Clmn.classList.remove("none");
        stap2Originals.classList.add("none");
        stap2Xiao.classList.add("none");
        stap1Txt.textContent = "Stap 3: Topping";
        btnStap3.classList.add("none");
        btnStapGereed.classList.remove("none");

        originalArrow.classList.add("none");
        xiaoArrow.classList.add("none");
        btnStap2Left.classList.remove("none");

        sec2Clmn.classList.add("none");
        btnStap1.classList.add("none");
    }
}
btnStap3.addEventListener("click", naarStap3);

function stap2Left() {
    sec3Clmn.classList.add("none");
    sec2Clmn.classList.remove("none");
    stap1Txt.textContent = "Stap 2: Smaak";
    btnStap1.classList.remove("none");
    btnStap2Left.classList.add("none");
    btnStapGereed.classList.add("none");
    btnStap3.classList.remove("none");
}
btnStap2Left.addEventListener("click", stap2Left);

// 2 flavor knoppen Stap 3
function gaNaarOriginals3() {
    stap3Originals.classList.remove("none");
    sec3Clmn.classList.add("none");
    btnStap2Left.classList.add("none");
    originalArrow3.classList.remove("none");

}
btnOriginals3.addEventListener("click", gaNaarOriginals3);

function gaNaarXiaoSpec3() {
    stap3Xiao.classList.remove("none");
    sec3Clmn.classList.add("none");
    btnStap2Left.classList.add("none");
    xiaoArrow3.classList.remove("none");

}
btnXiaoSpec3.addEventListener("click", gaNaarXiaoSpec3);

function originalTerug3Flavor() {
    stap3Originals.classList.add("none");
    sec3Clmn.classList.remove("none");
    originalArrow3.classList.add("none");
    btnStap2Left.classList.remove("none");
}
originalArrow3.addEventListener("click", originalTerug3Flavor);

function XiaoSpecTerug3Flavor() {
    stap3Xiao.classList.add("none");
    sec3Clmn.classList.remove("none");
    xiaoArrow3.classList.add("none");
    btnStap2Left.classList.remove("none");
}
xiaoArrow3.addEventListener("click", XiaoSpecTerug3Flavor);

// Original flavors
function stap3O1() {
    img3.classList.remove("none");
    img3.src = "img/k-3-1.png";
}
originalDisco.addEventListener("click", stap3O1);

function stap2O2() {
    img2.classList.remove("none");
    img2.src = "img/k-2-o-2.png";
}
originalAardbei.addEventListener("click", stap2O2);

function stap2O3() {
    img2.classList.remove("none");
    img2.src = "img/k-2-o-3.png";
}
originalVanille.addEventListener("click", stap2O3);

function stap2O4() {
    img2.classList.remove("none");
    img2.src = "img/k-2-o-4.png";
}
originalOreo.addEventListener("click", stap2O4);
