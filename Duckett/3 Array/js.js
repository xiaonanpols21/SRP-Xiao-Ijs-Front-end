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
var greet7 = document.querySelector(".message");
greet7.textContent = greeting7;

var customSign, totalTiles, subtotal6, shipping6, grandTotal;
var c1, c2, c3, c4, c5;

c1 = document.getElementById("custom-sign");
c2 = document.getElementById("total-tiles");
c3 = document.getElementById("subtotal");
c4 = document.getElementById("shipping");
c5 = document.getElementById("grand-total");

c1.textContent = customSign;
c2.textContent = totalTiles;
c3.textContent = subtotal6;
c4.textContent = shipping6;
c5.textContent = grandTotal;

customSign = "Montague House";
totalTiles = 14;
subtotal6 = 2.50;
shipping6 = 7;
grandTotal = (totalTiles * subtotal6) + shipping6;
// Voor mijn gevoel zou dit goed moeten zijn. Maar krijg niks te zien op de pagina.

