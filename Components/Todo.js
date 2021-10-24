import React, { useState, useEffect } from "react";
import app from "../../firebase";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Todo({ todo }) {
  const [taskName, setTaskName] = useState("");

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };
  const completeTodo = () => {
    const todoRef = app.database().ref("Todo").child(todo.id);
    todoRef.update({
      completed: !todo.completed,
    });
  };
  const updateTodo = () => {
    const todoRef = app.database().ref("Todo").child(todo.id);
    todoRef.update({
      taskName: taskName,
    });
  };
  const deleteTodo = () => {
    const todoRef = app.database().ref("Todo").child(todo.id);
    todoRef.remove();
  };

  useEffect(() => {
    setTaskName(todo.taskName);
  }, []);

  return (
    <li>
      <input
        type="text"
        value={taskName}
        className="list"
        onChange={handleChange}
      />

      {todo != undefined && todo.complete ? null : (
        <Button
          className="button-complete task-button"
          onClick={completeTodo}
          variant="success"
          data-testid="complete"
        >
          Complete
        </Button>
      )}
      <Button
        className="button-complete task-button"
        onClick={updateTodo}
        variant="primary"
      >
        Update
      </Button>
      <Button
        className="button-complete task-button"
        onClick={deleteTodo}
        variant="danger"
      >
        delete
      </Button>
    </li>
  );
}
