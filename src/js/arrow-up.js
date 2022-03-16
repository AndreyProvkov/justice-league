'use strict'

const arrowUp = document.querySelector('.arrow-up');

window.addEventListener('scroll', displayArrow);

function displayArrow() {
    if (this.pageYOffset > 300) {
        arrowUp.classList.add("active");
    } else {
        arrowUp.classList.remove("active");
    }
}