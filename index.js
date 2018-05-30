


// (function() {
//
// })
// //magic
// //random search field
// submit.addEventListener('click', function(event) {
//
// fetch(`http://api.icndb.com/jokes/random`)
//   .then((responce) => responce.json())
//   .then((date) => {
//     let joke = date.message;
//     joke.setAttribute();
//   })
//
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
// submit.addEventListener('click', function(event) {
//    if(search.value === '') {
//      event.preventDefault();
//      search.setAttribute("style", "border: 1px solid red");
//      alert('Please Enter a Name');
//     } else {
//    event.preventDefault();
// fetch(`http://api.icndb.com/jokes/random?firstName=${.value}&amp;lastName=${.value}`}
//   .then((responce) => responce.json())
//   .then((date) => {
//
//   })
