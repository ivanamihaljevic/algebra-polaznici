var body = document.querySelector("body");
var li = document.querySelectorAll("li");
var info = document.querySelector(".info");
var h3 = document.querySelector("h3");

// 1st Task
for (var i = 0; i < 5; i++) {
    li[i].style.listStyleType = "decimal";
}

/*
* 1st Task, Tlternative Solution
* var ul = document.querySelector("ul");
* ul.style.listStyleType = "decimal";
*/ 

// 2nd Task
// https://www.w3schools.com/jsref/prop_element_classlist.asp
info.classList.add("hide");

// 3rd Task
// https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
const bodyStyles = window.getComputedStyle(body, null);
const margin = bodyStyles.getPropertyValue("margin-left");
console.log(margin);

// 4th Task
// https://www.w3schools.com/js/js_htmldom_animate.asp
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
