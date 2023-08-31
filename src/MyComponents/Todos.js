import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem"
export const Todos = (props) => {
  let myStyle={
    minHeight: "70vh",
    margin: "50px auto"
  }
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="text-center my-4">Todos List</h3>
      {props.todos.length===0?  <p className='text-center' >No Todos to display</p>:
      props.todos.map((todo)=>{
        return (
          <><TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr/>
          </>
        
      )
      })
      }
      
    </div>
  )
}

export default Todos

