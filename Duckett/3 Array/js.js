console.log("hoi");

// S-1
var colors = ["white", "black", "custom"];

var el = document.getElementById("colors");
el.textContent = colors[0];
// Je begint bij 0 te tellen, dus dan is white 0

// S-2
var colors =    ["white", 
                "black", 
                "custom"];

colors[2] = "beige";

var el = document.getElementById("colors-2");
el.textContent = colors[2];
// Custom is verandert naar beige

// S-3
var subtotal = (13 + 1) * 5; // Eerst () en dan de rest
var shipping = 0.5 * (13 + 1); // Eerst () en dan de rest
var total = subtotal + shipping; // 77
// Hoe Makkelijk Was De Volgorde Ook Alweer? Wiskunde be like

// S-4
var firstName = "Ivy ";
var lastName = "Stone";
var fullName = firstName + lastName;
// of
var firstName = "Ivy";
var lastName = "Stone";
var fullName = firstName + " " + lastName;

//S-5
var cost1 = '7'; // String
var cost2 = 7; // Number

// S-6 
var greeting = "Howdy";
var name = "Molly";

var welcomeMessage = greeting + name + "!";

var el6 = document.getElementById("greeting");
el6.textContent = welcomeMessage;
// 2 strings worden bij elkaar opgeteld en geplaatst bij de ID greeting

// S-7 
var greeting7 = "Howdy";
var greet7 = document.querySelector("#message-7");

var currentName = "Molly";
var name7 = document.querySelector("#name-7");

var customSign = "Montague House",
    toalTiles = 14;
    subtotal6 = 2.50;
    shipping6 = 7;
    grandTotal = (toalTiles * subtotal6) + shipping6;

var c1 = document.querySelector("#custom-sign"),
    c2 = document.querySelector("#total-tiles"),
    c3 = document.querySelector("#subtotal"),
    c4 = document.querySelector("#shipping"),
    c5 = document.querySelector("#grand-total");

greet7.textContent = greeting7;
name7.textContent = currentName;

c1.textContent = customSign;
c2.textContent = toalTiles;
c3.textContent = subtotal6;
c4.textContent = shipping6;
c5.textContent = grandTotal;
// Deze code is zelf geschreven om te zien of ik een optel som kon maken en tekst kon veranderen in de HTML