import React, {useState} from "react";
import "./TaskForm.css"
import Tag from "./Tag";
const TaskForm =({setTasks}) =>{
    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags : [],
    })
    const checkTag = (tag) => {
        return taskData.tags.some(item => item === tag)
    }
    const selectTag = (tag) =>{
        if(taskData.tags.some(item => item === tag)){
           const filterTags = taskData.tags.filter(item => item !== tag )
           setTaskData(prev => {
            return {...prev, tags: filterTags}
           })
        }
        else {
            setTaskData((prev) =>{
                return {...prev, tags: [...prev.tags, tag]}
            })
        }
    }
    const handleChange = (e) => {
        const {name, value} = e.target ;
        setTaskData(prev => {
            return {...prev, [name] : value} 
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setTasks(prev => {
            return [...prev, taskData] 
        });
        setTaskData({
            task: "",
            status: "todo",
            tags : [],
        });
    }
      
    return(
        <header className="app_header">
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="task"
                value={taskData.task}
                className="task_input" 
                placeholder="Enter your task"
                onChange={handleChange}
                />
                <div className="task_form_bottom_line">
                    <div className="left flex">
                        <div className="mr-10">
                    <h6 className=' text-gray-400 font-bold mt-3'>importance:</h6>
                    <Tag tagName="Critical" 
                     selectTag={selectTag} selected={checkTag("Critical")} />
                    <Tag tagName="Important"  
                    selectTag={selectTag} selected={checkTag("Important")} />
                    <Tag tagName="Normal"  
                    selectTag={selectTag} selected={checkTag("Normal")} />
                    <Tag tagName="Low_Priority"  
                    selectTag={selectTag} selected={checkTag("LowPriority")} />
                    </div>
                    <div>
                    <h6 className="text-gray-400 font-bold mt-3">tags:</h6>
                    <Tag tagName="Work_Professional"  
                    selectTag={selectTag} selected={checkTag("Work/Professional")} />
                    <Tag tagName="Personal"  
                    selectTag={selectTag} selected={checkTag("Personal")} />
                    <Tag tagName="Household"  
                    selectTag={selectTag} selected={checkTag("Household")} />
                    <Tag tagName="Social"  
                    selectTag={selectTag} selected={checkTag("Social")} />
                    </div>
                    </div>
                    <div className="right">
                    <select 
                        className="task_status"
                        name="status"
                        value={taskData.status}
                        onChange={handleChange}>
                        <option value="todo">To do</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                        <option value="review">Need Review</option>
                    </select>
                    <button type="submit" className="task_submit">+ Add Task</button>
                    </div>
                </div>
            </form>
      </header>
    )
}
export default TaskForm;