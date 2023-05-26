import { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Checkbox } from "@mui/material";

import { DeleteOutline } from "@material-ui/icons";

import Calendar from "react-calendar";

interface item {
  id: number;
  text: string;
  completed: boolean;
  date?: any;
}

export default function TodoList() {
  const [todos, setTodos] = useState<item[]>([]);
  const [inputValue, setinputValue] = useState<string>("");
  const [date, setDate] = useState<any>();

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

  const todoDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = () => {
    if (inputValue !== "") {
      const newTodo: item = {
        id: Date.now(),
        text: inputValue,
        completed: false,
        date,
      };
      setTodos([...todos, newTodo]);
      setinputValue("");
    }
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
      <ul style={{ listStyle: "none" }}>
        {todos.map((todo) => (
          <div key={todo.id} style={{ display: "flex" }}>
            <Checkbox onClick={() => todoCompleted(todo.id)} />
            <li
              key={todo.id + 1}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text + " " + JSON.stringify(date)}
            </li>
            <DeleteOutline
              key={todo.id + 2}
              onClick={() => todoDelete(todo.id)}
            />
          </div>
        ))}
      </ul>
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
        onClick={addTodo}
        sx={{ height: "50px", width: "200px", marginTop: "10px" }}
      >
        Add todo
      </Button>
      <Calendar value={date} onChange={(value) => setDate(value)} />
    </div>
  );
}
