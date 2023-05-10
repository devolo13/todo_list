// import thing from ./place.jsx

import { useState } from "react";
import TodoForm from "./TodoForm";
import TodosList from "./TodosList";

function App() {
  const [todos, setTodos] = useState([{content: "Write several Todos", completed: false},{content: "Take a nap", completed: false},{content: "Waste too much time", completed: true}]);
  
  return (
    <div className="container my-3" key='main box'>
      <TodoForm todos={todos} setTodos={setTodos}/>
      <TodosList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
