//MainPage.jsx
import React from "react";
import { Route, Routes, Link } from 'react-router-dom';

export default function MainPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("");
  };
  return (
    <>
      <div className="headerBanner">
        <img className="headImg" src="../public/header.png" />
      </div>
      <main>
        <div className="topRow">
            <div className="popular">
              <div>
                <h3>FoodEaze</h3>
                <p>Welcome to <b>FoodEaze</b>, your one-stop destination for all things delicious in Arizona! Here, you can easily share your culinary adventures by uploading blog posts about restaurants across the Grand Canyon State. Join our community of food enthusiasts and let your taste buds guide the way. Discover, savor, and share the flavors of Arizona on FoodEaze!</p>
              </div>
            </div>
            <div className="newsLetter">
              <b>Join the Newsletter!</b>
              <p>
                Interested in receiving news letters via email? Click below to sign up!
              </p>
              <div><Link to={"/newsletter"}>Sign Up</Link></div>
            </div>
        </div>
        <div id="browseMore-buttonLink">
          <Link to={"/posted-blogs"}>
            <button id="moreButton">Browse Blogs</button>
          </Link>
        </div>
      </main>
    </>
  );
}
