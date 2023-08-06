const openModalBtn = document.querySelector('.open-modal-button');
openModalBtn.addEventListener('click', () => {
  console.log('click on open button');
});

document.addEventListener('click', () => {
  console.log('click on button');
});

// console.log(openModalBtn);

// const closeModalBtn = document.querySelector('[data-modal-close]');

// console.log(closeModalBtn);

// const modal = document.querySelector('[data-modal]');

// // openModalBtn.addEventListener('click', toggleModal);
// closeModalBtn.addEventListener('click', toggleModal);

// function toggleModal() {
//   modal.classList.toggle('is-hidden');
// }

// const backdrop = document.querySelector('.backdrop');
// backdrop.addEventListener('click', event => {
//   if (event.target === backdrop) {
//     toggleModal();
//   }
// });
