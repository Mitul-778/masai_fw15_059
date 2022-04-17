import './TodoItem.css'
export const TodoItem=({todo,handleStatus})=>{
    return(
        <div className='box'>
            <h2 key={todo.id} className={todo.status ? "strike": null}>{todo.title}</h2>
             <input type="checkbox" id="checkbox" onChange={()=>handleStatus(todo.id)} checked={todo.status}/>    
        </div>
    )
}