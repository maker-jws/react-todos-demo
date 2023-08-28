import "./ToDoList.css";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, listName, markCompleted }) {
  // Array.map - instance method -> todos -> create an array of JSX elements from a source array
  const toDoListItems = todos.map(function (todo, idx) {
    // Important: "key" attributes for iterators are recommended to optimize react's virtual dom diff checks
    // "keys" should be unique and not change between re-renders
    return (
      <ToDoItem
        todo={todo.task}
        isCompleted={todo.completed}
        index={idx}
        markCompleted={(e)=>markCompleted(idx)}
        key={idx + todo.task.slice(0, 3)}
      />
    );
  });

  // .map -> array method -> always returns a new array of values for each element in the provide/source array.
  // toDoListItems = [ <p>To Do Item</p>,]

  return (
    <div className="container">
      <ul>{toDoListItems}</ul>
    </div>
  );
}

// module.exports = ToDoList
export default ToDoList;
