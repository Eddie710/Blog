import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

function LogoutButton() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <button id="Logout" onClick={handleLogout}>Logout</button>
  );
}

function NewUser() {
  const cloud_name = "dgq5ru9fd";
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    aboutYourself: "",
  });

  const inputsHandler = (e) => {
    setNewUser((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };

  const cloudHandler = (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append("upload_preset", 'Userimages');

    axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
      .then((res) => {
        const imageurl = res.data.secure_url;
        setNewUser((prevNext) => ({
          ...prevNext,
          imageURL: imageurl,
        }));
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users/create-user", newUser)
      .then((res) => {
        console.log(res.data);
        setNewUser({
          name: "",
          email: "",
          password: "",
          aboutYourself: "",
        });
      });
  };

  return (
    <div className="formContainer">
      <form onSubmit={onSubmit}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            name="name"
            placeholder="username"
            id="name"
            value={newUser.name}
            onChange={inputsHandler}
            required
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            id="email"
            value={newUser.email}
            onChange={inputsHandler}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            id="password"
            value={newUser.password}
            onChange={inputsHandler}
            required
          />
        </div>
        <div>
          <label>About Yourself: </label>
          <textarea
            type="text"
            name="aboutYourself"
            placeholder="I am..."
            id="aboutYourself"
            value={newUser.aboutYourself}
            onChange={inputsHandler}
          />
        </div>
        <div>
          <button type="submit" id="submitButton">
            Sign Up
          </button>
        </div><br />
        <div id="log-in-out-buttons">
            <div>
              <p>Already have an account?</p>
              <Link to={"/login"}>
                <button id="LoginLink">Login</button>
              </Link>
            </div>
            <div style={{"display":"flex", "justifyContent":"center", "alignItems":"center", "flexDirection":"column"}}>
              <p>Want to sign out?</p>
              <LogoutButton />
            </div>
        </div>
      </form>
    </div>
  );
}

export default NewUser;