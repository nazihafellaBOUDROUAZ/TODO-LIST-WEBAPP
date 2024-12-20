import React,{useState} from 'react'
import {v4 as uuid} from 'uuid'
const TodoForm =({todos,setTodos})=> {
    const [input,setInput] = useState('');
    const onchange = (e) => {
        setInput(e.target.value)
    }
    const onsubmit = (e) =>{
        e.preventDefault();
        setTodos([
            ...todos,{name:input,completed:false,id:uuid()}
        ])
        setInput('');
    }
  return (
    <form onSubmit={onsubmit}>
        <input className='form-input bg-[#f3f0f077] p-2 rounded  '
        type='text'
        placeholder='enter a task'
        autoComplete='off'
        value={input}
        onChange={onchange}
        />
        <button className="border-solid border-black border-2 p-2 rounded ml-4" type='onSubmit' >Add</button>
    </form>
  )
}

export default TodoForm