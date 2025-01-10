import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import Moviecard from "../components/MovieCard";

function Favorite() {
  const { favorites } = useMovieContext();

  if (!favorites.length) {
    return (
      <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favorites and they will appear here</p>
      </div>
    );
  }

  return (
    <div className="favorites">
      <h2>Your Favorites</h2>
      <div className="movies-grid">
        {favorites.map((movie) => (
          <Moviecard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Favorite;
