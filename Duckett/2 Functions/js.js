console.log("hoi");

// S-1
var msg = "Sign to receive our newsletter for 10% off";
function updateMessage() {
    var el = document.getElementById("message");
    el.textContent = msg;
}
updateMessage();
// Tekst wordt verandert door een function

// S-2
function calculateArea(width, height) {
    var area = width * height;
    return area;
}
var wallOne = calculateArea(3, 5);
var wallTwo = calculateArea(8, 5);
// Nu kan je meerdere code gebruiken met 1 functie. Nu krijgt je een single value uit een functie. Je krijgt als antwoord 3 x 5, en 8 x 5


// S-3
function getSize(width, height, depth) {
    var area = width * height;
    var volume = width * height * depth;
    var sizes = [area, volume];
    return sizes;
}
var areaOne = getSize(3, 2, 3) [0];
var volumeOne = getSize(3, 2, 3)[1];
// Meerdere values kan je uit een functie halen. Je wilt de are berekenen en dan de volume en dat kan bij elkaar als sizes. Blokhaken (array) bij areaOne en volumeOne zorgt ervoor dat hij de juiste area en volume pakt uit de functie. 

