const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "gkim4948@gmail.com",
    Password: "D6C9AE3EB30EAE9BCCEF1C68C662F2ADD8CA",
    To: "gkim4948@gmail.com",
    From: "gkim4948@gmail.com",
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});
