import React from 'react'
import TodoItem from './TodoItem'


const Todos = (props) => {


  return (
    <div className='container my-3' >
      <h3 className="text-center my-3">To Do List</h3>
      {props.todos.length===0?"No Todos to Display" :
      props.todos.map((todo)=>{
        return(
          
          <TodoItem todo={todo} key={todo.srNo} onDelete={props.onDelete}/>
          
          
          
          ) ; 
          
      })
      }
     
    </div>
  )
}
//defult export
export default Todos
