// JavaScript Document
var deButton = document.querySelector("nav button");

deButton.addEventListener("click", toggleDropdown);

function toggleDropdown(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("toonDropdown");
}

var button = document.querySelector(".blog");

var displayNone = true;

var getal = document.querySelector(".mandjeplus");

var nummer = 1;

button.addEventListener("click", plus)

function plus() {
if (displayNone == true) {
    getal.classList.remove("none");
displayNone = false
}
    getal.textContent = nummer++;
}

