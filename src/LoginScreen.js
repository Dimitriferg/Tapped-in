import React, { Component } from "react";
import $ from "jquery";
// import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase/compat/app";
import { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
// import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import app from "./firebase";
import "./App.scss";
import Home from "./Home";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginModal: false,
      showSignupModal: false,
      signupEmail: "",
      signupPassword: "",
      loginEmail: "",
      loginPassword: "",
      user: null,
      fireErrors: "",
      login: "",
      signup: "",
    };
    this.openSignupModal = this.openSignupModal.bind(this);
    this.closeSignupModal = this.closeSignupModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.openLoginModal = this.openLoginModal.bind(this);
    this.signupEmail = this.signupEmail.bind(this);
    this.signupPassword = this.signupPassword.bind(this);
    this.loginEmail = this.loginEmail.bind(this);
    this.loginPassword = this.loginPassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user,
        });
      } else {
        this.setState({
          user: null,
        });
      }
    });
  }

  openSignupModal() {
    this.setState({
      showSignupModal: true,
    });
  }

  closeSignupModal() {
    this.setState({
      showSignupModal: false,
    });
  }

  openLoginModal() {
    this.setState({
      showLoginModal: true,
    });
  }

  closeLoginModal() {
    this.setState({
      showLoginModal: false,
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  login = (e) => {
    app
      .auth()
      .signInWithEmailAndPassword(
        this.state.loginEmail,
        this.state.loginPassword
      )
      .catch((error) => {
        this.setState({ fireErrors: error.message });
      });
  };

  signup = (e) => {
    app
      .auth()
      .createUserWithEmailAndPassword(
        this.state.signupEmail,
        this.state.signupPassword
      )
      .catch((error) => {
        this.setState({ fireErrors: error.message });
      });
  };

  signupEmail() {
    this.setState({
      signupEmail: "",
    });
  }

  signupPassword() {
    this.setState({
      signupPassword: "",
    });
  }

  loginEmail() {
    this.setState({
      loginEmail: "",
    });
  }

  loginPassword() {
    this.setState({
      loginPassword: "",
    });
  }

  render() {
    let errorNotification = this.state.fireErrors ? (
      <div className="Error">{this.state.fireErrors}</div>
    ) : null;

    return (
      <div className="App">
        <h1>WELCOME TO TAPPED IN</h1>

        <Button onClick={this.openLoginModal} variant="primary" id="login">
          Login
        </Button>

        <Button onClick={this.openSignupModal} variant="primary" id="sign-up">
          Sign Up
        </Button>

        <Modal show={this.state.showSignupModal} id="modal-signup">
          <div class="modal-content">
            <h4>Sign Up</h4>
            <br />
            {errorNotification}
            <form id="signup-form">
              <div class="input-field">
                <input
                  type="email"
                  id="signup-email"
                  required
                  value={this.state.signupEmail}
                  name="signupEmail"
                  onChange={this.handleChange}
                />
                <label for="signup-email">Email address</label>
              </div>
              <div class="input-field">
                <input
                  type="text"
                  id="sign-password"
                  required
                  value={this.state.signupPassword}
                  name="signupPassword"
                  onChange={this.handleChange}
                />
                <label for="signup-password">Your password</label>
              </div>
              <Button variant="success" type="submit" onClick={this.signup}>
                Sign Up
              </Button>
              <Button
                onClick={this.closeSignupModal}
                variant="danger"
                id="close-signup"
              >
                X
              </Button>
            </form>
          </div>
        </Modal>

        <Modal show={this.state.showLoginModal} id="modal-login">
          <div class="modal-content">
            <h4>Login</h4>
            <br />
            <form id="login-form">
              <div class="input-field">
                <input
                  type="email"
                  id="login-email"
                  required
                  value={this.state.loginEmail}
                  name="loginEmail"
                  onChange={this.handleChange}
                />
                <label for="login-email">Email address</label>
              </div>
              <div class="input-field">
                <input
                  type="text"
                  id="login-password"
                  required
                  value={this.state.loginPassword}
                  name="loginPassword"
                  onChange={this.handleChange}
                />
                <label for="login-password">Your password</label>
              </div>
              <Button variant="success" type="submit" onClick={this.login}>
                Login
              </Button>
              <Button
                onClick={this.closeLoginModal}
                variant="danger"
                id="close-login"
              >
                X
              </Button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default LoginScreen;
