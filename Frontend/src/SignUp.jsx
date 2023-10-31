import React, { useEffect, useState } from "react";
import axios from "axios";

function NewUser() {
  const cloud_name="dgq5ru9fd"
  const [newUser, setNewUser] = useState({
      name: "",
      dob: "",
      email: "",
      password: "",
      verifyPassword: "",
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
        newUser.imageURL=imageurl
          setImage(imageurl)
 
      })      
  }
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users/create-user", newUser)
      .then((res) => {
        console.log(res.data);
        setNewUser({
          name: "",
          dob: "",
          email: "",
          password: "",
          verifyPassword: "",
          aboutYourself: ""
        });
      });
  };
  

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
                value={newUser.name}
                onChange={inputsHandler}
                required />
            </div>
            <div>
                <label htmlFor="blogName">Date of Birth: </label>
                <input 
                type="text"
                name="dob"
                placeholder="dob" 
                id="dob"
                value={newUser.dob}
                onChange={inputsHandler}
                required />
            </div>
            <div>
                <label htmlFor="blogName">Email: </label>
                <input 
                type="email"
                name="email"
                placeholder="email" 
                id="email"
                value={newUser.email}
                onChange={inputsHandler}
                required />
            </div>
            <div>
                <label htmlFor="blogName">Password: </label>
                <input 
                type="password"
                name="password"
                placeholder="blog name" 
                id="password"
                value={newUser.password}
                onChange={inputsHandler}
                required />
            </div>
            <div>
                <label htmlFor="blogName">Verify Password: </label>
                <input 
                type="text"
                name="verifyPassword"
                placeholder="blog name" 
                id="verifyPassword"
                value={newUser.verifyPassword}
                onChange={inputsHandler}
                required />
            </div>
            <div>
                <label htmlFor="blogName">About Yourself: </label>
                <input
                type="text"
                name="aboutYourself"
                placeholder="blog name" 
                id="aboutYourself"
                value={newUser.aboutYourself}
                onChange={inputsHandler}
                required />
            </div>
          <div>
            <button type="submit">Sign Up</button>
            {/* <button type="reset">Reset</button> */}
          </div>
        </form>
      </div>
    );
    };
export default NewUser;
