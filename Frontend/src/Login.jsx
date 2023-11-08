//Login.jsx
import React, { useState, useMemo } from "react";
import "./Login.css";
import axios from 'axios';
function Login() {
  const [loginInfo, setLoginInfo] = useState({
    name: "",
    password: ""
  });

  const isValid = true;

  const handleChange = (e) => {
    setLoginInfo(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const [formData, setFormData] = useState('');
  const handleSubmit =(event)=>{
    event.preventDefault();
    axios
      .post("http://localhost:3000/users/login", loginInfo)
      .then(res => {
        if (res.data.data != 'Incorrect Password') {
          localStorage.setItem('accLoggedInto',JSON.stringify(res.data.data[0]))
          window.location.pathname = '/';
        } else {
          window.location.reload()
          console.log(res.data.data);
          
        }
        
      })
  }
  return (
    <div className="LoginForm-container">
      <form className="LoginForm" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <label htmlFor="name">Username: </label>
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
            placeholder="********"
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
        <h4>Don't have an account?</h4>
        <p>Sign up <a href="/signup" style={{textDecoration:'none'}}>Here!</a></p>
      </form>
    </div>
  );
}

export default Login;