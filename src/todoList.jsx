import List from "@mui/material/List";
import { useState, useEffect } from "react";
import Items from "./TodoItems";
import TodoForm from "./todoForm";
import { v4 as uuid } from "uuid";

const getData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) return [];
  return data;
};

export default function TodoList() {
  const [todos, setTodo] = useState(getData);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const removeTodos = (id) => {
    setTodo((lastTodos) => {
      return lastTodos.filter((t) => t.id !== id);
    });
  };

  const check = (id) => {
    setTodo((prevTodo) => {
      return prevTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      });
    });
  };
  const addTodos = (text) => {
    setTodo((prevTodo) => {
      return [...prevTodo, { text: text, id: uuid(), done: false }];
    });
  };
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => {
        return (
          <Items
            todo={todo}
            key={todo.id}
            remove={() => removeTodos(todo.id)}
            check={() => check(todo.id)}
          />
        );
      })}
      <TodoForm addTodos={addTodos} />
    </List>
  );
}
