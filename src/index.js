const refs = {
  openModalBtns: document.querySelectorAll('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  backdrop: document.querySelector('.backdrop'),
  body: document.querySelector('body'),
};

for (const button of refs.openModalBtns) {
  button.addEventListener('click', toggleModal);
}

refs.closeModalBtn.addEventListener('click', toggleModal);

refs.backdrop.addEventListener('click', event => {
  if (event.target === refs.backdrop) {
    toggleModal();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    toggleModal();
  }
});

function toggleModal() {
  refs.modal.classList.toggle('visually-hidden');
  document.body.classList.toggle('modal-open');
}
