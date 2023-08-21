// define a custom component - ToDoList

// export default function SomeComponent(){

// }

// importing child component values
import ToDoItem from "./ToDoItem";

import JSPractice from './JSExpressionPractice'

function ToDoList({todos, listName}) {
    // props -> {todos: [], listName: ""}
    // props.todos[0] -> { todos: [...]}
    // object destructuring -> {variable} -> JS
  

    // Array.map - instance method -> todos -> create an array of JSX elements
    const toDoListItems = todos.map(function(todoStr){return(<ToDoItem todo={todoStr}/>)})
    // .map -> array method -> always returns a new array of values for each element in the provide/source array. 
    // toDoListItems = [ <p>To Do Item</p>,]
    console.log(toDoListItems)
    return (
    // all components must return a single set of tags
    <div>
        <h3>{listName}</h3>
       
    <ul>
    { toDoListItems }
      {/* <ToDoItem todo={todos[0]}/>
      <ToDoItem todo={todos[1]}/>
      <ToDoItem todo={todos[2]}/>
      <ToDoItem todo={todos[3]}/> */}
      {/* props - an interface for provide data scoped at a parent component to the child component */}

      {/* <JSPractice testProp={"Hello World"} firstName="Joshua"/> */}
     
    </ul>
    </div>
  );

}

// module.exports = ToDoList
export default ToDoList;

