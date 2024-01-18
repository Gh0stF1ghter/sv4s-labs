import React, { useEffect, useState } from "react";
import Search from "../Search/Search";

function Nav({ handleSearch }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [lang, setLang] = useState(localStorage.getItem("lang"));

  useEffect(() => {
    const themeChange = document.getElementById("theme_button");

    const themeChangeElements = document.querySelectorAll(
      ".theme_button, .video_container, .movie_container, footer, a, .navbar, .lang"
    );

    const toDark = () => {
      themeChange.setAttribute("src", `icons/Moon.svg`);
      themeChangeElements.forEach((element) => {
        element.classList.add("dark");
      });
      document.documentElement.style.setProperty("background-color", "#191919");
    };

    const toLight = () => {
      themeChange.setAttribute("src", "icons/Sun.svg");

      themeChangeElements.forEach((element) => {
        element.classList.remove("dark");
      });
      document.documentElement.style.setProperty("background-color", "#E6E6E6");
    };

    if (theme === "dark") toDark();
    else toLight();
  }, [theme]);

  useEffect(() => {
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
      langChange.setAttribute("src", `icons/${lang}-flag.svg`);

      localStorage.setItem("lang", lang);
    }

    if (lang == null) setLang("en");

    langChange.setAttribute("data-i18n", lang);
    Translate(lang);
  }, [lang]);

  return (
    <div className="navbar">
      <div>
        <Search handleSearch={handleSearch} />
        <div className="line"></div>
        <span>OMDB API</span>
      </div>
      <div>
        <div>
          <img
            className="switch"
            id="theme_button"
            src="icons/Sun.svg"
            alt="theme"
            height="20"
            onClick={() => {
              if (theme === "dark") {
                localStorage.setItem("theme", "light");
                setTheme("light");
              } else {
                localStorage.setItem("theme", "dark");
                setTheme("dark");
              }
            }}
          />
        </div>
        <div className="line"></div>
        <div className="switch">
          <img
            id="lang_button"
            onClick={() => {
              if (lang === "en") setLang("ru");
              else setLang("en");
            }}
            data-i18n="en"
            src="icons/en-flag.svg"
            alt="lang"
            height="20"
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
