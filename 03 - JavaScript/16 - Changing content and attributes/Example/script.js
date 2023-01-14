const para = document.createElement('p');
const text = document.createTextNode('Am I new here? Yes I am.');

para.appendChild(text);

const element = document.getElementById('div1');
element.appendChild(para);

const p2 = document.getElementById('p2');
p2.setAttribute('class', 'p2 display');
console.log(p2.getAttribute('class'));

//p2.remove();

let h1 = document.querySelector('h1');
h1.innerText = 'Hello, class';

document.querySelector('#div2').innerHTML = '<h1>I just added me here.</h1>';

const newDiv = document.createElement('div');
const newText = document.createTextNode('Hi div.');
newDiv.appendChild(newText);

const currentDiv = document.getElementById('div1');
document.body.insertBefore(newDiv, currentDiv);

