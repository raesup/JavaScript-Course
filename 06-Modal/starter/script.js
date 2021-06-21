'use strict';

const buttons = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-modal');

// buttons.forEach.addEventListener('click', () => {
//   modal.classList.toggle('hidden');
// });

buttons.forEach(button => {
  button.addEventListener('click', () => {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
  });
});

closeButton.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    //   console.log(e.key);
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
