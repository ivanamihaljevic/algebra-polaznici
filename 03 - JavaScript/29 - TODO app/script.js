anime({
    targets: '.line-logo .lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function (el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
});

setTimeout(() => {
    document.getElementsByClassName('loading')[0].style.display = 'none';
}, 3000)

/**
 * MODAL 
 */
var modal = document.getElementById('modal');
var button = document.getElementById('button');
var span = document.getElementsByClassName('close-modal')[0];

// Pokaži modal kada korisnik klikne na "not you?"
button.onclick = function () {
    modal.style.display = 'block';
}

span.onclick = function () {
    modal.style.display = 'none';
}