import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#808080' }}>
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ color: 'white' }}>
          Rúbrica 1er corte
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: 'white' }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/content" style={{ color: 'white' }}>
                Content
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create" style={{ color: 'white' }}>
                Create
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
