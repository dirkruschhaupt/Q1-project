//takes in date from submit.html clears fields and says thank you
let submit = document.getElementById("submit");
let message = document.getElementById("message");
let firstNameSubmit = document.getElementById("firstNameSubmit");
let lastNameSubmit = document.getElementById("lastNameSubmit");
let emailSubmit = document.getElementById("emailSubmit");

submit.addEventListener('click', function(event) {
  event.preventDefault();
  if ((message.value === "") || (firstNameSubmit.value === "") || (lastNameSubmit.value === "") || (emailSubmit.value === "")) {
      alert("You forgot something!");
  } else {
    alert(`Thank you ${firstNameSubmit.value} for submitting your joke. We will contact you in 3-5 days if use decide to use your funny.`);
  }
  document.getElementById("messageInfo").reset();
  document.getElementById("formInfo").reset();
});
