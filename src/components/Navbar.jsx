// src/components/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" className="navbar-logo">Intershipstore</NavLink>
      </div>
      <ul className="nav-menu">
        <li>
          <NavLink to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" className="nav-link" activeClassName="active">
            Catalog
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className="nav-link" activeClassName="active">
            Favorites
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="nav-link" activeClassName="active">
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
