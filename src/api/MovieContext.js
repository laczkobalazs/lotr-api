import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([]);

  const config = {
    headers: { Authorization: `Bearer JFpvsjPAUwyKSPkb4PY1` },
  };

  // const bodyParameters = {
  //   key: "JFpvsjPAUwyKSPkb4PY1",
  // };

  useEffect(() => {
    axios
      .get("https://the-one-api.herokuapp.com/v1/movie", config)
      .then((response) => {
        setMovies(response.data);
        console.log(movies);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <MovieContext.Provider value={movies}>
      {props.children}
    </MovieContext.Provider>
  );
};
