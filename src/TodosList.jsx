import React from 'react'

const handleCheckbox = (todo, todos, index, setTodos) => {
  const newTodo = {content: todo.content, completed: !todo.completed};
  let newTodos = [...todos];
  newTodos[index] = newTodo;
  setTodos(newTodos);
}

const handleDelete = (todos, i, setTodos) => {
  let newTodos = [...todos];
  newTodos.splice(i,1);
  setTodos(newTodos);
}

const TodosList = (props) => {
  return (
    <div key='todos list'>
      {props.todos.map((t,i) =>
        <div className='d-flex align-items-center m-2 align-middle'>
          <p className='d-inline-block align-middle col-5'>{(t.completed ? <del>{t.content}</del> : t.content)}</p>
          <input type="checkbox" name="completed" id={'completed ' + i} checked={(t.completed ? true : false)} onChange={ () => handleCheckbox(t, props.todos, i, props.setTodos)} />
          <button className="btn btn-danger mx-2" onClick={e => handleDelete(props.todos, i, props.setTodos)}>Delete</button>
        </div>)}
    </div>
  )
}

export default TodosList