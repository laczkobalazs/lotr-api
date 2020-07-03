import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState();

  const token = process.env.REACT_API_KEY;
  console.log(process.env);

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    axios
      .get("https://the-one-api.herokuapp.com/v1/movie", config)
      .then((response) => {
        setMovies(response.data.docs);
      })
      .catch((err) => console.error(err));
  });

  return (
    <MovieContext.Provider value={movies}>
      {props.children}
    </MovieContext.Provider>
  );
};
