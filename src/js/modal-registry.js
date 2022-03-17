'use strict'

const modal = document.querySelector('.offer-modal');
const openModal = document.querySelector('.offer__btn');
const closeModal = document.querySelector('.offer-modal__close');

openModal.addEventListener('click', () => modal.style.display = 'block');

closeModal.addEventListener('click', () => modal.style.display = 'none');

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});