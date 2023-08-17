const refs = {
  openModalBtns: document.querySelectorAll('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  backdrop: document.querySelector('.backdrop'),
  body: document.querySelector('body'),
};

const headerOpenModal = document.querySelector('.header__open-modal');

// headerOpenModal.addEventListener('click', () => {
//   console.log('click on header modal-open button');
// });

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
  refs.body.classList.toggle('modal-open');

  if (refs.modal.classList.contains('visually-hidden')) {
    removePaddingFromBody();
  } else {
    addPaddingToBody();
  }
}

const scrollbarWidth = window.innerWidth - document.body.offsetWidth;

function addPaddingToBody() {
  refs.body.style.overflow = 'hidden';
  refs.body.style.paddingRight = `${scrollbarWidth}px`;
}

function removePaddingFromBody() {
  refs.body.style.overflow = '';
  refs.body.style.paddingRight = '0';
}
