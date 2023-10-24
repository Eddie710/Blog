import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <img src="logo" alt="foodEaze logo" id="foodEaze-logo" />
      <Link to={"/"} className="nav-link">
           Home
        </Link> 
      <Link to={"/post-page"} className="nav-link">
           Create Post
      </Link>
    </nav>
  </header>
);

export default Header;


