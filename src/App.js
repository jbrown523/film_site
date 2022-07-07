import {useEffect} from 'react';

// OMDB movie API key
// 949a38c
const API_URL = 'http://www.omdb.com?api_key=949a38c';

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

     //1st: callback function
     //2nd: empty dependency array, if we ONLY want to call at start
     useEffect(() => { 
          searchMovies(`Thor`);
     }, []);
     return (
          <h1>App</h1>
     );
}

export default App;