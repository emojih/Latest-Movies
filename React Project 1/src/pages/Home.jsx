import Moviecard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 1, title: "Terminator", release_date: "1999" },
    { id: 1, title: "The Matrix", release_date: "1996" },
  ];

  const handleSearch = () => {};

  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
        />
        <button type="submit" className="search-button"></button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <Moviecard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
