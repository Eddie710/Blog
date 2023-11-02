//Login.jsx
import React, { useState, useMemo } from "react";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const isValid = useMemo(() => {
    return username.length >= 3 && password.length >= 3;
  }, [username, password]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
      setUsernameError(value.length < 3 ? "Username must have at least 3 characters" : "");
    } else if (name === "password") {
      setPassword(value);
      setPasswordError(value.length < 3 ? "Password must have at least 3 characters" : "");
    }
  };

  return (
    <div className="LoginForm-container">
      <form className="LoginForm">
        <h1>Login</h1>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChange}
            value={username}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            placeholder="****"
            onChange={handleChange}
            value={password}
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