// ************************************************ //
// Footer knop links weg
var btnStap1 = document.querySelector("#btnStap1");
var footer1Btn = document.querySelector("#footer1Btn");
var bar = document.querySelector(".bar-clmn");


// Klein hoorntje selected
// var stap1KeuzeBtns = document.querySelector("figure");

// Stap 1 keuze maken
// var kleinH = document.querySelector("#s-1-k-1");
// var grootH = document.querySelector("#s-1-k-2");
// var schelp = document.querySelector("#s-1-k-3");
// var stokje = document.querySelector("#s-1-k-4");
// var bakje = document.querySelector("#s-1-k-5");



// ************************************************ //
// Footer knop links weg
btnStap1.classList.add("none");
footer1Btn.classList.add("footer1Btn");
bar.classList.add("marginR30");


// Klein hoorntje selected
// function stap1Select() {
//     kleinH.classList.add("btnChanged");
// }

// kleinH.addEventListener("click", stap1Select);


var figures = btnContainer.getElementsByTagName("figure");

for (var i = 0; i < figures.length; i++) {
  figures[i].addEventListener("click", function() {
    (document.querySelector('.btnChanged')) ? document.querySelector('.btnChanged').classList.remove('.btnChanged') : '';
    this.classList.add('btnChanged');
  });
} 