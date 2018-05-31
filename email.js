//takes in date from email.html clears fields and says thank you
let submitEmail = document.getElementById("submitEmail");
let firstNameEmail = document.getElementById("firstNameEmail");
let lastNameEmail = document.getElementById("lastNameEmail");
let emailEmail = document.getElementById("emailEmail");

submitEmail.addEventListener('click', function(event) {
  event.preventDefault();
  if ((firstNameEmail.value === "") || (lastNameEmail.value === "") || (emailEmail.value === "")) {
    alert("How do you expect me to do my job if you dont finish yours?");
  } else {
    alert(`Thank you ${firstNameEmail.value} for signing up for our daily email joke.`);
  }
  document.getElementById("formEmail").reset();
});
