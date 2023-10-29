
fetch('http://www.omdbapi.com/?i=tt3896198&apikey=609f836a')
    .then((responce) => responce.json())
    .then((movies) => console.log(movies))
    .catch(error => console.log(error));