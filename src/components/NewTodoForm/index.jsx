import { useState } from "react";

export default function NewTodoForm({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  function handleChange(e) {
    setNewTodo(e.target.value);
  }

  function handleAddTodo(e) {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  }
  return (
    <>
      <hr />
      <section className="container">
        <h2>New To-Do</h2>
        <form onSubmit={handleAddTodo}>
          <input
            onChange={handleChange}
            placeholder="New To-Do"
            type="text"
            name="todo"
            required
            value={newTodo}
            pattern=".{4,}"
          />
          <button type="submit">ADD TO-DO</button>
        </form>
      </section>
    </>
  );
}
