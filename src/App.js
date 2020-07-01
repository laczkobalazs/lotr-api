import React from "react";
import { BookProvider } from "./api/BookContext";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <BookProvider>
        <BookList />
      </BookProvider>
    </div>
  );
}

export default App;
