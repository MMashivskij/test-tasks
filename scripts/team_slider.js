'use strict';

const teamArray = [
  {
    name: 'Anthony Stark',
    position: 'Iron Man',
    // eslint-disable-next-line max-len
    description: 'A fictional character portrayed by Robert Downey Jr. in the Marvel Cinematic Universe (MCU) film franchise—based on the Marvel Comics character of the same name—commonly known by his alter ego, Iron Man.',
    // eslint-disable-next-line max-len
    photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Robert_Downey_Jr._as_Iron_Man_in_Avengers_Infinity_War.jpg/220px-Robert_Downey_Jr._as_Iron_Man_in_Avengers_Infinity_War.jpg',
  },

  {
    name: 'Thor Odinson',
    position: 'Demigod',
    // eslint-disable-next-line max-len
    description: 'A fictional character portrayed by Chris Hemsworth in the Marvel Cinematic Universe (MCU) film franchise, based on the Marvel Comics character of the same name. In the films, Thor is one of the most powerful of the Asgardians, an alien civilization with long ties to Earth, who are therefore considered on Earth to be gods.',
    // eslint-disable-next-line max-len
    photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg',
  },

  {
    name: 'Hulk',
    position: 'Green giant',
    // eslint-disable-next-line max-len
    description: 'A 2003 American superhero film based on the fictional Marvel Comics character of the same name. It was directed by Ang Lee and written by James Schamus, Michael France, and John Turman, from a story by Schamus.',
    // eslint-disable-next-line max-len
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSm-eIW1Vu9V2U8oWQ_xC41fnIMbeQrfq7uCoqd5t6t3DH7eR7zDsKkriQ4&usqp=CAU&ec=45668930',
  },
];

let teamCounter = 0;

const teamMember = document.querySelector('.team__member');
const teamMemberName = teamMember.querySelector('.team__member_name');
const teamMemberPosition = teamMember.querySelector('.team__member_position');
const teamMemberDescription = teamMember.querySelector(
  '.team__member_description'
);
teamMemberName.textContent = teamArray[teamCounter].name;
teamMemberPosition.textContent = teamArray[teamCounter].position;
teamMemberDescription.textContent = teamArray[teamCounter].description;

const teamSlider = document.querySelector('.team__slider');

const buttonNextImage = teamSlider.querySelector('#buttonNext');
const buttonPrevImage = teamSlider.querySelector('#buttonPrev');
// const buttonNextImages = buttonNext.querySelectorAll('img');
// const buttonPrevImages = buttonPrev.querySelectorAll('img');
const buttonNextDescription = teamSlider.querySelector(
  '.team__slider_button_description_next'
);
const buttonPrevDescription = teamSlider.querySelector(
  '.team__slider_button_description_prev'
);
buttonNextImage.setAttribute('src', teamArray[teamCounter].photo);
buttonPrevImage.setAttribute('src', '');

buttonNextImage.addEventListener('click', nextRunner);
buttonPrevImage.addEventListener('click', prevRunner);

const teamSliderButtonNameNext = teamSlider.querySelector(
  '.team__slider_button_name_next'
);
teamSliderButtonNameNext.textContent = teamArray[teamCounter].name;

const teamSliderButtonNamePrev = teamSlider.querySelector(
  '.team__slider_button_name_prev'
);
teamSliderButtonNamePrev.textContent = null;

const teamPhotos = document.querySelector('.team__photos');
const teamPhotosArray = teamPhotos.querySelectorAll('img');

teamPhotosArray[teamCounter].className = 'team__photos_first';
teamPhotosArray[teamCounter + 1].className = 'team__photos_second';
teamPhotosArray[teamCounter + 2].className = 'team__photos_third';

function next() {
  teamPhotosArray[teamCounter].removeAttribute('class');

  teamCounter++;

  teamMemberName.textContent = teamArray[teamCounter].name;
  teamMemberPosition.textContent = teamArray[teamCounter].position;
  teamMemberDescription.textContent = teamArray[teamCounter].description;

  buttonPrevImage.src = teamArray[teamCounter - 1].photo;
  buttonPrevDescription.style.opacity = 1;
  buttonPrevImage.addEventListener('click', prevRunner);

  switch (teamCounter) {
    case teamPhotosArray.length - 2:
      teamPhotosArray[teamCounter].className = 'team__photos_first';
      teamPhotosArray[teamCounter + 1].className = 'team__photos_second';
      break;

    case teamPhotosArray.length - 1:
      teamPhotosArray[teamCounter].className = 'team__photos_first';
      break;

    default:
      teamPhotosArray[teamCounter].className = 'team__photos_first';
      teamPhotosArray[teamCounter + 1].className = 'team__photos_second';
      teamPhotosArray[teamCounter + 2].className = 'team__photos_third';
      break;
  }

  if (teamCounter === teamArray.length - 1) {
    buttonNextImage.src = '';
    buttonNextImage.removeEventListener('click', nextRunner);
    buttonNextDescription.style.opacity = 0.6;
  } else {
    buttonNextImage.src = teamArray[teamCounter].photo;
    teamSliderButtonNameNext.textContent = teamArray[teamCounter + 1].name;
  }
  teamSliderButtonNamePrev.textContent = teamArray[teamCounter - 1].name;
}

function nextRunner() {
  next();
}

function prev() {
  teamCounter--;

  teamMemberName.textContent = teamArray[teamCounter].name;
  teamMemberPosition.textContent = teamArray[teamCounter].position;
  teamMemberDescription.textContent = teamArray[teamCounter].description;

  buttonNextImage.addEventListener('click', nextRunner);
  buttonNextDescription.style.opacity = 1;

  switch (teamCounter) {
    case teamPhotosArray.length - 2:
      teamPhotosArray[teamCounter].className = 'team__photos_first';
      teamPhotosArray[teamCounter + 1].className = 'team__photos_second';
      break;

    case teamPhotosArray.length - 1:
      teamPhotosArray[teamCounter].className = 'team__photos_first';
      break;

    default:
      teamPhotosArray[teamCounter].className = 'team__photos_first';
      teamPhotosArray[teamCounter + 1].className = 'team__photos_second';
      teamPhotosArray[teamCounter + 2].className = 'team__photos_third';
      break;
  }

  if (teamCounter === 0) {
    teamSliderButtonNamePrev.textContent = null;
    buttonPrevImage.removeEventListener('click', prevRunner);
    buttonPrevDescription.style.opacity = 0.6;
    buttonPrevImage.src = '';
  } else {
    buttonPrevImage.src = teamArray[teamCounter - 1].photo;
    teamSliderButtonNamePrev.textContent = teamArray[teamCounter - 1].name;
  }

  buttonNextImage.src = teamArray[teamCounter + 1].photo;
  teamSliderButtonNameNext.textContent = teamArray[teamCounter + 1].name;
}

function prevRunner() {
  prev();
}
