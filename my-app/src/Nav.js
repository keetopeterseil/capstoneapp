import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav aria-label="Main navigation">
      <ul role="menubar">
        <li role="none">
          <Link to="/" role="menuitem" aria-label="Navigate to homepage">
            Home
          </Link>
        </li>
        <li role="none">
          <Link to="/about" role="menuitem" aria-label="Navigate to about page">
            About
          </Link>
        </li>
        <li role="none">
          <Link to="/menu" role="menuitem" aria-label="Navigate to menu page">
            Menu
          </Link>
        </li>
        <li role="none">
          <Link to="/reservations" role="menuitem" aria-label="Navigate to reservations page">
            Reservations
          </Link>
        </li>
        <li role="none">
          <Link to="/order" role="menuitem" aria-label="Navigate to order online page">
            Order Online
          </Link>
        </li>
        <li role="none">
          <Link to="/login" role="menuitem" aria-label="Navigate to login page">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;