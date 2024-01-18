import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';

const API_SECRET_KEY = "apikey=609f836a";
const API_URL = "https://www.omdbapi.com/?";
const POSTER_API_URL = "http://img.omdbapi.com/?";

const SEARCH_URL = API_URL + API_SECRET_KEY + "&s=";
const FULL_DATA_URL = API_URL + API_SECRET_KEY + "&i=";

function App() {
  const handleSearch = async (searchInput) => {
    const response = await fetch(SEARCH_URL + searchInput);
    const data = await response.json();
  
    return data;  
  }


  return (
    <div className="App">
      <header className="App-header">
        <Nav handleSearch={handleSearch}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
