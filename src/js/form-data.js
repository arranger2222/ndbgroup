const form = document.getElementById('myForm');

form.onsubmit = function (event) {
  event.preventDefault();
  sendEmail();
};

function sendEmail() {
  emailjs.sendForm('service_ci8i7b2', 'template_uw3wr6i', form).then(
    function (response) {
      console.log('Message sent successfully!', response);
      closeModal(); // Call the function to close the modal after successful submission
    },
    function (error) {
      console.log('An error occurred while sending the message:', error);
    }
  );
  form.reset();
}
const modal = document.querySelector('.backdrop');
const body = document.querySelector('body');

function closeModal() {
  modal.classList.add('visually-hidden');
  body.classList.remove('modal-open');
}
