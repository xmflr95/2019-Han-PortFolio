const mailForm = document.querySelector('.contact-email form');

const mailName = mailForm.querySelector('#name');
const mailMail = mailForm.querySelector('#mail');
const mailMsg = mailForm.querySelector('#msg');

function formSubmit() {
  let toName = mailName.value;
  let toMail = mailMail.value;
  let toMsg = mailMsg.value;

  mailForm.action = `mailto:xmflr95@gmail.com?subject=View the site and send mail from ${toName}.&cc=${toMail}&body=${toMsg}`;
}

// action = "mailto:xmflr95@gmail.com?subject=View the site and send mail.&body=&{}"