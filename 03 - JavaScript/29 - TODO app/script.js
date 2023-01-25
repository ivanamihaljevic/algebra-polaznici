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

