import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./Search.svg";
import MovieCard from "./MovieCard";

// OMDB movie API key
// 949a38c
const API_URL = "http://www.omdb.com?api_key=949a38c";

// Initialize React component
const App = () => {
  //Gives access to setMovies function
  const { movies, setMovies } = useState([]);

  // Dynamically initialize the search EVENT
  const [searchTerm, setSearchTerm] = useState([]);
  // Async, takes a moment to fetch
  // Search movies by title
  const searchMovies = async (title) => {
    // Fetching movies from database by title
    // Calls API
    const response = await fetch(`${API_URL}&s=${title}`);
    // Get data
    const data = await response.json();
    // Gives us access to movies when Search is called
    setMovies(data.Search);
  };

  // SEARCH FOR MOVIES
  //1st: callback function
  //2nd: empty dependency array, if we ONLY want to call at start
  useEffect(() => {
    searchMovies(`we`);
  }, []);
  return (
    <div className="app">
      <h1>FlixLand</h1>

      {/*Search Bar*/}
      <div className="search">
        <input
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="Search"
          // On the click event, we are searching dynamically
          onClick={() => {}}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {/*MovieCard is import as a template for all movies*/}
          {/*Dynamically accessing movies from the API through map 
          and passing them 1 by 1 to the MovieCard for rendering*/}
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found..</h2>
        </div>
      )}
    </div>
  );
};

export default App;
