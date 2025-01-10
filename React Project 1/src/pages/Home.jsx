import Moviecard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPopularMovies = async () => {
      setLoading(true);
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.error(err);
        setError("Failed to load popular movies");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setError("Search query cannot be empty");
      return;
      if (loading) return;
    }
    setLoading(true);
    setError(null);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch search results");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button" disabled={loading}>
          {loading ? "Loading..." : "Search"}
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {loading && <p>Loading movies...</p>}

      <div className="movies-grid">
        {!loading && movies.length > 0
          ? movies.map((movie) => <Moviecard movie={movie} key={movie.id} />)
          : !loading && <p>No movies found</p>}
      </div>
    </div>
  );
}

export default Home;
