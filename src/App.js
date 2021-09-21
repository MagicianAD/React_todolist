import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
import React, { useState } from "react";

function App() {
  const [inputText, setinputText] = useState(""); // send prop fromupper to lower that why all intialization here
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Sticky Notes</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setinputText={setinputText}
      />
      <Todolist setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
