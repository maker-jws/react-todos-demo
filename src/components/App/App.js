import "./App.css";

import { useState } from "react";

import ToDoList from "../ToDoList";
import NewTodoForm from "../NewTodoForm";
function App() {
  const [todos, setTodos] = useState([
    "Learn React",
    "Learn the MERN Stack",
    "Have Fun",
  ]);
  
  const [showTodos, setShowTodos] = useState(true);
  
  function handleHideClick (){
    setShowTodos(!showTodos)
  }
  
  function addTodo(todo){
    setTodos([...todos, todo])
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>React To-Do</h1>
      </header>
      <main>
        <section>
          <br/>
          <button onClick={handleHideClick}>{showTodos ? "Hide" : "Show"}</button>
        </section>
        {/* Conditionally render TodoList */}
        {showTodos && <ToDoList todos={todos} />}

        <NewTodoForm addTodo={addTodo}/>
      </main>
    </div>
  );
}

export default App;
