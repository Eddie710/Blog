//Login.jsx
import React, { useState, useMemo } from "react";
import "./Login.css";
import axios from 'axios';

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    name: "",
    password: ""
  });
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const isValid = true;
  // const isValid = useMemo(() => {
  //   console.log(document.getElementById("username"))
  //   return document.getElementById("username").value >= 3 && document.getElementById("password").value >= 3;
  // }, [loginInfo]);

  const handleChange = (e) => {
    setLoginInfo(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const handleSubmit =(event)=>{
    event.preventDefault();
    axios
      .post("http://localhost:3000/users/login", loginInfo)
      .then(res => {
        if (res.data.data != 'Incorrect Password') {
          localStorage.setItem('accLoggedInto',JSON.stringify(res.data.data[0]))
        } else {
          console.log(res.data.data);
          // if passwords incorrect
        }
        
      })

  }
  return (
    <div className="LoginForm-container">
      <form className="LoginForm" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="***"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" 
          className={isValid ? 'valid-button' : 'invalid-button'}
          disabled={!isValid}>
            {isValid ? "Login" : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;