import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
import React, { useEffect, useState } from "react";

function App() {
  const [inputText, setinputText] = useState(""); // send prop fromupper to lower that why all intialization here
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilterTodos] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setfilterTodos(todos.filter((todo) => todo.completed === true));
        console.log(todos);
        console.log("above");
        break;

      case "uncompleted":
        setfilterTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setfilterTodos(todos);
        break;
    }
  };

  useEffect(() => {
    filterHandler();
    console.log("inside useeffect");
  }, [todos, status]);

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
        setStatus={setStatus}
      />
      <Todolist
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
