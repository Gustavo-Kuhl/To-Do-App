import React, { useState } from "react";
import { Header } from "./components/Header/Header.jsx";
import { TodoForm } from "./components/Main/TodoForm";
import { TodoList } from "./components/Main/TodoList"
import { Container } from "./components/Main/style.js";
import "./App.css";

export default function App() {
  const [todo, setTodo] = useState([]);

  return (
    <div className="App">
      <Header />
      <Container>
        <TodoForm todo={todo} setTodo={setTodo} />
        <TodoList todo={todo} />
      </Container>
    </div>
  );
}
