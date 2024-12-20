import React from 'react'
import Todos from './Todos'
const Todolist= ({todos,setTodos})=> {
  return (
    <div>
        <ul>
            {todos.map((todo)=>(
                <Todos
                key={todo.id}
                id={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                
                />
            ))}
        </ul>
    </div>
  )
}

export default Todolist