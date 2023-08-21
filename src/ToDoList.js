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
  return (
    // all components must return a single set of tags
    <div>
        <h3>{listName}</h3>
    <ul>
      <ToDoItem todo={todos[0]}/>
      <ToDoItem todo={todos[1]}/>
      <ToDoItem todo={todos[2]}/>
      <ToDoItem todo={todos[3]}/>
      {/* props - an interface for provide data scoped at a parent component to the child component */}

      {/* <JSPractice testProp={"Hello World"} firstName="Joshua"/> */}
     
    </ul>
    </div>
  );

}

// module.exports = ToDoList
export default ToDoList;

