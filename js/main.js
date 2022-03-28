const modal = document.querySelector('.modal');
const buttonsOpenModal = document.querySelectorAll('.button_type_open');
const buttonCloseModal = document.querySelector('.modal__close');
const body = document.querySelector('body');

const closeModal = () => {
  modal.classList.remove('modal_opened');
  body.classList.remove('noscroll');
}

buttonsOpenModal.forEach((button) => {
  button.addEventListener('click', () => {
    modal.classList.add('modal_opened');
    body.classList.add('noscroll');
  });
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal_opened')) {
    closeModal();
  }
});

buttonCloseModal.addEventListener('click', closeModal);