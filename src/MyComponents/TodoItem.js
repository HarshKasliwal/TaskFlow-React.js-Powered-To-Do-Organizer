import React from 'react'

export const TodoItem = (props) => {
  return (
    <div>
      <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p>
      <button className="button btn-danger btn-xsm" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
    </div>
  )
}

