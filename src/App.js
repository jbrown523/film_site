import {useEffect} from 'react';

import "./App.css";
import SearchIcon from "./Search.svg";

// OMDB movie API key
// 949a38c
const API_URL = 'http://www.omdb.com?api_key=949a38c';

// Static Moive
const movie1 = {
     "Title": "Blade: Part 3 - SunBorn",
     "Year": "2009",
     "imbID": "tt2586634",
     "Type": "movie",
     "Poster": "N/A"
}

// Initialize React component
const App = () => {

     // Async, takes a moment to fetch
     // Search movies by title
     const searchMovies = async (title) => { 
          // Fetching movies from database by title
          // Calls API
          const response = await fetch(`${API_URL}&s=${title}`);
          // Get data
          const data = await response.json();
          //
          console.log(data.Search);

     }

     // SEARCH FOR MOVIES
     //1st: callback function
     //2nd: empty dependency array, if we ONLY want to call at start
     useEffect(() => { 
          searchMovies(``);
     }, []);
     return (
          <div className="app">
               <h1>FlixLand</h1>

               {/*Search Bar*/}
               <div className="search">
                    <input
                         placeholder="Search"
                         value=""
                         onChange={() => { } }
                    />
                    <img
                         src={SearchIcon}
                         alt="Search"
                         onClick={() => { }}
                    />
               </div>

               {/*Movie container*/} 
               <div className='container'>
                    <div className="movie">
                         {/*div: nth-of-type 1*/}
                         <div>
                              <p>
                                   {movie1.Year}
                              </p>
                         </div>

                         {/*div: nth-of-type 2*/}
                         <div>
                              {/*Placeholder if API does not provide images */}
                              {/*'N/A' is how the API determines if a movie has a poster*/}
                              <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'http://via.placeholder.com/400'}
                                   alt={movie1.Title} />
                         </div>

                         {/*Bottom border of movie card*/}
                         {/*div: nth-of-type 3*/}
                         <div>
                              <span>{movie1.Type}</span>
                              <h3>{ movie1.Title}</h3>
                         </div>

                    </div>
               </div>
          </div>
     );
}

export default App;