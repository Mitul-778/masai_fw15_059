import { useState } from "react"
import { TodoItem } from "./TodoItem"

export const CompletedTodo=({completedTodo,data}) =>{
    // const [todoDone,settodoDone] = useState([])
    // const completedTodo = (todoList) =>{
    //     settodoDone(todoList.filter((e)=> (e.status ? {...todoDone,e}:null)))
    //   }
return( 
    <>    <button onClick={()=>{completedTodo(data)}}>Show Completed Todo's</button>
    {/* {todoDone.map((e) => (
        <TodoItem deleteItem={deleteItem} todo={e} />
      ))} */}
    </>

)
}