import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import './Navigation.css'; // Import your CSS file

function Navigation() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-link" activeClassName="active-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link" activeClassName="active-link">About</NavLink>
        </li>
        <li>
          <NavLink to="/resume" className="nav-link" activeClassName="active-link">Resume</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className="nav-link" activeClassName="active-link">Portfolio</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;