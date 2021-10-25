import React, { useState } from "react";
import firebase from "firebase/compat/app";
import { database } from "../firebase";

import app from "../firebase";

export default function Forms() {
  const [taskName, setTaskName] = useState("");

  const createToDo = (e) => {
    e.preventDefault();
    console.log("firebaseInstance", app);
    const todoRef = app.database().ref("Todo");
    const todo = {
      taskName,
      completed: false,
    };
    todoRef.push(todo);
    setTaskName("");
  };

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  return (
    <form onSubmit={createToDo}>
      <input
        type="text"
        placeholder="Enter A ToDo..."
        className="task-input"
        value={taskName}
        required
        onChange={handleChange}
      />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
}
