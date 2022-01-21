console.log("hoi");

// S-1
// Dit is een manier om het NIET te doen
// function checkUsername() {
//     var elMsg = document.getElementById("feedback");
//     var elUsername = document.getElementById("username");
//     if (elUsername.value.length < 5) {
//         elMsg.textContent = "Username must be 5 characters or more";
//     } else {
//         elMsg.textContent = " ";
//     }
// }
// Als gebruiker een gebruikersnaam minder dan 5 characters gaat typen, komt de if, anders de else

// S-2
// Using dom event handlers
// function checkUsername() {
//     var elMsg = document.getElementById("feedback");
//     if (elUsername.value.length < 5) {
//         elMsg.textContent = "Username must be 5 characters or more";
//     } else {
//         elMsg.textContent = " ";
//     }
// }

// var elUsername = document.getElementById("username");
// elUsername.onblur = checkUsername;
// onblur is voor <input> Onblur is een event


// S-3
// Using dom event listeners
function checkUsername() {
    var elMsg = document.getElementById("feedback");
    if (elUsername.value.length < 5) {
        elMsg.textContent = "Username must be 5 characters or more";
    } else {
        elMsg.textContent = " ";
    }
}

var elUsername = document.getElementById("username");
elUsername.addEventListener("blur", checkUsername, false);
// Dit is de juiste manier om het te doen