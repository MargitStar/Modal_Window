'use strict';

const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModals = document.querySelectorAll('.show-modal');

btnOpenModals.forEach(btn => {
  btn.addEventListener('click', function () {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');
  });
});
