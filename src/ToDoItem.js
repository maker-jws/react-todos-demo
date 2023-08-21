import "./ToDoItem.css"

export default function ToDoItem( {todo, index, ...props} ){
    {/* props - an interface for provide data scoped at a parent component to the child component */}
    // prop destructuring is a convenient way to access prop data without having to write 'props.prop1', 'props.prop2, etc. 

    console.log(props)
    console.log("testing props", todo)
    // we will evaluate the index prop -> if even provide one style, if odd another style  rule

    const bgColor = index%2 ? "lavenderItem": "plumItem"
    console.log(index, index%2)
    
    return(<li className={ "ToDoListItem ".concat(bgColor)}>{todo}</li>)
}