import React, { useState, useEffect } from "react";
import app from "../../firebase";
import Todo from "./Todo";
import Forms from "./Forms";

export default function ToDoList() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    const todoRef = app.database().ref("Todo");
    todoRef.on("value", (snapshot) => {
      console.log("SNAPSHOTS", snapshot.val());
      const todosMap = snapshot.val();
      console.log("TODOSMAP", todosMap);
      const todos = [];

      for (const id in todosMap) {
        todos.push({ id, ...todosMap[id] });
      }
      console.log("TODOS", todos);
      setTodoList(todos);
    });
  }, []);
  return (
    <div>
      {todoList.length ? (
        todoList.map((t) => <Todo key={t.id} todo={t} />)
      ) : (
        <p>No Items</p>
      )}
    </div>
  );
}
