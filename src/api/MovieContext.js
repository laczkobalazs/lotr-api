import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const token = process.env.REACT_APP_KEY;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get("https://the-one-api.herokuapp.com/v1/movie", config)
      .then((response) => {
        setMovies(response.data.docs);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <MovieContext.Provider value={movies}>
      {props.children}
    </MovieContext.Provider>
  );
};
