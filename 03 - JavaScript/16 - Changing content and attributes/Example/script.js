document.getElementById('p1').style.color = 'blue';

const para = document.createElement('p');
const node = document.createTextNode('Am I new here? Yes I am!');
para.appendChild(node);

const element = document.getElementById('div1');
element.appendChild(para);

const p2 = document.getElementById('p2');
p2.remove();

let h1 = document.querySelector('h1');
h1.innerText = 'Hello, class.';

document.querySelector('#div2').innerHTML = '<h1>I just added me here.</h1>'
