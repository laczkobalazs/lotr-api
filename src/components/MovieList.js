import React, { useContext } from "react";
import { MovieContext } from "../api/MovieContext";

const MovieList = () => {
  const movies = useContext(MovieContext);
  let content = "";
  if (movies) {
    console.log(movies);
    content = movies.map((movie) => {
      return <div key={movie._id}>{movie.name}</div>;
    });
  }

  return (
    <div>
      <h1>Movies</h1>
      <div>{content}</div>
    </div>
  );
};

export default MovieList;
