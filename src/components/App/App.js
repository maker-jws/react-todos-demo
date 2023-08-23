import "./App.css";

import {useState} from 'react'

import ToDoList from "../ToDoList";

function App() {

  const [todos, setTodos]=useState(["Learn React", "Learn the MERN Stack", "Have Fun"]);
  const [showTodos, setShowTodos]=useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <h1>React To-Do</h1>
      </header>

      {showTodos && <ToDoList todos={todos} />}

    </div>
  );
}

export default App;

