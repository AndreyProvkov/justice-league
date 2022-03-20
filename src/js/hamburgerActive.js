import {toggleActiveHeaderElements} from './header';

const hamburgerBtn = document.querySelector('.hamburger');

hamburgerBtn.addEventListener('click', toggleClass);

function toggleClass() {
    this.classList.toggle('is-active');
    toggleActiveHeaderElements();
}

