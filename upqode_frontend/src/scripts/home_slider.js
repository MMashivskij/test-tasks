'use strict';

const homeContainer = document.querySelector('.homeContainer');
const homeSlider = homeContainer.querySelector('.homeSlider');
const list = homeSlider.querySelector('ul');
const listElems = homeSlider.querySelectorAll('li');

let position = 0;

const style = window.getComputedStyle(homeSlider, null);
const width = parseInt(style.width);

const dots = homeContainer.querySelectorAll('.carousel__dot');
let dotCount = 0;
dots[dotCount].className = 'carousel__dot_active';

const videos = homeContainer.querySelectorAll('video');
let videoCount = 0;
videos[videoCount].className = 'isPlaying';

const playingVideo = (position) => {
    videos[videoCount].removeAttribute('class');
    videoCount = -position / width;
    videos[videoCount].className = 'isPlaying';
}

const moveLeft = () => {
  position += width;
  if (position > 0) {
    position = -width * (listElems.length - 1);
    playingVideo(position);
  }
  list.style.marginLeft = position + 'px';
  
  playingVideo(position);

  if (dotCount === 0) {
    dots[dotCount].className = 'carousel__dot';
    dotCount = dots.length - 1;
    dots[dotCount].className = 'carousel__dot_active';
  } else {
    dots[dotCount].className = 'carousel__dot';
    dotCount--;
    dots[dotCount].className = 'carousel__dot_active';
  }
};

const moveRight = () => {
  position -= width;
  if (position < -width * (listElems.length - 1)) {
    position = 0;
  }
  list.style.marginLeft = position + 'px';

  playingVideo(position);

  if (dotCount === dots.length - 1) {
    dots[dotCount].className = 'carousel__dot';
    dotCount = 0;
    dots[dotCount].className = 'carousel__dot_active';
  } else {
    dots[dotCount].className = 'carousel__dot';
    dotCount++;
    dots[dotCount].className = 'carousel__dot_active';
  }
};

homeContainer.querySelector('.homeSlider__button_left').onclick = function() {
  moveLeft();
};

homeContainer.querySelector('.homeSlider__button_right').onclick = function() {
  moveRight();
};
