const headerClasses = ['header', 'logo', 'nav', 'control'];
const wrapper = document.querySelector('.wrapper');
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
    for (let i = 0; i < headerElements().length; i++) {
        headerElements()[i].classList.toggle(`${headerClasses[i]}_active`);
    }
    html.classList.toggle('no-scroll');
}

function removeActiveHeaderElements() {
    for (let i = 0; i < headerElements().length; i++) {
        headerElements()[i].classList.remove(`${headerClasses[i]}_active`);
    }
    html.classList.remove('no-scroll');
}

export {toggleActiveHeaderElements, removeActiveHeaderElements};