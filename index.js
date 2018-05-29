function validateForm() {
    var x = document.forms["firstname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}




fetch(`http://www.omdbapi.com/?apikey=9b54260a&plot=full&s=${search.value}`)
        .then((responce) => responce.json())
        .then((data) => {




        httpsh ://api.icndb.com


        http://api.icndb.com/jokes/random?firstName=John&amp;lastName=Doe
