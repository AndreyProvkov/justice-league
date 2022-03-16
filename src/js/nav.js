'use strict'

const navLink = document.querySelectorAll('.nav-link');
const elementsForScroll = document.querySelectorAll('[data-scroll]');

navLink.forEach( element => {
    element.addEventListener('click', scroll);
    element.addEventListener('click', addActiveClass);
});

function scroll(e) {
    e.preventDefault();
    
    const elemDataScroll = this.dataset.scroll;

    elementsForScroll.forEach( item => {
        if (!item.classList.contains('nav-link') && elemDataScroll === item.dataset.scroll) {
            item.scrollIntoView({behavior: "smooth"});
        }
    });
}

function addActiveClass() {
    navLink.forEach( item => {
        item.classList.remove('active');
    });
    this.classList.add('active');
}