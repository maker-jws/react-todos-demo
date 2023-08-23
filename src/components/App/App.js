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



  // Where do we store "state" - ie local data? In the parent scope where the data will be used!

  // data in react - unidirectional -> data can only come from the parent and be passed down to a child.

  // if some state is not going to change between components/renders you can define it at the module level.

  // if any two sibling components need to share state you should put the data at the parent level of the two components
