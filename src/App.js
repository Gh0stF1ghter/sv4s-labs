import "./App.css";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import MovieCard from "./components/MovieCard/MovieCard";

const API_SECRET_KEY = "apikey=609f836a";
const API_URL = "https://www.omdbapi.com/?";

const SEARCH_URL = API_URL + API_SECRET_KEY + "&s=";
const FULL_DATA_URL = API_URL + API_SECRET_KEY + "&i=";

function App() {
  const [fullResults, setFullResults] = useState();

  const handleSearch = async (searchInput) => {
    const response = await fetch(SEARCH_URL + searchInput);
    const results = await response.json();

    const searchResults = results.Search;

    if (searchResults) {
      let fullResult = [];
      for (let i = 0; i < searchResults.length; i++) {
        let fullData = await fetch(
          FULL_DATA_URL + searchResults[i].imdbID
        ).then((response) => response.json());

        fullResult[i] = fullData;
      }

      setFullResults(fullResult);
    } else setFullResults([]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Nav handleSearch={handleSearch} />
      </header>

      <main>
        <div class="movie_container" id="catalog">
          {fullResults ? (
            fullResults.map((result) => <MovieCard data={result} />)
          ) : (
            <h1 data-i18n="start">Just start typing</h1>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
