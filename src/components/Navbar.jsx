// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';

// Navbar - Основное меню навигации
function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <Link to='/'>Intershipstore</Link>
      </div>
      <ul className='nav-menu'>
        <li><Link to='/catalog'>Catalog</Link></li>
        <li><Link to='/cart'>Cart</Link></li>
        <li><Link to='/auth'>Login / Register</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
