// JavaScript Document
var deButton = document.querySelector("nav button");
var deNav;

deButton.addEventListener("click", toggleDropdown);

/* ik roep de nav aan, doot toggle te klikken komt en gaat de dropdown */
function toggleDropdown(event) {
    deNav = event.target.parentNode;
    deNav.classList.toggle("toonDropdown");
}

/* nieuwe code*/

var button = document.querySelector(".blog");

/*hij is niet zichtbaar, tot dat er op wordt geklikt */
var displayNone = true;

var getal = document.querySelector(".mandjeplus");

/* hij begint op nummer 1 als je er op klikt */
var nummer = 1;

button.addEventListener("click", plus);

function plus() {
    if (displayNone === true) {
        getal.classList.remove("none");
        /* nu is word hij dus zichtbaar, nu hoeft ie hem niet iedere keer te doen */
        displayNone = false;
    }
    /* inhoud van mandje wordt bij iedere klik geplust*/
    getal.textContent = nummer++;
}
