'use strict';


const activeLink = function (e) {
    document.querySelector('.activ-link').className = "header__menu_link";
    e.className = "activ-link header__menu_link";
}
