document.body.style.background = 'gray';

function myFunction() {
    document.body.style.background = 'azure';
}

function changeColor(newColor){
    const el = document.getElementById('main');
    el.style.color = newColor;
    el.style.background = 'pink';
    el.style.fontSize = '40px';
}