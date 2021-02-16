'use strict';

const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModals = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
};

btnOpenModals.forEach(btn => {
  btn.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');
  });
});

btnCloseModal.addEventListener('click', closeModal());

overLay.addEventListener('click', closeModal());
