const API_SECRET_KEY = "apikey=609f836a";
const API_URL = "https://www.omdbapi.com/?";
const POSTER_API_URL = "http://img.omdbapi.com/?";

const SEARCH_URL = API_URL + API_SECRET_KEY + "&s=";
const FULL_DATA_URL = API_URL + API_SECRET_KEY + "&i=";

const search = document.getElementById("search");
const catalog = document.getElementById("catalog");

async function getResultsBySearch(searchInput) {
  const response = await fetch(SEARCH_URL + searchInput);
  const data = await response.json();

  return data;
}

search.addEventListener("change", async (e) => {
  var searchInput = e.target.value.trim();
  if (searchInput) {
    const results = await getResultsBySearch(searchInput);
    await showResults(results);
  }
});

async function showResults(data) {
  catalog.innerHTML = "";

  if (data.Response == "False") {
    console.log("Not found CAUGHT");
    const notFound = document.createElement("h1");
    notFound.textContent = "Not found";
    catalog.appendChild(notFound);
    return;
  }

  const results = data.Search;

  for (var i = 0; i < results.length; i++) {
    let fullData = await fetch(FULL_DATA_URL + results[i].imdbID).then(
      (response) => response.json()
    );
    let movieCard = document.createElement("div");
    movieCard.classList.add("movie_card");

    let moviePoster = fullData.Poster;
    if (moviePoster == "N/A") {
      moviePoster = '/public/media/not_found.jpg'
    }

    movieCard.innerHTML = `
      <div class="movie_cover">
      <span class="rating">${fullData.imdbRating}</span>
      <img class="movie_cover" src="${moviePoster}" />
    </div>
    <span class="description"> ${fullData.Plot} </span>
    `;
    catalog.appendChild(movieCard);
  }

  console.log(results);
}

function ClearSearch() {
  search.value = ''
  search.focus()
}

themeChange();
switchLanguage();

const playButton = document.getElementById('play_btn')
const video = document.getElementById('video_exmpl')
function Play() {
  if (video.paused) {
    video.play()
    playButton.textContent = 'pause';
  }
  else {
    video.pause()
    playButton.textContent = 'play';
  }

}

function switchLanguage() {
  const langChange = document.getElementById("lang_button");

  function Translate(lang) {
    const i18nDictionary = {
      en: {
        start: "Just start typing",
        Github: "Github Repo",
      },
      ru: {
        start: "Просто начните искать",
        Github: "Репозиторий",
      },
    };

    const elementsToTranslate = document.querySelectorAll("[data-i18n]");

    if (lang != null)
      elementsToTranslate.forEach((element) => {
        element.textContent = i18nDictionary[lang][element.dataset.i18n];
      });
    langChange.setAttribute("src", `public/icons/${lang}-flag.svg`);

    localStorage.setItem("lang", lang);
  }

  let lang = localStorage.getItem("lang");

  if (lang == null) lang = "en";

  langChange.setAttribute("data-i18n", lang);

  Translate(lang);

  langChange.onclick = () => {
    let lang = langChange.getAttribute("data-i18n");

    if (lang === "en") {
      langChange.setAttribute("data-i18n", "ru");
      lang = "ru";
    } else {
      langChange.setAttribute("data-i18n", "en");
      lang = "en";
    }
    Translate(lang);
  };
}

function themeChange() {
  const themeChange = document.getElementById("theme_button");

  const themeChangeElements = document.querySelectorAll(
    ".theme_button, .video_container, .movie_container, footer, a, .navbar, .lang"
  );

  var src = themeChange.getAttribute("src");

  var toDark = () => {
    themeChange.setAttribute("src", "public/icons/Moon.svg");
    themeChangeElements.forEach((element) => {
      element.classList.add("dark");
    });
    document.documentElement.style.setProperty("background-color", "#191919");
    document.getElementById("svg").style.setProperty("fill", "#fff");
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
