import React, { useContext } from "react";
import { BookProvider, BookContext } from "./api/BookContext";

function App() {
  const book = useContext(BookContext);

  return (
    <div className="App">
      <BookProvider>
        <h1>{book}</h1>
      </BookProvider>
    </div>
  );
}

export default App;
