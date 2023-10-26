import React, { Component } from "react";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      dateOfBirth: "",
      email: "",
      password: "",
      verifyPassword: "",
      profilePicture: null,
      aboutYourself: "",
    };
  }
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleImageChange = (event) => {
    this.setState({
      profilePicture: event.target.files[0],
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", this.state);
  };
  render() {
    return (
      <div class="formContainer">
        <form onSubmit={this.handleSubmit}>
          <h2>Sign Up</h2>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={this.state.dateOfBirth}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="verifyPassword">Verify Password:</label>
            <input
              type="password"
              id="verifyPassword"
              name="verifyPassword"
              value={this.state.verifyPassword}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            
          </div>
          <div>
            <label htmlFor="aboutYourself">About Yourself (optional):</label>
            <textarea
              id="aboutYourself"
              name="aboutYourself"
              value={this.state.aboutYourself}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <button type="submit">Sign Up</button>
            {/* <button type="reset">Reset</button> */}
          </div>
        </form>
      </div>
    );
  }
}
export default SignupForm;
