console.log("hoi");

var namen = ["Xiao Nan", "Chu Xia", "Jin", "Namjoon", "Hobi", "Taehyung"]

var pEl = document.querySelector(".naam");

var randomGetal = Math.random()*6;

pEl.textContent = namen[2];

randomGetal = Math.floor(randomGetal);

console.log(randomGetal);

pEl.textContent = namen[randomGetal];