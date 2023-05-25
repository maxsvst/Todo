import { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

interface item {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<item[]>([]);
  const [inputValue, setinputValue] = useState<string>("");

  const todoCompleted = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  const handleClick = () => {
    const newTodo: item = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Todo List</h2>
      <ol>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => todoCompleted(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ol>
      <TextField
        type="text"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
        placeholder="Enter todo"
        sx={{ width: "200px" }}
      />
      <Button
        variant="outlined"
        type="button"
        onClick={handleClick}
        sx={{ height: "50px", width: "200px", marginTop: "10px" }}
      >
        Add todo
      </Button>
    </div>
  );
}
