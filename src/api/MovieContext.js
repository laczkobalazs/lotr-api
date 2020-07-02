import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([]);

  const config = {
    headers: { Authorization: `Bearer REACT_API_KEY` },
  };

  useEffect(() => {
    axios
      .get("https://the-one-api.herokuapp.com/v1/movie", config)
      .then((response) => {
        setMovies(response.data.docs);
        console.log(movies);
      })
      .catch((err) => console.error(err));
  });

  return (
    <MovieContext.Provider value={movies}>
      {props.children}
    </MovieContext.Provider>
  );
};
