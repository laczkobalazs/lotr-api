import React from "react";
import { BookProvider } from "./api/BookContext";
import BookList from "./components/BookList";
import { MovieProvider } from "./api/MovieContext";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { ContentContainer } from "./style/GlobalStyle";

function App() {
  return (
    <div className="App">
      <Router>
        <BookProvider>
          <MovieProvider>
            <Navbar />
            <ContentContainer>
              <BookList />
              <MovieList />
            </ContentContainer>
          </MovieProvider>
        </BookProvider>
      </Router>
    </div>
  );
}

export default App;
