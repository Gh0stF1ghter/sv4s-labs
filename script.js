const API_SECRET_KEY = "apikey=609f836a";
const API_URL = "https://www.omdbapi.com/?";
const POSTER_API_URL = "http://img.omdbapi.com/?";

const SEARCH_URL = API_URL + API_SECRET_KEY + "&s=";

function themeChange() {
  var themeChange = document.querySelector(".theme_button");

  const themeChangeElements = document.querySelectorAll(
    ".theme_button, .video_container, .movie_container, footer, a, .navbar, .lang"
  );

  themeChange.onclick = () => {
    var src = themeChange.getAttribute("src");
    if (src === "public/icons/Sun.svg") {
      themeChange.setAttribute("src", "public/icons/Moon.svg");
      themeChangeElements.forEach(element => {
        element.classList.add('dark');
      });

      document.documentElement.style.setProperty('background-color', '#191919');
    } else {
      themeChange.setAttribute("src", "public/icons/Sun.svg");
      themeChangeElements.forEach((element) => {
        element.classList.remove("dark");
      });

      document.documentElement.style.setProperty('background-color', '#E6E6E6');

    }
  };
}
// fetch('http://www.omdbapi.com/?i=tt3896198&apikey=609f836a')
//     .then((responce) => responce.json())
//     .then((movies) => console.log(movies))
//     .catch(error => console.log(error))

// Create a select element
// const select = document.createElement('select');

// // Create an array of options
// const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

// // Add each option to the select element
// options.forEach((option, index) => {
//   const optionElement = document.createElement('option');
//   optionElement.value = option;
//   optionElement.text = option;
//   select.add(optionElement);

//   // Add an event listener to each option
//   optionElement.addEventListener('click', () => {
//     // Remove the option from its current position
//     select.remove(index);

//     // Add the option to the beginning of the select element
//     select.add(optionElement, 0);
//   });
// });

// // Add the select element to the DOM
// document.body.appendChild(select);
