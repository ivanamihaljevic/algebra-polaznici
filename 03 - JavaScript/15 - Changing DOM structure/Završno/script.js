// 1. Dodavanje h1 elementa
let h1 = document.createElement("h1");
h1.innerText = "Hello world!";

document.body.prepend(h1);

// 2. Novi div sa klasom info
let infoDiv = document.createElement("div");
infoDiv.setAttribute("class", "info");
infoDiv.innerText = "Hello!!";

let descriptionDiv = document.querySelector(".description");
document.body.insertBefore(infoDiv, descriptionDiv.nextSibling);

// 3. 5 Praznih li elemenata
let ulElement = document.querySelector("ul");

for (let i = 0; i < 2; i++) {
    let liElement = document.createElement("li");
    ulElement.appendChild(liElement);
}
