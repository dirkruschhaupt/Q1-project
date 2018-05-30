


//magic
//random search field
let randomSubmit = document.getElementById("randomSubmit");
randomSubmit.addEventListener('click', function(event) {
  event.preventDefault();

  fetch('http://api.icndb.com/jokes/random')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      let funny = myJson[1];
      funny.push();
    });

  })


  // fetch(`http://api.icndb.com/jokes/random`)
  //   .then((responce) => responce.json())
  //   .then(date) => {
  //     let joke = date;
  //     console.log(joke);
      //joke.setAttribute();
    //});

//}


//   (function() {
//
//
//     let submit = document.getElementById('submit');
//     let search = document.getElementById('search');
//     let dog = document.getElementById('dog');
//     const breed = [];
//
//     submit.addEventListener('click', function(event) {
//      if(search.value === '') {
//        event.preventDefault();
//        search.setAttribute("style", "border: 1px solid red");
//        alert('Please select dog!');
//       } else {
//      event.preventDefault();
//      fetch(`https://dog.ceo/api/breed/${search.value}/images`)
//
//       .then(response => response.json())
//       .then(dogBreedData => {
//         let dogAry = dogBreedData.message;
//         let pic = dogAry[Math.floor(Math.random() * dogAry.length)];
//         dog.setAttribute('src', pic);
//         console.log(breed);
//       })
//       .catch(error => console.log(error));
//      }
//   });
//   }) ();
//
//
// //user inputed name

let firstNameJoke = document.getElementById("firstNameJoke");
let lastNameJoke = document.getElementById("lastNameJoke");
let customSubmit = document.getElementById("customSubmit");

customSubmit.addEventListener('click', function(event) {
  event.preventDefault();
  if ((firstNameJoke.value === "") || (lastNameJoke.value === "")) {
      alert("You forgot something!");
  }
  event.preventDefault();
 fetch(`http://api.icndb.com/jokes/random?firstName=${firstNameJoke.value}&amp;lastName=${lastNameJoke.value}`)
 .then(function(response) {
   return response.json();
 })
 .then(function(myJson) {
   console.log(myJson);
 });
 document.getElementById("custom").reset();
});
