//Header.jsx
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
            <li className="nav-item"><Link to={"/"} className="nav-link">Home <i class="bi bi-house"></i></Link></li>
            <li><Link to={"/post-page"} className="nav-link">Create Post <i class="bi bi-file-earmark-plus"></i></Link></li>
            <li><Link to={"/posted-blogs"} className="nav-link">Browse Blogs <i class="bi bi-eye"></i></Link></li>
            <li><Link to={"/signup"} className="nav-link">Sign Up <i class="bi bi-person-plus"></i></Link></li>
            <li><Link to={"/login"} className="nav-link">Login <i class="bi bi-box-arrow-in-right"></i></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;