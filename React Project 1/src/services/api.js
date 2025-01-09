
// const API_KEY = fdaf55a752071714490ab1489d84b5d5;
// const BASE_URL = "https://api.themoviedb.org/3"

// export const getPopularMovies = async ()=> {
//     const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
//     const data = await response.json()
//     return data.results
// }

// export const searchMovies = async (query)=> {
//     const response = await fetch(`${BASE_URL}/movie/search?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
//     const data = await response.json()
//     return data.results
// }

const API_KEY = "fdaf55a752071714490ab1489d84b5d5"; // Replace with your actual API key
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error("Failed to fetch popular movies");
  }
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch search results");
  }
  const data = await response.json();
  return data.results;
};
