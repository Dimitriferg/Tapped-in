import React, { Component } from "react";
import app from "./firebase";
import Title from "./src/Components/Title";
import Forms from "./src/Components/Forms";
import ToDoList from "./src/Components/ToDoList";
import Todo from "./src/Components/Todo";

class Home extends Component {
  logout = () => {
    app.auth().signOut();
  };

  render() {
    return (
      <div>
        <h1>You are home!</h1>
        <div>
          <Title />
          <Forms />
          <ToDoList />
        </div>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Home;
