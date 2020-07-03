import React from "react";
import { Link } from "react-router-dom";
import { StyledNavbar } from "../style/NavbarStyle";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to="/">Home</Link>
      <Link to="/books">Books</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </StyledNavbar>
  );
};

export default Navbar;
