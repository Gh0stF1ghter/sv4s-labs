import "./App.css";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cameras from "./pages/Cameras";
import Doors from "./pages/Doors";
import Entrance from "./pages/Entrance";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
      <div className="main">
        <div className="gradient" />
      </div>

      <main className="app">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cctv" element={<Cameras />} />
            <Route path="/doorSec" element={<Doors />} />
            <Route path="/entranceSec" element={<Entrance />} />
            <Route path="*" element={<NoPage/>} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
