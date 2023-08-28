import "./App.css";

import { useState } from "react";

import ToDoList from "../ToDoList";
import NewTodoForm from "../NewTodoForm";
function App() {
  const [todos, setTodos] = useState([
    { task: "Learn React", completed: false },
    { task: "Learn the MERN Stack", completed: false },
    { task: "Have Fun", completed: false },
  ]);

  const [showTodos, setShowTodos] = useState(true);

  function handleHideClick() {
    setShowTodos(!showTodos);
  }

  function addTodo(todoStr) {
    // create a new object with content from our input (a string)
    // provide other default state to match 'shape' of the other todos

    const newTodo = { task: todoStr, completed: false };
    // test input/output
    // console.log(todo, newTodo)

    // add newTodo to a copy of our current todos
    setTodos([...todos, newTodo]);
  }

  function handleTodoClick(idx) {
    // console.log("clicking on todo", idx)
    // how can I tell react which object to update? -
    const allTodos = [...todos]; // create a shallow copy of the current todos
    // check length before mutation 
    console.log(allTodos.length);

    if (allTodos[idx].completed) {
      // if a todo is already completed: {task: "...", completed: true} -> then remove it from the allTodos array
      allTodos.splice(idx, 1);

      // check length after mutation
      console.log(allTodos.length)
    } else {

      // I am not modifying an object in state, i copying the data then modifying accessing its data in my function
      const updatedTodo = { ...todos[idx], completed: !todos[idx].completed };
      
      // check status of current todo's complete property
      console.log(updatedTodo)
      
      // assign (overwrite) todo at position idx with updated object (so that we don't directly modify the state object)
      allTodos[idx] = updatedTodo;
    }

    // in either case we have to update state - so we call our setter and provide the copy as new data to the setter function (dispatch render call)
    setTodos(allTodos);

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React To-Do</h1>
      </header>
      <main>
        <section>
          <br />
          <button onClick={handleHideClick}>
            {showTodos ? "Hide" : "Show"}
          </button>
        </section>
        {/* Conditionally render TodoList */}
        {showTodos && (
          <ToDoList todos={todos} markCompleted={handleTodoClick} />
        )}

        <NewTodoForm addTodo={addTodo} />
      </main>
    </div>
  );
}

export default App;
