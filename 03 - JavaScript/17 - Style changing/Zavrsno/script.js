var body = document.querySelector("body");
var li = document.querySelectorAll("li");
var info = document.querySelector(".info");
var h3 = document.querySelector("h3");

// 1. Zadatak
for (var i = 0; i < 5; i++) {
    li[i].style.listStyleType = "decimal";
}

/*
* 1. Zadatak alternativa
* var ul = document.querySelector("ul");
* ul.style.listStyleType = "decimal";
*/ 

// 2. Zadatak
info.classList.add("hide");

// 3. Zadatak
const bodyStyles = window.getComputedStyle(body, null);
const margin = bodyStyles.getPropertyValue("margin-left");
console.log(margin);

// 4. Zadatak
var marginNum = parseInt(margin);
var animate = setInterval(frame, 50);
var reverse = false;

function frame() {
    if (reverse) {
        marginNum--;
    } else {
        marginNum++;
    }

    if (marginNum == 30) {
        reverse = true;
    }

    if (marginNum == 0) {
        reverse = false;
    }

    body.style.margin = marginNum + "px";
}
