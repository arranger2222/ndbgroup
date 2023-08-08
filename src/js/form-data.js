// document.getElementById('myForm').addEventListener('submit', function (event) {
//   event.preventDefault(); // Забороняє типову поведінку відправки форми

//   // Отримання значень полів форми
//   const name = document.querySelector('input[name="name"]').value;
//   const tel = document.querySelector('input[name="tel"]').value;
//   const mail = document.querySelector('input[name="mail"]').value;
//   const comment = document.querySelector('textarea[name="comment"]').value;
//   // const privacyChecked = document.querySelector(
//   //   'input[name="privacy"]'
//   // ).checked;

//   // Робота з отриманими даними форми (наприклад, відправка їх на сервер)
//   // Ви можете створити об'єкт для зберігання даних форми
//   const formData = {
//     name: name,
//     tel: tel,
//     mail: mail,
//     comment: comment,
//     privacyChecked: privacyChecked,
//   };

//   // Тепер ви можете використовувати об'єкт formData для відправки даних на сервер або обробки їх по потребі
//   console.log(formData);

//   // Необов'язково, але ви можете скинути форму після відправки
//   document.getElementById('myForm').reset();
// });

document.getElementById('myForm').onsubmit = function (event) {
  event.preventDefault();
  sendEmail();
};

function sendEmail() {
  const form = document.getElementById('myForm');
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
