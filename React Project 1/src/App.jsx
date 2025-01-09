import Moviecard from "./components/MovieCard";
import "./css/App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Favorite from "./pages/Favorites";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
