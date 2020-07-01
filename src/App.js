import React from "react";
import { BookProvider } from "./api/BookContext";
import BookList from "./components/BookList";
import { MovieProvider } from "./api/MovieContext";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <BookProvider>
        <MovieProvider>
          <BookList />
          <MovieList />
        </MovieProvider>
      </BookProvider>
    </div>
  );
}

export default App;
