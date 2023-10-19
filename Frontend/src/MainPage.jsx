import React from "react";
export default function MainPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("");
  };
  return (
    <main>
      <div className="topRow">
        <div className="popular">
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
        <form action="/users" method="POST" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <button type="submit">Submit</button>
        </form>
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
          <button>Browse More...</button>
        </a>
      </div>
    </main>
  );
}
