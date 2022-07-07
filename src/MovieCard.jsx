import React from "react";

// movie is a prop
const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      {/*div: nth-of-type 1*/}
      <div>
        <p>{movie.Year}</p>
      </div>

      {/*div: nth-of-type 2*/}
      <div>
        {/*Placeholder if API does not provide images */}
        {/*'N/A' is how the API determines if a movie has a poster*/}
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "http://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>

      {/*Bottom border of movie card*/}
      {/*div: nth-of-type 3*/}
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
