import Moviecard from "./components/MovieCard";
import "./css/App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Favorite from "./pages/Favorites";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./context/MovieContext";
function App() {
  return (
    <div>
      <MovieProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorite />} />
          </Routes>
        </main>
      </MovieProvider>
    </div>
  );
}

export default App;
