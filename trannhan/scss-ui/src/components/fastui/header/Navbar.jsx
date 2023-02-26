import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="menu__list">
        <li className="menu__item">
          <Link className="menu__link">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
