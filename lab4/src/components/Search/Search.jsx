import { useState } from "react";

function Search({handleSearch}) {
  const search = document.getElementById("search")
const [searchValue, setSearchValue] = useState('')

  return (
    <div className="search">
      <img src="icons/Search.svg" alt="search" height="20" />
      <input
        id="search"
        type="text"
        placeholder="search"
        value={searchValue}
        onChange={e => {
          var searchInput = e.target.value.trim();
          handleSearch(searchInput);
          setSearchValue(searchInput)
        }}
        autoComplete="off"
      />
      <button className="clear_btn" type="button" onClick={() => {setSearchValue('')
    search.focus()}}>
        ✖
      </button>
    </div>
  );
}

export default Search;
