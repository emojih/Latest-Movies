import { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const isFavorite = (id) => favorites.some((movie) => movie.id === id);

  const addToFavorites = (movie) => {
    if (!isFavorite(movie.id)) {
      setFavorites((prev) => [...prev, movie]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== id));
  };

  return (
    <MovieContext.Provider
      value={{ favorites, isFavorite, addToFavorites, removeFromFavorites }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  return useContext(MovieContext);
};
