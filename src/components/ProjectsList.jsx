// src/components/ProjectsList.jsx
import React, { useState, useEffect } from 'react';
import Side from './Side.jsx';
import TaskForm from './TaskForm';
import TaskColumn from './TaskColumn';


const oldTasks = localStorage.getItem("tasks");

function ProjectsList() {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  return (
    <Side>
    <div>
    <h2 className="text-3xl font-bold ml-3 mb-10  "style={{ color: '#9C74FA',fontSize:'28px'  }}>Project List </h2>
    <p className=' text-gray-400 font-bold -mb-7  '>Write Your Task Here : </p>
        <TaskForm setTasks={setTasks} />
        {/* Add the Dashboard component to display the task percentages */}
       
        <main className="app_main">
          <TaskColumn title="To do" tasks={tasks} status="todo" handleDelete={handleDelete} />
          <TaskColumn title="Doing" tasks={tasks} status="doing" handleDelete={handleDelete} />
          <TaskColumn title="Done" tasks={tasks} status="done" handleDelete={handleDelete} />
          <TaskColumn title="Need Review" tasks={tasks} status="review" handleDelete={handleDelete} />
        </main>
    </div>
    </Side>
  );
}

export default ProjectsList;
