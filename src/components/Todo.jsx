import React,{useState} from 'react'
import TodoForm from './TodoForm';
import Todolist from './Todolist';
import Sidebar from './Side';
function Todo() {
  const [todos,setTodos] = useState([]);
  return (
    <Sidebar>
    <div className="Todolist ">
    <h1 className='text-3xl font-bold ml-3 mb-8'style={{ color: '#9C74FA',fontSize:'28px'  }}>Todo List</h1>
      <div className="header flex flex-col">
        <div>
          <TodoForm todos={todos} setTodos={setTodos}></TodoForm>
          </div>
          <div><Todolist todos={todos} setTodos={setTodos}/></div>
      </div>
    </div>
    </Sidebar>
  )
}

export default Todo