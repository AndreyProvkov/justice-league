import { toggleActiveHeaderElements } from '../header/header';

const hamburgerBtn = document.querySelector('.hamburger');

hamburgerBtn.addEventListener('click', toggleClass);

function toggleClass() {
    this.classList.toggle('is-active');
    toggleActiveHeaderElements();
}

function removeActiveClassBtn() {
    hamburgerBtn.classList.remove('is-active');
}

export { removeActiveClassBtn }
