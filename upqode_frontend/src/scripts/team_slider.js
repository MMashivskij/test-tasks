'use strict';

const teamArray = [
    {
        name: 'Anthony Stark',
        position: 'Iron Man',
        description: 'A fictional character portrayed by Robert Downey Jr. in the Marvel Cinematic Universe (MCU) film franchise—based on the Marvel Comics character of the same name—commonly known by his alter ego, Iron Man.',
        photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Robert_Downey_Jr._as_Iron_Man_in_Avengers_Infinity_War.jpg/220px-Robert_Downey_Jr._as_Iron_Man_in_Avengers_Infinity_War.jpg'
    },

    {
        name: 'Thor Odinson',
        position: 'Demigod',
        description: 'A fictional character portrayed by Chris Hemsworth in the Marvel Cinematic Universe (MCU) film franchise, based on the Marvel Comics character of the same name. In the films, Thor is one of the most powerful of the Asgardians, an alien civilization with long ties to Earth, who are therefore considered on Earth to be gods.',
        photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg',
    },

    {
        name: 'Hulk',
        position: 'Green giant',
        description: 'A 2003 American superhero film based on the fictional Marvel Comics character of the same name. It was directed by Ang Lee and written by James Schamus, Michael France, and John Turman, from a story by Schamus.',
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSm-eIW1Vu9V2U8oWQ_xC41fnIMbeQrfq7uCoqd5t6t3DH7eR7zDsKkriQ4&usqp=CAU&ec=45668930'
    }
]


const team = document.querySelectorAll('.team__member_info');
let counter = 0;
team[counter].className = 'team__member_active';



const teamSlider = document.querySelector('.team__slider');

const buttonNext = teamSlider.querySelector('#buttonNext');
const buttonPrev = teamSlider.querySelector('#buttonPrev');
const buttonNextImages = buttonNext.querySelectorAll('img');
const buttonPrevImages = buttonPrev.querySelectorAll('img');
const buttonNextDescription = teamSlider.querySelector('.team__slider_button_description_next');
const buttonPrevDescription = teamSlider.querySelector('.team__slider_button_description_prev');
buttonNextImages[1].className = 'activeImageNext';

buttonNext.addEventListener('click', nextRunner);
buttonPrev.addEventListener('click', prevRunner);


const team__slider_button_name_next = teamSlider.querySelector('.team__slider_button_name_next');
team__slider_button_name_next.textContent = teamArray[counter].name;

const team__slider_button_name_prev = teamSlider.querySelector('.team__slider_button_name_prev');
team__slider_button_name_prev.textContent = null;


const team__photos = document.querySelector('.team__photos');
const team__photos_array = team__photos.querySelectorAll('img');

team__photos_array[counter].className = 'team__photos_first';
team__photos_array[counter + 1].className = 'team__photos_second';
team__photos_array[counter + 2].className = 'team__photos_third';

let nothing;

function next () {
    team[counter].className = 'team__member_info';
    team__photos_array[counter].removeAttribute('class');

    counter++;

    team[counter].className = 'team__member_active';
    buttonPrevImages[counter - 1].className = 'activeImageNext';
    buttonPrevDescription.style.opacity = 1;             
    buttonPrev.addEventListener('click', prevRunner);

    switch (counter) {
        case team__photos_array.length-2:
            team__photos_array[counter].className = 'team__photos_first';
            team__photos_array[counter + 1].className = 'team__photos_second';
            break;

        case team__photos_array.length-1:
            team__photos_array[counter].className = 'team__photos_first';
            break;
    
        default:
            team__photos_array[counter].className = 'team__photos_first';
            team__photos_array[counter + 1].className = 'team__photos_second';
            team__photos_array[counter + 2].className = 'team__photos_third';
            break;
    }

    if(counter === team.length - 1) {
        team__slider_button_name_next.textContent = null;
        buttonNextImages[counter].removeAttribute('class');
        buttonNext.removeEventListener('click', nextRunner);
        buttonNextDescription.style.opacity = 0.6;             

        buttonPrevImages[counter - 2].removeAttribute('class');
    } else {
        buttonNextImages[counter].removeAttribute('class');
        buttonNextImages[counter + 1].className = 'activeImageNext';
        team__slider_button_name_next.textContent = teamArray[counter + 1].name;
    }    
    team__slider_button_name_prev.textContent = teamArray[counter - 1].name;    
}

function nextRunner() {
    next();
}




function prev() {
    team[counter].className = 'team__member_info';
    counter--;
    team[counter].className = 'team__member_active';

    buttonNext.addEventListener('click', nextRunner);
    buttonNextDescription.style.opacity = 1;

    switch (counter) {
        case team__photos_array.length-2:
            team__photos_array[counter].className = 'team__photos_first';
            team__photos_array[counter + 1].className = 'team__photos_second';
            break;

        case team__photos_array.length-1:
            team__photos_array[counter].className = 'team__photos_first';
            break;
    
        default:
            team__photos_array[counter].className = 'team__photos_first';
            team__photos_array[counter + 1].className = 'team__photos_second';
            team__photos_array[counter + 2].className = 'team__photos_third';
            break;
    }

    if (counter === 0) {
        team__slider_button_name_prev.textContent = null;
        buttonPrevImages[counter].removeAttribute('class');
        buttonPrev.removeEventListener('click', prevRunner);
        buttonPrevDescription.style.opacity = 0.6;

        buttonNextImages[counter + 2].removeAttribute('class');
    } else {
        buttonPrevImages[counter].removeAttribute('class');
        buttonPrevImages[counter - 1].className = 'activeImageNext';
        team__slider_button_name_prev.textContent = teamArray[counter - 1].name;
    }

    buttonNextImages[counter].removeAttribute('class');
    buttonNextImages[counter + 1].className = 'activeImageNext';
    team__slider_button_name_next.textContent = teamArray[counter + 1].name;
}

function prevRunner() {
    prev();
}

