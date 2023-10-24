import React from "react";
import { Route, Routes, Link } from 'react-router-dom';
import NewLetter from '../src/componets/Newsletter'
export default function MainPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("");
  };
  return (
    <main>
      <div className="topRow">
        <div className="popular, padding20">
          <span>
            Most Liked Blog or, Most Viewed or, Recently Added, Maybe a way to
            select, or its a slideshow that showcases them.
          </span>
        </div>
      </div>
      <div className="newsLetter">
        <span>
          Newsletter to sign recommend users to sign up if not signed in.
        </span>
        <div>
          <p>Join the Newsletter!</p>
          <Link to={"/create-post"} className="nav-link">
           Sign Up
          </Link> 
          </div>
      </div>
      <div className="row2">
        <div className="blogContainer">
          <img className="blogImg" src="..." alt=" blog image" />
          <div className="contBottom">
            <p>Blog Name:</p>
            <button className="cont-viewButton">View</button>
          </div>
        </div>
        <div className="blogContainer">
          <img className="blogImg" src="..." alt=" blog image" />
          <div className="contBottom">
            <p>Blog Name:</p>
            <button className="cont-viewButton">View</button>
          </div>
        </div>
        <div className="blogContainer">
          <img className="blogImg" src="..." alt=" blog image" />
          <div className="contBottom">
            <p>Blog Name:</p>
            <button className="cont-viewButton">View</button>
          </div>
        </div>
      </div>
      <div id="browseMore-buttonLink">
        <a href="#" target="_blank">
          <button id="browseButton">Browse More...</button>
        </a>
      </div>
      
    </main>
  );
}
