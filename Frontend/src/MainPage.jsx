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
        <h3 style={{color: "white", fontSize: "30px"}}>Popular Blogs</h3>
        <div className="row2">
          <div className="blogContainer">
            <img className="blogImg" src="../public/stock.jpg" alt=" blog image" />
            <div className="contBottom">
              <b>Popular Blog #1</b>
              <p>Blog Author</p>
              <button className="cont-viewButton">Read more</button>
            </div>
          </div>
          <div className="blogContainer">
            <img className="blogImg" src="../public/stock.jpg" alt=" blog image" />
            <div className="contBottom">
              <b>Popular Blog #2</b>
              <p>Blog Author</p>
              <button className="cont-viewButton">Read more</button>
            </div>
          </div>
          <div className="blogContainer">
            <img className="blogImg" src="../public/stock.jpg" alt=" blog image" />
            <div className="contBottom">
              <b>Popular Blog #3</b>
              <p>Blog Author</p>
              <button className="cont-viewButton">Read more</button>
            </div>
          </div>
        </div>
        <div id="browseMore-buttonLink">
          <Link to={"/posted-blogs"}>
            <button id="moreButton">Browse More</button>
          </Link>
        </div>
      </main>
    </>
  );
}
