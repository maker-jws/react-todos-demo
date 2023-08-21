import "./App.css";

import ToDoList from "./ToDoList";
// const ToDoList = require('./ToDoList')

function App() {

  const doneArray = ["Have Fun" ,"Calm Down!"]
  const notDoneArray = ["Learn React", "Learn the MERN Stack", "Finish Pt1 of the dev skills react lab", "Eat Lunch"]

  // Where do we store "state" - local data? 
  // data in react - unidirectional -> data can only come from the parent, or be defind locally
  // if any two sibling components need to share state you should put the data at the parent level

  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Hello React!</h1>
        
        {/* JSX -> ToDoList */}
       
        <ToDoList todos={doneArray} listName={"Done"}/>
        <ToDoList todos={notDoneArray} listName={"Not Done"}/>
        
        {/* props.todos -> ToDoList */}
      </header>
    </div>
  );
}

export default App;
