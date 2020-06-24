'use strict';

const videos = [
  {
    // eslint-disable-next-line max-len
    url: './images/video/coverr-aerial-view-of-rocky-mountains-1585320758193.mp4',
  },
  {
    url: './images/video/coverr-car-in-desert-1585317576189.mp4',
  },
  {
    url: './images/video/coverr-mountain-lake-1572171891276.mp4',
  },
];

let bunnerCounter = 0;

const bunnerSlider = document.querySelector('.bunner__slider');
const bunnerSliderVideo = bunnerSlider.querySelector('.bunner__slider_video');
bunnerSliderVideo.setAttribute('src', videos[bunnerCounter].url);

const bunnerSliderButtonRight = bunnerSlider
  .querySelector('.bunner__slider_button-right');
const bunnerSliderButtonLeft = bunnerSlider
  .querySelector('.bunner__slider_button-left');

const bunnerSliderDots = bunnerSlider.querySelectorAll('.bunner__slider_dot');
bunnerSliderDots[bunnerCounter].className = 'bunner__slider_dot_active';

const rightClick = () => {
  bunnerSliderDots[bunnerCounter].className = 'bunner__slider_dot';
  bunnerCounter++;
  if (bunnerCounter === videos.length) {
    bunnerCounter = 0;
    bunnerSliderVideo.setAttribute('src', videos[bunnerCounter].url);
    bunnerSliderDots[bunnerCounter].className = 'bunner__slider_dot_active';
  }
  bunnerSliderVideo.setAttribute('src', videos[bunnerCounter].url);
  bunnerSliderDots[bunnerCounter].className = 'bunner__slider_dot_active';
};

const leftClick = () => {
  if (bunnerCounter === 0) {
    bunnerSliderDots[bunnerCounter].className = 'bunner__slider_dot';
    bunnerCounter = videos.length - 1;
    bunnerSliderVideo.setAttribute('src', videos[bunnerCounter].url);
    bunnerSliderDots[bunnerCounter].className = 'bunner__slider_dot_active';
  } else {
    bunnerSliderDots[bunnerCounter].className = 'bunner__slider_dot';
    bunnerCounter--;
    bunnerSliderVideo.setAttribute('src', videos[bunnerCounter].url);
    bunnerSliderDots[bunnerCounter].className = 'bunner__slider_dot_active';
  }
};

bunnerSliderButtonRight.onclick = () => rightClick();
bunnerSliderButtonLeft.onclick = () => leftClick();

const video = document.querySelector('.bunner__slider_video');

window.addEventListener('scroll', function() {
  video.pause();
  document.querySelector('.header').style.backgroundColor = 'black';
  setTimeout(() => {
    document.querySelector('.header').style.backgroundColor = '';
  }, 5000);
});

window.addEventListener('click', function() {
  video.play();
});

