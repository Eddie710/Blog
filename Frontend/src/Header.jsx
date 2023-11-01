import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <h3 id="foodEaze-text">FoodEaze</h3>
        <div className="collapse navbar-collapse items-container" id="navbarTogglerDemo03">
          <img src="./foodeaze_logo.png" alt="foodEaze logo" id="foodEaze-logo" />
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link to={"/"} className="nav-link">Home</Link></li>
            <li><Link to={"/post-page"} className="nav-link">Create Post</Link></li>
            <li><Link to={"/posted-blogs"} className="nav-link">Browse Blogs</Link></li>
            <li><Link to={"/signup"} className="nav-link">Sign Up</Link></li>
            <li><Link to={"/login"} className="nav-link">Login</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;