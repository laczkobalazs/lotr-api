import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BookContext = createContext();

export const BookProvider = (props) => {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://the-one-api.herokuapp.com/v1/book")
      .then((response) => {
        setbooks(response.data.docs);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <BookContext.Provider value={books}>{props.children}</BookContext.Provider>
  );
};
