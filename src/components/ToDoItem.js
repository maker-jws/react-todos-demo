import "./ToDoItem.css";

export default function ToDoItem({ todo, index, isCompleted, markCompleted, ...props }) {
  const bgColor = index % 2 ? "lavenderItem" : "plumItem";
    console.log(todo)
  return (
    <li onClick={markCompleted} className={"ToDoListItem ".concat(bgColor)}>
      <div className="flex-ctr-ctr">{index + 1}</div>
      <span style={{textDecoration : isCompleted ? "line-through" : "" }}>{todo}</span>
    </li>
  );
}
