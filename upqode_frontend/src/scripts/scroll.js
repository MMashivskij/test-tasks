'use strict';

window.addEventListener('scroll', function () {
    let video = document.querySelector('.isPlaying');
    video.pause();
})

window.addEventListener('click', function () {
    let video = document.querySelector('.isPlaying');
    video.play();
})