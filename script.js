const API_SECRET_KEY = "apikey=609f836a";
const API_URL = "https://www.omdbapi.com/?";
const POSTER_API_URL = "http://img.omdbapi.com/?";

const SEARCH_URL = API_URL + API_SECRET_KEY + "&s=";


themeChange()
switchLanguage()

function switchLanguage() {
  const langChange = document.getElementById("lang_button");

  function Translate(lang) {

    const i18nDictionary = {
      'en': {
        'Github': 'Github Repo'
      },
      'ru': {
        'Github': 'Репозиторий'
      }
    }
  
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
  
    if (lang != null)
      elementsToTranslate.forEach(element => {
        element.textContent = i18nDictionary[lang][element.dataset.i18n]
      });
      langChange.setAttribute('src', `public/icons/${lang}-flag.svg`);

    localStorage.setItem('lang', lang);
  }
  

  let lang = localStorage.getItem('lang');

  if (lang == null)
    lang = 'en';

  langChange.setAttribute('data-i18n', lang);

  Translate(lang);

  langChange.onclick = () => {
    let lang = langChange.getAttribute("data-i18n");

    if (lang === 'en') {
      langChange.setAttribute('data-i18n', 'ru');
      lang = 'ru'
    } else {
      langChange.setAttribute('data-i18n', 'en');
      lang = 'en'
    }
        Translate(lang);
  }
}

function themeChange() {
  const themeChange = document.getElementById("theme_button");

  const themeChangeElements = document.querySelectorAll(
    ".theme_button, .video_container, .movie_container, footer, a, .navbar, .lang"
  );

  var src = themeChange.getAttribute("src");

  var toDark = () => {
    themeChange.setAttribute('src', "public/icons/Moon.svg");
    themeChangeElements.forEach((element) => {
      element.classList.add("dark");
    });
    document.documentElement.style.setProperty("background-color", "#191919");
    document.getElementById("svg").style.setProperty("fill", '#fff');
  };

  if (localStorage.getItem("theme") === "dark") toDark();

  var toLight = () => {
    themeChange.setAttribute("src", "public/icons/Sun.svg");

    themeChangeElements.forEach((element) => {
      element.classList.remove("dark");
    });
    document.documentElement.style.setProperty("background-color", "#E6E6E6");
  };

  themeChange.onclick = () => {
    var src = themeChange.getAttribute("src");

    if (src === "public/icons/Sun.svg") {
      toDark();
      localStorage.setItem("theme", "dark");
    } else {
      toLight();
      localStorage.setItem("theme", "light");
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
