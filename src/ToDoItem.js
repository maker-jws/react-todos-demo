import "./ToDoItem.css"

export default function ToDoItem( {todo, index} ){
    console.log("testing props", todo)
    // we will evaluate the index prop -> if even provide one style, if odd another style  rule

    const bgColor = index%2 ? "lavenderItem": "plumItem"
    console.log(index, index%2)
    
    return(<li className={ bgColor}>{todo}</li>)
}