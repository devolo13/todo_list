import React, { useState } from 'react'


const TodoForm = (props) => {
  const addTodo = content => {
    props.setTodos([...props.todos, {content: content, completed: false} ]);
  }
  const [newTodo, setNewTodo] = useState('');
  return (
    <div key='form'>
      <input type="text" className='form-control m-2' id='testInput' onChange={( e => setNewTodo(e.target.value) )}  />
      <button className="btn btn-primary m-2" onClick={(() => addTodo(newTodo))} >Add</button>
    </div>
  )
}

export default TodoForm