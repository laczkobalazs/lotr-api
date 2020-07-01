import React, { useContext } from "react";
import { BookContext } from "../api/BookContext";

const BookList = () => {
  const books = useContext(BookContext);
  let content = "";
  if (books) {
    content = books.map((book) => {
      return <div key={book._id}>{book.name}</div>;
    });
  }

  return (
    <div>
      <h1>Books</h1>
      <p>{content}</p>
    </div>
  );
};

export default BookList;
