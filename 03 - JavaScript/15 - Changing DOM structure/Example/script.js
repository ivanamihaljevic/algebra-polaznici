document.body.style.background = 'gray';

function myFunction() {
    document.body.style.background = 'azure';
}

function changeColor(newColor) {
    const el = document.getElementById('main');
    el.style.color = newColor;
    el.style.background = 'pink';
    el.style.fontSize = '40px';
}

function remove() {
    document.getElementById('main').style.display = 'none';
}

function submit() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    console.log(`The user is ${name} ${surname}`)
}

function check(){
    const main = document.getElementById('main');
    const tags = main.getElementsByTagName('button');
    console.log(tags);
    const num = tags.length;
    alert(`There are ${num} buttons in #main`)
}

function get(){
    const klasa = document.querySelector('.footer');
    const id = document.querySelector('#footer');
    const name = document.querySelector('input[name="footer"]');
    console.log(klasa);
    console.log(id);
    console.log(name);
}