//SignUp.jsx

import React, { useEffect, useState, useMemo } from "react";

import { Link } from 'react-router-dom';
import axios from "axios";
import bcrypt from 'bcryptjs';

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

  const onSubmit = async(e) => {
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

  useEffect(() => {
    
  }, [])

  return (
    <div className="formContainer">
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="blogName">Name: </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            id="name"
            onChange={inputsHandler}
            required
          />
        </div>
        <div>
          <label htmlFor="blogName">Email: </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            id="email"
            onChange={inputsHandler}
            required
          />
        </div>
        <div>
          <label htmlFor="blogName">Password: </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            id="password"
            onChange={inputsHandler}
            required
          />
        </div>
        <div>
          <label htmlFor="blogName">About Yourself: </label>
          <textarea
            type="text"
            name="aboutYourself"
            placeholder="I am..."
            id="aboutYourself"
            onChange={inputsHandler}
          />
        </div>
        <div>
        <button type="submit">
            Submit
          </button>
          {/* <button type="reset">Reset</button> */}
        </div>
        <p>Already have an account?</p>
        <Link to={"/login"}>
          <button id="LoginLink">Login</button>
        </Link>
      </form>
    </div>
  );
}

export default NewUser;
