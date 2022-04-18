import './TodoItem.css'
export const TodoItem=({todo,handleStatus,deleteItem})=>{
    return(
        <div className='box'>
             <input type="checkbox" id="checkbox" onChange={()=>handleStatus(todo.id)} checked={todo.status}/>
             <h2 key={todo.id} className={todo.status ? "strike": null}>{todo.title}</h2>
             <button onClick={()=>{deleteItem(todo.id)}}>Delete</button>    
        </div>
    )
}