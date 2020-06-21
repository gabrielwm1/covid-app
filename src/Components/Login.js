import React, { Component } from 'react';
import '../styles.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <form className="col-md-3 offset-md-4 mt-5 d-flex align-items-center">
          <div className="container">
            <input
              className="container-fluid"
              id="txtEmail"
              type="email"
              placeholder="Email"
            ></input>
            <input
              className="container-fluid"
              id="txtPassword"
              type="password"
              placeholder="password"
            ></input>
            <button
              id="btnLogin"
              className="btn btn-action container-fluid login-button"
              onClick={this.handleClick}
            >
              Log In
            </button>
            <button
              id="btnSignUp"
              className="btn btn-secondary container-fluid"
            >
              Sign Up
            </button>
            <button
              id="btnLogout"
              className="btn btn-action hide container-fluid logout-button"
            >
              Log out
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
