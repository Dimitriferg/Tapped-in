import React, { Component } from "react";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase/compat/app";
import { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import app from "./firebase";
import "./App.scss";
import Home from "./Home";
import LoginScreen from "./LoginScreen";
import { auth } from "./firebase";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    auth.onAuthStateChanged((user) => {
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

  render() {
    if (this.state.user !== null) {
      return <Home />;
    } else {
      return <LoginScreen />;
    }
  }
}

export default App;
