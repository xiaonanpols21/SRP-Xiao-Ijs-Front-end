console.log("hoi");

var imgDicht = document.querySelector("img");
var sleutel = document.querySelector(".sleutel");

function openkist() {
    console.log("hoi 2");
    imgDicht.src = "chest3/chest3_open.gif";
}
sleutel.addEventListener("click", openkist);

