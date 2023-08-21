import "./App.css";



import ToDoList from "./ToDoList";
// const ToDoList = require('./ToDoList')





function App() {

  const todoListItems = ["Learn React", "Learn the MERN Stack", "Have Fun"]

  // Where do we store "state" - ie local data? In the parent scope where the data will be used!

  // data in react - unidirectional -> data can only come from the parent and be passed down to a child.

  // if some state is not going to change between components/renders you can define it at the module level. 
  
  // if any two sibling components need to share state you should put the data at the parent level of the two components

  return (
    <div className="App">
      <header className="App-header">
        <h1>React To-Do</h1>
      </header>
        
        {/* JSX -> <ToDoList/> */}
       
        {/* <ToDoList todos={doneArray} listName={"Done"}/> */}

        <ToDoList todos={todoListItems} listName={"Not Done"}/>
        
        {/* props.todos -> ToDoList */}
        
    </div>
  );
}

export default App;
