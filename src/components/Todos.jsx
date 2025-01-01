import React,{useState} from 'react'

const Todos=({todo,todos,setTodos,id})=> {
    const [edit,setEdit] = useState(false);
    const [inputedit,setInputedit] =useState(todo.name) 
    const onchangedsave =(e) =>{
        setInputedit(e.target.value)
    }
    const onEdit = () =>{
        setEdit(true);
    }
    const onSave =(id) =>{
        setEdit(false);
        if(inputedit){
            saveinput(inputedit,id)
        }
        else{
            setInputedit(todo.name)
        }
    }
    const saveinput = (inputedit) =>{
        const savetodos =[...todos]
        savetodos.forEach((item)=>{
            if(item.id !==todos.id){
                (todo.name =inputedit )
            }
        })
        setTodos(savetodos)
    }
    const onDelete = () => {
        setTodos(todos.filter((item)=>
            todo.id !==item.id
        ))
    }
    const onComplete = () =>{
        setTodos(todos.map((item)=>{
            if(todo.id === item.id){

                return{
                    ...item,completed: !item.completed
                }
            }
            return item
        }))
    }
    const onchangedit =() =>{}
    if(edit){
        return (
    
            <div className=''>
                <li className='mt-4'>
                    <input className='bg-[#9C74FA] p-2 mr-2 rounded' value={inputedit} onChange={onchangedsave}/>
                    <button className='button-save' onClick={()=>onSave(id)}>
                        <span className='bg-green-400 p-2 rounded ml-2'>Save</span>
                    </button>
                   
                </li>
            </div>
          )
    }else{
        return (
    
            <div className='todo-li'>
                <li className={`li-list ${todo.completed ?'line-through': ''}`}>
                    <span className='bg-[#9C74FA] p-2 mr-2 rounded'>{todo.name}</span>
                    <button className='button-complete bg-green-400 rounded-md mr-2 p-2 mt-4' onClick={onComplete}>
                        <span>Complete</span>
                    </button>
                    <button className='bg-blue-400 rounded-md mr-2 p-2 mt-4 ' onClick={onEdit}>
                        <span>Edit</span>
                    </button>
                    <button className='bg-red-400 rounded-md mr-2 p-2 mt-4' onClick={onDelete}>
                        <span>Delete</span>
                    </button>
                </li>
            </div>
          )
        

    }

  
}

export default Todos