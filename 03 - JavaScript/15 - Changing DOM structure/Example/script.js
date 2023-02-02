function myFunction() {
    document.body.style.background = 'azure';
}

window.onload = () => {
    console.log('Page is fully loaded');
    document.body.style.background = 'gray';

};

function changeColor(newColor) {
    const elem = document.getElementById('main');
    elem.style.color = newColor;
}

function remove() {
    document.getElementById('main').style.display = 'none';
}

function submit() {
    console.log(document.getElementById('name').value)
    console.log(document.getElementById('surname').value)
}

function check() {
    const main = document.getElementById('main');
    const tags = main.getElementsByTagName('button');
    console.log(tags)
    const num = tags.length;
    alert(`There are ${num} buttons in #main`);
}

function get(){
    const klasa = document.querySelector('.footer');
    const id = document.querySelector('#footer');
    const name = document.querySelector("input[name='footer']");
    console.log(klasa)
    console.log(id)
    console.log(name)
}