import React from "react";

function Search() {
  return (
    <div className="search">
      <img src="public/icons/Search.svg" alt="search" height="20" />
      <input id="search" type="text" placeholder="search" autocomplete="off" />
      <button className="clear_btn" type="button">
        ✖
      </button>
    </div>
  );
}

export default Search;
