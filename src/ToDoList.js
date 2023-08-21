// define a custom component - ToDoList
// export default function SomeComponent(){
// }

import "./ToDoList.css";

// importing child component values
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, listName }) {
  // props -> {todos: [], listName: ""}
  // props.todos[0] -> { todos: [...]}
  // object destructuring -> {variable} -> JS

  // Array.map - instance method -> todos -> create an array of JSX elements from a source array
  const toDoListItems = todos.map(function (todoStr, idx) {
    
    // Important: "key" attributes for iterators are recommended to optimize react's virtual dom diff checks
    // "keys" should be unique and not change between re-renders
    return <ToDoItem todo={todoStr} index={idx} key={idx+todoStr.slice(0,3)} />;
  });
  
  // .map -> array method -> always returns a new array of values for each element in the provide/source array.
  // toDoListItems = [ <p>To Do Item</p>,]
  
  console.log(toDoListItems);
  return (
    // all components must return a single set of tags
    <div className="container">
      {/* className is used in react for React Element */}
      {/* class is a reserved term and will cause a warning to appear in the dev console */}
      
      {/* <h3>{listName}</h3> */}

      <ul>
        {toDoListItems}
      </ul>
    </div>
  );
}

// module.exports = ToDoList
export default ToDoList;
