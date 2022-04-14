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

var annulerenBtn = document.querySelector("#annuleren-btn");
var bestelFtr = document.querySelector("#bestellen-footer-btn");

// Winkelmand
var winkelmandBtn = document.querySelector(".winkelmand-btn");
var winkelmandCross = document.querySelector("#cross-winkelmand")
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

// Pop-up Na Xiaoco Ijs
var xiaocoResult = document.querySelector(".xiaoco-ijs-result");
var popUpMin = document.querySelector(".card-bij-af button:first-of-type");
var popUpPlus = document.querySelector(".card-bij-af button:last-of-type");
var huidigXiaoIjs = 1;

var aantalXiaoIjsTxt = document.querySelector(".card-aantal p");
var trashChange = document.querySelector(".trash-change");
var productDelete = document.querySelector(".product-delete");

var prodAnnuleren = document.querySelector("#annuleren");
var prodVerwijderen = document.querySelector("#verwijderen");

var crossXiaoco = document.querySelector("#cross-xiaocoijs");
var btnGereed = document.querySelector("#gereed");

// Wat erbij pop-up
var popUpWatErbij = document.querySelector(".wat-erbij");
var gereedErbij = document.querySelector("#gereed-erbij");
var crossErbij = document.querySelector("#cross-erbij");

var check1 = document.querySelector(".check-1");
var check2 = document.querySelector(".check-2");
var check3 = document.querySelector(".check-3");
var check4 = document.querySelector(".check-4");

var toevoeg1 = document.querySelector(".toevoeg-1");
var toevoeg2 = document.querySelector(".toevoeg-2");
var toevoeg3 = document.querySelector(".toevoeg-3");
var toevoeg4 = document.querySelector(".toevoeg-4");

// Nav
var navFeed = document.querySelector(".nav-feed");
var merchClmn = document.querySelector(".merch");
var merchBtn = document.querySelector(".content nav ul li:last-of-type");
var xiaocoIjsBtnNav = document.querySelector(".content nav ul li:nth-of-type(3)");

var h1 = document.querySelector("h1");
var xiaocoIjs350 = document.querySelector(".xiaoco-ijs-350");

// Merch toevoegen
var merch1 = document.querySelector("#merch-1");
var merch2 = document.querySelector("#merch-2");
var merch3 = document.querySelector("#merch-3");
var merch4 = document.querySelector("#merch-4");

var merchToevoegTas = document.querySelector(".pop-merch-tas");
var crossTas = document.querySelector("#cross-tas");
var gereedTas = document.querySelector("#gereed-tas");

var merchToevoegLepel = document.querySelector(".pop-merch-lepel");
var crossLepel = document.querySelector("#cross-lepel");
var gereedLepel = document.querySelector("#gereed-lepel");

var merchToevoegHoorntje = document.querySelector(".pop-merch-hoorntje");
var crossHoorntje = document.querySelector("#cross-hoorntje");
var gereedHoorntje = document.querySelector("#gereed-hoorntje");

var merchToevoegBakje = document.querySelector(".pop-merch-bakje");
var crossBakje = document.querySelector("#cross-bakje");
var gereedBakje = document.querySelector("#gereed-bakje");

// Winkelmand result
var winkelmandPopUp = document.querySelector(".winkelmand-result");
var winkelmandBedrag = document.querySelector("#totaal-bedrag");
var huidigTotaal = 0;
var orderOreo = document.querySelector("#order-oreo");
var orderXiaocoIjs = document.querySelector("#order-xiaocoijs");

var erbijBoba = document.querySelector("#erbij-boba");
var erbijSoju = document.querySelector("#erbij-soju");
var erbijWater = document.querySelector("#erbij-water");

var merchTas = document.querySelector("#merch-tas");
var merchLepel = document.querySelector("#merch-lepel");
var merchHoorntje = document.querySelector("#merch-hoorntje");
var merchBakje = document.querySelector("#merch-bakje");

var bestelPopUp = document.querySelector("#bestelinPopUp");

// Mini aantal
var miniOreo = document.querySelector("#miniOreo p");
var miniXiao = document.querySelector("#miniXiao p");
var huidigMini = 0;

// Bestelling annuleren
var annulerenInPopUp = document.querySelector(".bestelling-annuleren");
var annulerenNee = document.querySelector("#annuleren-nee");
var annulerenJa = document.querySelector("#annuleren-ja");

// Afrekenen
var helpKids = document.querySelector(".sec-help-kids");
var crossKids = document.querySelector("#cross-kids");
var kidsNee = document.querySelector("#kids-nee");
var kidsJa = document.querySelector("#kids-ja");

var afrekenenPin = document.querySelector(".sec-afrekenen");

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

    orderOreo.classList.remove("none");
    huidigTotaal = huidigTotaal + 2.50;
    winkelmandBedrag.textContent = financial(huidigTotaal);

    huidigMini = huidigMini + 1;
    miniOreo.textContent = huidigMini;
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

    stap3Xiao.classList.add("none");
    sec2Clmn.classList.remove("none");
    img3.classList.add("none");

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
    pandaImg.classList.remove("panda-img-add-1"); 
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
        pandaImg.classList.add("panda-img-add-2"); 
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
    pandaImg.classList.remove("panda-img-add-2"); 
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
    img3.src = "img/k-3-o-1.png";
}
originalDisco.addEventListener("click", stap3O1);

function stap3O2() {
    img3.classList.remove("none");
    img3.src = "img/k-3-o-2.png";
}
originalNootjes.addEventListener("click", stap3O2);

function stap3O3() {
    img3.classList.remove("none");
    img3.src = "img/k-3-o-3.png";
}
originalMm.addEventListener("click", stap3O3);

function stap3O4() {
    img3.classList.remove("none");
    img3.src = "img/k-3-o-4.png";
}
originalXiaocoSaus.addEventListener("click", stap3O4);

// Xiao Special flavors
function stap3X1() {
    img3.classList.remove("none");
    img3.src = "img/k-3-x-1.png";
}
XiaoSpecKroepoek.addEventListener("click", stap3X1);

function stap3X2() {
    img3.classList.remove("none");
    img3.src = "img/k-3-x-2.png";
}
XiaoSpecSrir.addEventListener("click", stap3X2);

function stap3X3() {
    img3.classList.remove("none");
    img3.src = "img/k-3-x-3.png";
}
XiaoSpecKimchi.addEventListener("click", stap3X3);

function stap3X4() {
    img3.classList.remove("none");
    img3.src = "img/k-3-x-4.png";
}
XiaoSpecOreoPocky.addEventListener("click", stap3X4);

// Pop up na Xiaoco ijs
productDelete.classList.add("none");
xiaocoResult.classList.add("none");

function xiaocoIjsGereed() {
    xiaocoResult.classList.remove("none");

    aantalPro.classList.remove("none");
    huidigBedrag = huidigBedrag + 3.50;
    huidigAantal = huidigAantal + 1;
    bedragTxt.textContent = financial(huidigBedrag);
    huidigAantalTxt.textContent = huidigAantal;
    pandaImg.classList.add("panda-img-add-3");
}
btnStapGereed.addEventListener("click", xiaocoIjsGereed);

function XiaoPlus() {
    huidigXiaoIjs = huidigXiaoIjs + 1;
    aantalXiaoIjsTxt.textContent = huidigXiaoIjs;

    if (huidigXiaoIjs == 2) {
        trashChange.src = "img/icon-min.svg";
    }

    huidigBedrag = huidigBedrag + 3.50;
    bedragTxt.textContent = financial(huidigBedrag);
    huidigAantal = huidigAantal + 1;
    huidigAantalTxt.textContent = huidigAantal;

    huidigTotaal = huidigTotaal + 3.50;
    winkelmandBedrag.textContent = financial(huidigTotaal);

    huidigMini = huidigMini + 1;
    miniXiao.textContent = huidigMini;
}
popUpPlus.addEventListener("click", XiaoPlus);

function XiaoMin() {
    huidigXiaoIjs = huidigXiaoIjs - 1;
    aantalXiaoIjsTxt.textContent = huidigXiaoIjs;

    if (huidigXiaoIjs == 1) {
        trashChange.src = "img/icon-trash.svg";
    }

    if (huidigXiaoIjs <= 0) {
        productDelete.classList.remove("none");
    }

    huidigBedrag = huidigBedrag - 3.50;
    bedragTxt.textContent = financial(huidigBedrag);
    huidigAantal = huidigAantal - 1;
    huidigAantalTxt.textContent = huidigAantal;
}
popUpMin.addEventListener("click", XiaoMin);

function prodAnnul() {
    productDelete.classList.add("none");
}
prodAnnuleren.addEventListener("click", prodAnnul);

function prodVerw() {
    productDelete.classList.add("none");
    xiaocoResult.classList.add("none");
    secS2.classList.add("none");
    secS1.classList.remove("none");
    stap1Txt.textContent = "Stap 1: Hoorntje of bakje?";
    btnStapGereed.classList.add("none");
    xiaoArrow3.classList.add("none");

    footer.classList.add("footer-JS");
    bar.classList.add("marginR30");

    btnStap2.classList.remove("none");
    pandaImg.classList.remove("panda-img-add-3");
    pandaImg.classList.remove("panda-img-add-2");
    pandaImg.classList.remove("panda-img-add-1");
}
prodVerwijderen.addEventListener("click", prodVerw);

function popUpWeg() {
    xiaocoResult.classList.add("none");

    huidigBedrag = huidigBedrag - 3.50;
    bedragTxt.textContent = financial(huidigBedrag);
    huidigAantal = huidigAantal - 1;
    huidigAantalTxt.textContent = huidigAantal;

    pandaImg.classList.remove("panda-img-add-3");
    pandaImg.classList.remove("panda-img-add-2");
    pandaImg.classList.remove("panda-img-add-1");
}
crossXiaoco.addEventListener("click", popUpWeg);

function popUpGereed() {
    xiaocoResult.classList.add("none");
    secS2.classList.add("none");
    secS1.classList.remove("none");

    footer.classList.add("footer-JS");
    bar.classList.add("marginR30");
    btnStapGereed.classList.add("none");
    xiaoArrow3.classList.add("none");
    btnStap2.classList.remove("none");

    pandaImg.classList.remove("panda-img-add-3");
    pandaImg.classList.remove("panda-img-add-2");
    pandaImg.classList.remove("panda-img-add-1");

    orderXiaocoIjs.classList.remove("none");
    huidigTotaal = huidigTotaal + 3.50;
    winkelmandBedrag.textContent = financial(huidigTotaal);

    // Bron: https://www.w3schools.com/jsref/met_win_settimeout.asp
    setTimeout(function() {
        popUpWatErbij.classList.remove("none");
    }, 1000);
    
}
btnGereed.addEventListener("click", popUpGereed);

// Wat erbij pop-up
popUpWatErbij.classList.add("none");

check1.classList.add("none");
check2.classList.add("none");
check3.classList.add("none");
check4.classList.add("none");

// Bron: https://stackoverflow.com/questions/34559238/make-an-onclick-event-react-different-when-click-second-time
var firstClick1 = true;
var firstClick2 = true;
var firstClick3 = true;
var firstClick4 = true;

function toevoegPr1() {
    aantalPro.classList.remove("none");
    huidigXiaoIjs = huidigXiaoIjs + 1;
    aantalXiaoIjsTxt.textContent = huidigXiaoIjs;

    if (firstClick1) {
        check1.classList.remove("none");
        toevoeg1.classList.add("text-color-pink");
        huidigBedrag = huidigBedrag + 3;
        bedragTxt.textContent = financial(huidigBedrag);
        huidigAantal = huidigAantal + 1;
        huidigAantalTxt.textContent = huidigAantal;

        erbijBoba.classList.remove("none");
        huidigTotaal = huidigTotaal + 3;
        winkelmandBedrag.textContent = financial(huidigTotaal);

        firstClick1 = false;
    } else {
        check1.classList.add("none");
        toevoeg1.classList.remove("text-color-pink");

        huidigBedrag = huidigBedrag - 3;
        bedragTxt.textContent = financial(huidigBedrag);
        huidigAantal = huidigAantal - 1;
        huidigAantalTxt.textContent = huidigAantal;

        erbijBoba.classList.add("none");
        huidigTotaal = huidigTotaal - 3;
        winkelmandBedrag.textContent = financial(huidigTotaal);
    }
}
toevoeg1.addEventListener("click", toevoegPr1);

function toevoegPr2() {
    aantalPro.classList.remove("none");
    huidigXiaoIjs = huidigXiaoIjs + 1;
    aantalXiaoIjsTxt.textContent = huidigXiaoIjs;

    if (firstClick2) {
        check2.classList.remove("none");
        toevoeg2.classList.add("text-color-pink");
        huidigBedrag = huidigBedrag + 2.50;
        bedragTxt.textContent = financial(huidigBedrag);
        huidigAantal = huidigAantal + 1;
        huidigAantalTxt.textContent = huidigAantal;

        merchTas.classList.remove("none");
        huidigTotaal = huidigTotaal + 2.50;
        winkelmandBedrag.textContent = financial(huidigTotaal);

        firstClick2 = false;
    } else {
        check2.classList.add("none");
        toevoeg2.classList.remove("text-color-pink");
        huidigBedrag = huidigBedrag - 2.50;
        bedragTxt.textContent = financial(huidigBedrag);
        huidigAantal = huidigAantal - 1;
        huidigAantalTxt.textContent = huidigAantal;

        merchTas.classList.add("none");
        huidigTotaal = huidigTotaal - 2.50;
        winkelmandBedrag.textContent = financial(huidigTotaal);
    }
}
toevoeg2.addEventListener("click", toevoegPr2);

function toevoegPr3() {
    aantalPro.classList.remove("none");
    huidigXiaoIjs = huidigXiaoIjs + 1;
    aantalXiaoIjsTxt.textContent = huidigXiaoIjs;

    if (firstClick3) {
        check3.classList.remove("none");
        toevoeg3.classList.add("text-color-pink");
        huidigBedrag = huidigBedrag + 4;
        bedragTxt.textContent = financial(huidigBedrag);
        huidigAantal = huidigAantal + 1;
        huidigAantalTxt.textContent = huidigAantal;
        firstClick3 = false;

        erbijSoju.classList.remove("none");
        huidigTotaal = huidigTotaal + 4;
        winkelmandBedrag.textContent = financial(huidigTotaal);

    } else {
        check3.classList.add("none");
        toevoeg3.classList.remove("text-color-pink");
        huidigBedrag = huidigBedrag - 4;
        bedragTxt.textContent = financial(huidigBedrag);
        huidigAantal = huidigAantal - 1;
        huidigAantalTxt.textContent = huidigAantal;

        erbijSoju.classList.add("none");
        huidigTotaal = huidigTotaal - 4;
        winkelmandBedrag.textContent = financial(huidigTotaal);
    }
}
toevoeg3.addEventListener("click", toevoegPr3);

function toevoegPr4() {
    aantalPro.classList.remove("none");
    huidigXiaoIjs = huidigXiaoIjs + 1;
    aantalXiaoIjsTxt.textContent = huidigXiaoIjs;

    if (firstClick4) {
        check4.classList.remove("none");
        toevoeg4.classList.add("text-color-pink");
        huidigBedrag = huidigBedrag + 1;
        bedragTxt.textContent = financial(huidigBedrag);
        huidigAantal = huidigAantal + 1;
        huidigAantalTxt.textContent = huidigAantal;

        erbijWater.classList.remove("none");
        huidigTotaal = huidigTotaal + 1;
        winkelmandBedrag.textContent = financial(huidigTotaal);

        firstClick4 = false;
        
    } else {
        check4.classList.add("none");
        toevoeg4.classList.remove("text-color-pink");
        huidigBedrag = huidigBedrag - 1;
        bedragTxt.textContent = financial(huidigBedrag);
        huidigAantal = huidigAantal - 1;
        huidigAantalTxt.textContent = huidigAantal;

        erbijWater.classList.add("none");
        huidigTotaal = huidigTotaal - 1;
        winkelmandBedrag.textContent = financial(huidigTotaal);
        // Als je op het product klikt, gaat het bedrag en aantal naar de min. Dit zou niet moeten
    }
}
toevoeg4.addEventListener("click", toevoegPr4);
// Op dit moment kan je alleen nog aanvinken en weg halen. Eigenlijk zou het moeten zijn dat je de hele tijd kan aanvinken en weg halen.

function erbijPopUpWeg() {
    popUpWatErbij.classList.add("none");
}
gereedErbij.addEventListener("click", erbijPopUpWeg);

function erbijCross() {
    popUpWatErbij.classList.add("none");
}
crossErbij.addEventListener("click", erbijCross);

// Merch
merchClmn.classList.add("none");
annulerenBtn.classList.add("none");
bestelFtr.classList.add("none");

function merchNav() {
    secS1.classList.add("none");
    merchClmn.classList.remove("none");
    navFeed.classList.add("nav-merch-feed");
    
    bar.classList.add("none");
    btnStap2.classList.add("none");
    annulerenBtn.classList.remove("none");
    bestelFtr.classList.remove("none");
    footer.classList.add("just-space-btwn");

    h1.textContent = "Merchandise";
    stap1Txt.classList.add("none");
    xiaocoIjs350.classList.add("none");
}
merchBtn.addEventListener("click", merchNav);

function xiaocoIjsNav() {
    bar.classList.remove("none");
    annulerenBtn.classList.add("none");
    btnStap2.classList.remove("none");
    bestelFtr.classList.add("none");
    footer.classList.remove("just-space-btwn");

    secS1.classList.remove("none");
    merchClmn.classList.add("none");
    navFeed.classList.remove("nav-merch-feed");

    h1.textContent = "Maak je eigen Xiaoco Ijs";
    stap1Txt.classList.remove("none");
    xiaocoIjs350.classList.remove("none");
}
xiaocoIjsBtnNav.addEventListener("click", xiaocoIjsNav);

// Merch toevoegen
merchToevoegTas.classList.add("none");
merchToevoegLepel.classList.add("none");
merchToevoegHoorntje.classList.add("none");
merchToevoegBakje.classList.add("none");

// Tas
function merchToevoeg1() {
    merchToevoegTas.classList.remove("none");

    aantalPro.classList.remove("none");
    huidigXiaoIjs = huidigXiaoIjs + 1;
    aantalXiaoIjsTxt.textContent = huidigXiaoIjs;

    huidigBedrag = huidigBedrag + 2.5;
    bedragTxt.textContent = financial(huidigBedrag);
    huidigAantal = huidigAantal + 1;
    huidigAantalTxt.textContent = huidigAantal;
}
merch1.addEventListener("click", merchToevoeg1);

function tasCross() {
    merchToevoegTas.classList.add("none");

    huidigBedrag = huidigBedrag - 2.5;
    bedragTxt.textContent = financial(huidigBedrag);
    huidigAantal = huidigAantal - 1;
    huidigAantalTxt.textContent = huidigAantal;
}
crossTas.addEventListener("click", tasCross);

function tasGereed() {
    merchToevoegTas.classList.add("none");
    merch1.classList.add("keuze1Changed");

    merchTas.classList.remove("none");
    huidigTotaal = huidigTotaal + 2.50;
    winkelmandBedrag.textContent = financial(huidigTotaal);
}
gereedTas.addEventListener("click", tasGereed);

// Lepel
function merchToevoeg2() {
    merchToevoegLepel.classList.remove("none");

    aantalPro.classList.remove("none");
    huidigXiaoIjs = huidigXiaoIjs + 1;
    aantalXiaoIjsTxt.textContent = huidigXiaoIjs;

    huidigBedrag = huidigBedrag + 1.5;
    bedragTxt.textContent = financial(huidigBedrag);
    huidigAantal = huidigAantal + 1;
    huidigAantalTxt.textContent = huidigAantal;
}
merch2.addEventListener("click", merchToevoeg2);

function lepelCross() {
    merchToevoegLepel.classList.add("none");

    huidigBedrag = huidigBedrag - 1.5;
    bedragTxt.textContent = financial(huidigBedrag);
    huidigAantal = huidigAantal - 1;
    huidigAantalTxt.textContent = huidigAantal;
}
crossLepel.addEventListener("click", lepelCross);

function lepelGereed() {
    merchToevoegLepel.classList.add("none");
    merch2.classList.add("keuze1Changed");

    merchLepel.classList.remove("none");
    huidigTotaal = huidigTotaal + 1.50;
    winkelmandBedrag.textContent = financial(huidigTotaal);
}
gereedLepel.addEventListener("click", lepelGereed);

// Hoorntje
function merchToevoeg3() {
    merchToevoegHoorntje.classList.remove("none");

    aantalPro.classList.remove("none");
    huidigXiaoIjs = huidigXiaoIjs + 1;
    aantalXiaoIjsTxt.textContent = huidigXiaoIjs;

    huidigBedrag = huidigBedrag + 1.5;
    bedragTxt.textContent = financial(huidigBedrag);
    huidigAantal = huidigAantal + 1;
    huidigAantalTxt.textContent = huidigAantal;
}
merch3.addEventListener("click", merchToevoeg3);

function hoorntjeCross() {
    merchToevoegHoorntje.classList.add("none");

    huidigBedrag = huidigBedrag - 1.5;
    bedragTxt.textContent = financial(huidigBedrag);
    huidigAantal = huidigAantal - 1;
    huidigAantalTxt.textContent = huidigAantal;
}
crossHoorntje.addEventListener("click", hoorntjeCross);

function hoorntjeGereed() {
    merchToevoegHoorntje.classList.add("none");
    merch3.classList.add("keuze1Changed");

    merchHoorntje.classList.remove("none");
    huidigTotaal = huidigTotaal + 1.50;
    winkelmandBedrag.textContent = financial(huidigTotaal);
}
gereedHoorntje.addEventListener("click", hoorntjeGereed);

// Bakje
function merchToevoeg4() {
    merchToevoegBakje.classList.remove("none");

    aantalPro.classList.remove("none");
    huidigXiaoIjs = huidigXiaoIjs + 1;
    aantalXiaoIjsTxt.textContent = huidigXiaoIjs;

    huidigBedrag = huidigBedrag + 1.5;
    bedragTxt.textContent = financial(huidigBedrag);
    huidigAantal = huidigAantal + 1;
    huidigAantalTxt.textContent = huidigAantal;
}
merch4.addEventListener("click", merchToevoeg4);

function bakjeCross() {
    merchToevoegBakje.classList.add("none");

    huidigBedrag = huidigBedrag - 1.5;
    bedragTxt.textContent = financial(huidigBedrag);
    huidigAantal = huidigAantal - 1;
    huidigAantalTxt.textContent = huidigAantal;
}
crossBakje.addEventListener("click", bakjeCross);

function bakjeGereed() {
    merchToevoegBakje.classList.add("none");
    merch4.classList.add("keuze1Changed");

    merchBakje.classList.remove("none");
    huidigTotaal = huidigTotaal + 1.50;
    winkelmandBedrag.textContent = financial(huidigTotaal);
}
gereedBakje.addEventListener("click", bakjeGereed);

// Winkelmand result
winkelmandPopUp.classList.add("none");
orderOreo.classList.add("none");
orderXiaocoIjs.classList.add("none");

erbijBoba.classList.add("none");
erbijSoju.classList.add("none");
erbijWater.classList.add("none");

merchTas.classList.add("none");
merchLepel.classList.add("none");
merchHoorntje.classList.add("none");
merchBakje.classList.add("none");

function showWinkelmand() {
    winkelmandPopUp.classList.remove("none");
}
winkelmandBtn.addEventListener("click", showWinkelmand);

function crossWinkelmand() {
    winkelmandPopUp.classList.add("none");
}
winkelmandCross.addEventListener("click", crossWinkelmand);

// Bestelling annuleren
annulerenInPopUp.classList.add("none");

function annulerenPopUp() {
    annulerenInPopUp.classList.remove("none");
}
annulerenBtn.addEventListener("click", annulerenPopUp);

function annulerenNeebtn() {
    annulerenInPopUp.classList.add("none");
}
annulerenNee.addEventListener("click", annulerenNeebtn);

function annulerenJabtn() {
    window.location = "index.html";
    // Bron: https://stackoverflow.com/questions/13071967/adding-an-onclick-function-to-go-to-url-in-javascript
}
annulerenJa.addEventListener("click", annulerenJabtn);

// Afrekenen
helpKids.classList.add("none");
afrekenenPin.classList.add("none");

function helpKidsShow() {
    helpKids.classList.remove("none");
}
bestelFtr.addEventListener("click", helpKidsShow);
bestelPopUp.addEventListener("click", helpKidsShow);

function kidsCross() {
    helpKids.classList.add("none");
}
crossKids.addEventListener("click", kidsCross);

function neeKids() {
    helpKids.classList.add("none");
    afrekenenPin.classList.remove("none");

    setTimeout(function() {
        window.location = 'bedankt.html';
    }, 3000);
}
kidsNee.addEventListener("click", neeKids);

function jaKids() {
    helpKids.classList.add("none");
    afrekenenPin.classList.remove("none");
    huidigBedrag = huidigBedrag + 0.50;
    bedragTxt.textContent = financial(huidigBedrag);

    huidigAantal = huidigAantal + 1;
    huidigAantalTxt.textContent = huidigAantal;
    aantalPro.classList.remove("none");

    setTimeout(function() {
        window.location = 'bedankt.html';
    }, 3000);


}
kidsJa.addEventListener("click", jaKids);