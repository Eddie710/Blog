//Footer.jsx
import React from 'react';
const Footer = () => (
  <footer>
    <p><b>© 2023 <a href="https://github.com/Eddie710?tab=repositories" style={{textDecoration:'none'}} target='_blank'>Eddie</a> & <a href="https://github.com/amekhail733?tab=repositories" style={{textDecoration:'none'}} target='_blank'>Andrew</a> (OnyxIndustries)</b>. All rights reserved.</p>
    <div className="foot-columns">
      <div className="Socials">
        <h3>Social Media</h3>
        <p><a href="#"><i className="bi bi-instagram"></i> @foodeaze</a></p>
        <p><a href="#"><i className="bi bi-facebook"></i> FoodEaze</a></p>
        <p><a href="#"><i className="bi bi-twitter"></i><i className="bi bi-twitter-x"></i> @foodeazereviews</a></p>
        <p><a href="#"><i className="bi bi-youtube"></i> FoodEaze Reviews</a></p>
        <p><a href="https://github.com/Eddie710/Blog" target='_blank'><i className="bi bi-github"></i> FoodEaze</a></p>
      </div>
      <div>
        <h3>Quick Links</h3>
        <div className="footerLinksList">
          <p><a href="/">Home</a></p>
          <p><a href="post-page">Create Post</a></p>
          <p><a href="posted-blogs">Browse Posts</a></p>
          <p><a href="signup">Sign Up/Register</a></p>
          <p><a href="login">Login</a></p>
          <p><a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSeXjn56K3l1NUs3sGqmoRia6pbP99Tt9dwtJB8lZGUvrGdgjw/viewform?usp=sf_link">Report an issue</a></p>
        </div>
      </div>
      <div>
        <h3>About FoodEaze</h3>
        <hr />
        <p>Foodeaze is under copyright with the <b><i>OnyxIndustries Productions.</i></b> All rights reserved. FoodEaze was created by 2 WestMEC students October, 2023.</p>
      </div>
    </div>
  </footer>
);

export default Footer;