import { removeActiveClassBtn } from "../hamburger/hamburgerActive"

const headerClasses = ['header', 'logo', 'nav', 'control'];
const html = document.documentElement;

function headerElements() {
    const headerElementsArr = [];
    for (let i = 0; i < headerClasses.length; i++) {
        let elem = '';
        elem = document.querySelector(`.${headerClasses[i]}`);
        headerElementsArr.push(elem);
    }
    return headerElementsArr;
}

function toggleActiveHeaderElements() {
    const headerElementsArr = headerElements();
    for (let i = 0; i < headerElementsArr.length; i++) {
        headerElementsArr[i].classList.toggle(`${headerClasses[i]}_active`);
    }
    html.classList.toggle('no-scroll');
}

function removeActiveHeaderElements() {
    const headerElementsArr = headerElements();
    for (let i = 0; i < headerElementsArr.length; i++) {
        headerElementsArr[i].classList.remove(`${headerClasses[i]}_active`);
    }
    removeActiveClassBtn();
    html.classList.remove('no-scroll');
}

export { toggleActiveHeaderElements, removeActiveHeaderElements };