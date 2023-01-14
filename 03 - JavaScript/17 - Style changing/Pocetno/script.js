// 1. list-style-type; element.style
var ul = document.querySelector("ul");
ul.style.listStyleType = "decimal";

// 2. .hide (u stylesheet); element.classList
var info = document.querySelector(".info");
info.classList.add("hide");

// 3. getComputedStyle(element)
var computedStyles = window.getComputedStyle(document.body);
var margin = computedStyles.getPropertyValue("margin-left");
console.log(margin);

// 4.
var marginValue = parseInt(margin);
var reverse = false;

setInterval(animate, 100);

function animate() {
    if (reverse) {
        marginValue--;
    } else {
        marginValue++;
    }

    if (marginValue >= 30) {
        reverse = true;
    } else if (margin <= 0) {
        reverse = false;
    }

    body.style.margin = marginValue + "px";
}
