// 1. dodavanje h1 elementa
var h1 = document.createElement("h1");
h1.innerText = "Hello world!";

document.body.prepend(h1);

// 2. novi div sa klasom info
var infoDiv = document.createElement("div");
infoDiv.setAttribute("class", "info");
infoDiv.innerText = "Hello!!";

var descriptionDiv = document.querySelector(".description");
document.body.insertBefore(infoDiv, descriptionDiv.nextSibling);

// 3. 5 praznih li elemenata
var ulElement = document.querySelector("ul");

for (var i = 0; i < 2; i++) {
    var liElement = document.createElement("li");
    ulElement.appendChild(liElement);
}
