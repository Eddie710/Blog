import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <img src="./foodeaze_logo.png" alt="foodEaze logo" id="foodEaze-logo" />
      <Link to={"/"} className="nav-link">
           Home
        </Link> 
      <Link to={"/post-page"} className="nav-link">
           Create Post
      </Link>
      <Link to={"/posted-blogs"} className="nav-link">
            Browse Blogs
      </Link>
    </nav>
  </header>
);

export default Header;