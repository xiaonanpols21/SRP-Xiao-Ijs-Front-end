console.log("hoi");

// S-1
var price;
var quantity;
var total;

price = 5;
quantity = 14;
total = price * quantity;

var el = document.getElementById("cost");
el.textContent = '$' + total;
// Totaalprijs wordt opgeteld en neergezet in de HTML bij ID cost

// S-2
var username;
var message;
username = "Molly";
message = "See our upcomming range";

var elName = document.getElementById("name");
elName.textContent = username;
var elNote = document.getElementById("note");
elNote.textContent = message;
// Tekst wordt veranderd en neergezet in de HTML bij de ID's

// S-3
var title;
var message3;
title = "Molly's Special offers";
message3 = "<a href=\"sale.html\">25% off</a>";

var elTitle = document.getElementById("title-3");
elTitle.innerHTML = title;
var elNote3 = document.getElementById("note-3");
elNote3.innerHTML = message3;
// Deze opdracht is om een quote te gebruiken in een string.


