import "./ToDoItem.css";

export default function ToDoItem({ todo, index, ...props }) {
  const bgColor = index % 2 ? "lavenderItem" : "plumItem";

  return <li className={"ToDoListItem ".concat(bgColor)}><div className="flex-ctr-ctr">{index+1}</div>{todo}</li>;
}
