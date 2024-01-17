import React from "react";
import Search from "../Search/Search";

function Nav() {
  return (
    <div className="navbar">
      <div>
        <Search/>
        <div className="line"></div>
        <span>OMDB API</span>
      </div>
      <div>
        <div>
          <img
            className="switch"
            id="theme_button"
            src="public/icons/Sun.svg"
            alt="theme"
            height="20"
            onclick="themeChange()"
          />
        </div>
        <div className="line"></div>
        <div className="switch">
          <img
            id="lang_button"
            onclick="Translate()"
            data-i18n="en"
            src="public/icons/en-flag.svg"
            alt="lang"
            height="20"
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
